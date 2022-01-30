// SPDX-License-Identifier: MIT
pragma solidity >=0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./USDLFactory.sol";

//solhint-disable-line
contract BasisTradingVault is ERC20 {

    address private USDL;

    constructor(address USDL_)
        ERC20("Staked USDL", "xUSDL")
    {
        require(USDL_ != address(0), "USD must be a real address");
        USDL = USDL_;
    }
    

}

