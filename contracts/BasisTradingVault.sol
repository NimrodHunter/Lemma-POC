// SPDX-License-Identifier: MIT
pragma solidity >=0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

//solhint-disable-line
contract BasisTradingVault is ERC20 {

    constructor()
        ERC20("Staked USDL", "xUSDL")
    {}

}

