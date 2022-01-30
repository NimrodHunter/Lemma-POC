import { artifacts, ethers, waffle } from "hardhat";
import type { Artifact } from "hardhat/types";
import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";

import type { USDLFactory } from "../../src/types/USDLFactory";
import type { FakeUSDC } from "../../src/types/FakeUSDC";
import type { BasisTradingVault } from "../../src/types/BasisTradingVault";
import { Signers } from "../types";
import { shouldBehaveLikeBasisTradingVault } from "./BasisTradingVault.behavior";

describe("Unit tests", function () {
  before(async function () {
    this.signers = {} as Signers;

    const signers: SignerWithAddress[] = await ethers.getSigners();
    this.signers.admin = signers[0];
    this.maxUint256 = ethers.constants.MaxUint256;
  });

  describe("Basis Trading Vault", function () {
    beforeEach(async function () {

      const fakeUSDCArtifact: Artifact = await artifacts.readArtifact("FakeUSDC");
      this.fakeUSDC= <FakeUSDC>await waffle.deployContract(this.signers.admin, fakeUSDCArtifact, []);

      const USDLFactoryArtifact: Artifact = await artifacts.readArtifact("USDLFactory");
      this.factory = <USDLFactory>await waffle.deployContract(this.signers.admin, USDLFactoryArtifact, [
        this.fakeUSDC.address,
        await this.signers.admin.getAddress()
      ]);

      const basisTradingVaultArtifact: Artifact = await artifacts.readArtifact("BasisTradingVault");
      this.basisTradingVault= <BasisTradingVault>await waffle.deployContract(this.signers.admin, basisTradingVaultArtifact, []);

    });

    shouldBehaveLikeBasisTradingVault();
  });
});