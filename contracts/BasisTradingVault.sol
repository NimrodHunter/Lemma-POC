// SPDX-License-Identifier: MIT
pragma solidity >=0.8.4;

import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "../node_modules/@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "./USDLFactory.sol";

//solhint-disable-line
contract BasisTradingVault is ERC20, ReentrancyGuard {

    address payable private USDL;
    address private FUND_MANAGER;

    event Deposited(address indexed sender, address indexed token, uint256 indexed amount);

    constructor(address payable USDL_, address manager_)
        ERC20("Staked USDL", "xUSDL")
    {
        require(USDL_ != address(0), "USD must be a real address");
        require(manager_ != address(0), "Manager address should not be 0");
        USDL = USDL_;
        FUND_MANAGER = manager_;
    }

    function deposit(address token, uint256 amount) external virtual nonReentrant returns (bool) {
        require(USDLFactory(USDL).allowedToken(token) || token == USDL, "token not allowed");
        require(_transferFrom(msg.sender, token, amount), "transfer from fails");
        _mint(msg.sender, mintedAmount(token, amount));
        require(_safeTransferToken(token, FUND_MANAGER, amount), "send token fails");
        emit Deposited(msg.sender, token, amount);
        return true;
    }

    function mintedAmount(address token, uint256 amount) public virtual view returns(uint256) {
        return (_tokenPrice(token) * amount) / _tokenPrice(address(this));
    }

    function _tokenPrice(address token) internal virtual pure returns (uint256) {
        if (token != address(0)) return 1;
        else return 2500;
    }

    function _safeTransferToken(address token, address to, uint256 amount) internal virtual returns (bool) {
        require(token != address(0), "must be valid token");
        require(to != address(0), "must be valid address");
        require(amount > 0, "you must send something");
        SafeERC20.safeTransfer(IERC20(token), to, amount);
        return true;
    }

    function _transferFrom(address from, address token, uint256 amount) internal virtual returns (bool) {
        require(amount > 0, "you must send something");
        SafeERC20.safeTransferFrom(IERC20(token), from, address(this), amount);
        return true;
    }
    

}

