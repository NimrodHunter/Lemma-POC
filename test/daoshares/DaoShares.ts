import { artifacts, ethers, waffle } from "hardhat";
import type { Artifact } from "hardhat/types";
import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";

import type { DaoShares } from "../../src/types/DaoShares";
import { Signers } from "../types";
import { shouldBehaveLikeDaoShares } from "./DaoShares.behavior";

describe("Unit tests", function () {
  before(async function () {
    this.signers = {} as Signers;

    const signers: SignerWithAddress[] = await ethers.getSigners();
    this.signers.admin = signers[0];
  });

  describe("Dao Shares", function () {
    beforeEach(async function () {
      const daoSharesArtifact: Artifact = await artifacts.readArtifact("DaoShares");
      this.daoShares = <DaoShares>await waffle.deployContract(this.signers.admin, daoSharesArtifact);
    });

    shouldBehaveLikeDaoShares();
  });
});