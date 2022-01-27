// SPDX-License-Identifier: MIT
pragma solidity >=0.8.4;

import "@openzeppelin/contracts/finance/VestingWallet.sol";

//solhint-disable-line
contract Vesting is VestingWallet {

    uint256 private immutable vestingPercentage = 10;

    event Releasable(uint256 indexed releasable);
    event Times(uint64 indexed timestamp, uint256 indexed start, uint256 indexed duration);

    mapping(address => uint256) private _erc20Released;
    mapping (uint256 => bool) private _vested;

    constructor(address beneficiaryAddress, uint64 startTimestamp, uint64 durationSeconds)
        VestingWallet(beneficiaryAddress, startTimestamp, durationSeconds)
    {}

    function release(address token) public override {
        uint64 timestamp = uint64(block.timestamp);

        require(timestamp >= uint64(start()), "Vesting not started yet");

        uint256 totalAllocation = IERC20(token).balanceOf(address(this)) + released(token);
        
        uint256 isVested = (timestamp - start()) / duration();

        require(!(_vested[isVested]), "already vested");

        uint256 releasable = totalAllocation / vestingPercentage;

        emit Releasable(releasable);

        require(releasable > 0, "run out of tokens");

        _erc20Released[token] += releasable;
        emit ERC20Released(token, releasable);
        SafeERC20.safeTransfer(IERC20(token), beneficiary(), releasable);
        
        _vested[isVested] = true;
    }

}

