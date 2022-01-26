// SPDX-License-Identifier: MIT
pragma solidity >=0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

//solhint-disable-line
contract DaoShares is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    event NewShare(address indexed _from, address indexed _stakeHolder, uint256 indexed _shareId);

    constructor() ERC721("DaoStake", "DSC") {}

    function getCurrenttokenId() public view virtual returns (uint256) {
        return _tokenIds.current();
    }

    function mintShares(address _stakeHolder, string memory _tokenURI) public returns (uint256) {
        _tokenIds.increment();

        uint256 newShareId = _tokenIds.current();
        _mint(_stakeHolder, newShareId);
        _setTokenURI(newShareId, _tokenURI);

        emit NewShare(msg.sender, _stakeHolder, newShareId);

        return newShareId;
    }

    
}
