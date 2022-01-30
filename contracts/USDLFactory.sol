// SPDX-License-Identifier: MIT
pragma solidity >=0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

//solhint-disable-line
contract USDLFactory is ERC20, ReentrancyGuard {

    uint256 private immutable MAX_UINT = type(uint256).max;
    address private USDC_ADDRESS;
    address private FUND_MANAGER;

    event VaultTransferred(address indexed origin, address indexed token, uint256 indexed amount);
    event EtherFund(address indexed from, uint256 amount);
    event Messages(bytes indexed data, bytes4 indexed sig);

    constructor(address usdcAddress_, address manager_)
        ERC20("Lemma USD", "USDL")
    {
        require(usdcAddress_ != address(0), "USDC address should not be 0");
        require(manager_ != address(0), "Manager address should not be 0");
        USDC_ADDRESS = usdcAddress_;
        FUND_MANAGER = manager_;

    }

    function mint(uint256 amount) external virtual nonReentrant returns (bool) {
        require(_transferFrom(amount));
        _mint(msg.sender, _usdcValue() * amount);
        require(_safeTransferToken(USDC_ADDRESS, amount), "send token fails");
        emit VaultTransferred(msg.sender, USDC_ADDRESS, amount);
        return true;
    }

    function mint() public payable virtual nonReentrant returns (bool) {
        require(msg.value > 0, "you must send something");
        emit Messages(msg.data, msg.sig);
        _mint(msg.sender, _ethValue() * msg.value);
        require(_safeTransferEth(msg.value), "send eth fails");
        emit VaultTransferred(msg.sender, address(0), msg.value);
        return true;
    }

    function fund() public payable virtual nonReentrant returns (bool) {
        require(msg.value > 0, "you must send something");
        emit EtherFund(msg.sender, msg.value);
        return true;
    }

    receive() external payable {
        fund();
    }

    fallback() external payable {
        if (bytes4(keccak256("mint()")) == bytes4(msg.data)) {
            mint();
        } else {
            fund();
        }
    }

    function _transferFrom(uint256 amount) internal virtual returns (bool) {
        require(amount > 0, "you must send something");
        require(IERC20(USDC_ADDRESS).transferFrom(msg.sender, address(this), amount), "transfer from can't be done");
        return true;
    }

    function _safeTransferEth(uint256 amount) internal virtual returns (bool) {
        (bool sent, ) = FUND_MANAGER.call{value: amount}("");
        return sent;
    }

    function _safeTransferToken(address token, uint256 amount) internal virtual returns (bool) {
        SafeERC20.safeTransfer(IERC20(token), FUND_MANAGER, amount);
        return true;
    }

    function _usdcValue() internal virtual returns (uint256) {
        return 1;
    }

    function _ethValue() internal virtual returns (uint256) {
        return 2500;
    }

}

