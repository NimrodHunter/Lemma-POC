// SPDX-License-Identifier: MIT
pragma solidity >=0.8.4;

import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "../node_modules/@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "./ChainLinkConsumer.sol";

//solhint-disable-line
contract USDLFactory is ERC20, ChainLinkConsumer, ReentrancyGuard {

    //uint256 private immutable MAX_UINT = type(uint256).max;
    address private USDC_ADDRESS;
    address private FUND_MANAGER;

    mapping(address => bool) tokenAllowed;

    event Deposited(address indexed sender, address indexed token, uint256 indexed amount);
    event EtherFund(address indexed from, uint256 amount);
    event Redeemed(address indexed sender, address indexed token, uint256 indexed amount);

    constructor(address usdcAddress_, address manager_)
        ERC20("Lemma USD", "USDL") ChainLinkConsumer()
    {
        require(usdcAddress_ != address(0), "USDC address should not be 0");
        require(manager_ != address(0), "Manager address should not be 0");
        USDC_ADDRESS = usdcAddress_;
        FUND_MANAGER = manager_;
        tokenAllowed[USDC_ADDRESS] = true;
        tokenAllowed[address(0)] = true;

    }

    function mint(address token, uint256 amount) public virtual nonReentrant returns (bool) {
        require(amount > 0, "you must send something");
        require(token != address(0), "token address should not be 0");
        require(allowedToken(token), "token not allowed");
        require(_transferFrom(msg.sender, token, amount), "transfer from fails");
        _mint(msg.sender, mintedAmount(token, amount));
        emit Deposited(msg.sender, token, amount);
        return true;
    }

    function mint() public payable virtual nonReentrant returns (bool) {
        require(msg.value > 0, "you must send some eth");
        _mint(msg.sender, mintedAmount(address(0), msg.value));
        require(_safeTransferEth(msg.value), "send eth fails");
        emit Deposited(msg.sender, address(0), msg.value);
        return true;
    }

    function fund() public payable virtual returns (bool) {
        require(msg.value > 0, "you must send something");
        emit EtherFund(msg.sender, msg.value);
        return true;
    }

    function redeem(address token, uint256 amount) public virtual nonReentrant returns (bool) {
        require(allowedToken(token), "token not allowed");
        require(amount > 0, "you must send something");
        require(IERC20(address(this)).balanceOf(msg.sender) > 0, "must have enough tokens");
        uint256 _reedemAmount = reedemAmount(token, amount);
        if (token != address(0)) {
            require(IERC20(token).balanceOf(address(this)) >= _reedemAmount, "this contract doesn't enough amount");
            require(_safeTransferToken(token, msg.sender, _reedemAmount));
        } else {
            require(address(this).balance >= _reedemAmount, "this contract doesn't enough amount");
            require(_safeTransferEth(_reedemAmount));
        }   
        _burn(msg.sender, amount); 
        emit Redeemed(msg.sender, token, _reedemAmount);
        return true;
    }

    receive() external payable {
        mint();
    }

    fallback() external payable {
        mint();
    }

    function mintedAmount(address token, uint256 amount) public virtual view returns(uint256) {
        return (_tokenPrice(token) * amount) / _tokenPrice(address(this));
    }

    function reedemAmount(address token, uint256 amount) public virtual view returns (uint256) {
        return (_tokenPrice(address(this)) * amount) / _tokenPrice(token);
    }

    function allowedToken(address token) public virtual view returns (bool) {
        return tokenAllowed[token];
    }
    
    function _transferFrom(address from, address token, uint256 amount) internal virtual returns (bool) {
        SafeERC20.safeTransferFrom(IERC20(token), from, FUND_MANAGER, amount);
        return true;
    }

    function _safeTransferEth(uint256 amount) internal virtual returns (bool) {
        (bool sent, ) = FUND_MANAGER.call{value: amount}("");
        return sent;
    }

    function _safeTransferToken(address token, address to, uint256 amount) internal virtual returns (bool) {
        require(token != address(0), "must be valid token");
        require(to != address(0), "must be valid address");
        require(amount > 0, "you must send something");
        SafeERC20.safeTransfer(IERC20(token), to, amount);
        return true;
    }

    function _tokenPrice(address token) internal virtual view returns (uint256) {
       if (token != address(0)) return uint256(getLatestPrice(1));
       else return uint256(getLatestPrice(0));
    }

}

