import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import type { Fixture } from "ethereum-waffle";

import type { FakeUSDC } from "../src/types/FakeUSDC";
import type { USDLFactory } from "../src/types/USDLFactory";

declare module "mocha" {
    export interface Context {
        factory: USDLFactory;
        loadFixture: <T>(fixture: Fixture<T>) => Promise<T>;
        signers: Signers;
    }
    export interface Context {
        fakeUSDC: FakeUSDC;
        loadFixture: <T>(fixture: Fixture<T>) => Promise<T>;
        signers: Signers;
    }
}

export interface Signers {
    admin: SignerWithAddress;
}