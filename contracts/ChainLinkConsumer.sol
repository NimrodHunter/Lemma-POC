// SPDX-License-Identifier: MIT
pragma solidity >=0.8.4;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract ChainLinkConsumer {

    mapping(uint32 => AggregatorV3Interface) internal priceFeed;

    /**
     * Network: Ethereum
     * Aggregator: ETH/USD
     * Address: 0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419
     */
     /**
     * Network: Ethereum
     * Aggregator: USDC/USD
     * Address: 0x8fFfFfd4AfB6115b954Bd326cbe7B4BA576818f6
     */
    constructor() {
        priceFeed[0] = AggregatorV3Interface(0x8fFfFfd4AfB6115b954Bd326cbe7B4BA576818f6);
        priceFeed[1] = AggregatorV3Interface(0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419);
    }

    /**
     * Returns the latest price
     */
    function getLatestPrice(uint32 currency) internal view returns (int) {
        //(, int price, , , ) = priceFeed[currency].latestRoundData(); real call
        int price;
        if (currency == 0) {
            price = 2500;
        } else price = 1;
        return price;
    }
}