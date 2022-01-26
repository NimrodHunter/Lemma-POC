// SPDX-License-Identifier: MIT
pragma solidity >=0.8.4;

import "@openzeppelin/contracts/token/ERC777/ERC777.sol";

//solhint-disable-line
contract DaoToken is ERC777 {
    constructor(uint256 initalSupply, address[] memory defaultOperators) ERC777("DaoToken", "DTC", defaultOperators) {
        _mint(msg.sender, initalSupply, "", "");
    }
}
