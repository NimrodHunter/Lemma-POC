// SPDX-License-Identifier: MIT
pragma solidity >=0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

//solhint-disable-line
contract FakeUSDC is ERC20 {

    uint256 private immutable MAX_UINT = type(uint256).max;

    constructor()
        ERC20("Fake USDC", "FUSDC")
    {
        _mint(msg.sender, MAX_UINT);
    }

}

