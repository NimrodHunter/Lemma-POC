import { artifacts, ethers, waffle } from "hardhat";
import type { Artifact } from "hardhat/types";
import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";

import type { Vesting } from "../../src/types/Vesting";
import type { VestedToken } from "../../src/types/VestedToken";
import { Signers } from "../types";
import { shouldBehaveLikeVesting } from "./Vesting.behavior";

describe("Unit tests", function () {
  before(async function () {
    this.signers = {} as Signers;

    const signers: SignerWithAddress[] = await ethers.getSigners();
    this.signers.admin = signers[0];
  });

  describe("Vesting", function () {
    beforeEach(async function () {
      let initialSupply = 1000;
      let beneficiary = this.signers.admin.getAddress();

      const vestedTokenArtifact: Artifact = await artifacts.readArtifact("VestedToken");
      this.vestedToken = <VestedToken>await waffle.deployContract(this.signers.admin, vestedTokenArtifact, [initialSupply]);

      const vestingArtifact: Artifact = await artifacts.readArtifact("Vesting");
      this.vesting= <Vesting>await waffle.deployContract(this.signers.admin, vestingArtifact, [
        beneficiary, Math.floor(Date.now()/1000), 180 
      ]);
    });

    shouldBehaveLikeVesting();
  });
});