import { task } from "hardhat/config";
import { TaskArguments } from "hardhat/types";

import { DaoShares } from "../../src/types/DaoShares";
import { DaoShares__factory } from "../../src/types/factories/DaoShares__factory";

task("deploy:DaoShares")
  .addParam("greeting", "Say hello, be nice")
  .setAction(async function (taskArguments: TaskArguments, { ethers }) {
    const daoSharesFactory: DaoShares__factory = <DaoShares__factory>await ethers.getContractFactory("ERC721");
    const daoShares: DaoShares = <DaoShares>await daoSharesFactory.deploy();
    await daoShares.deployed();
    console.log("DaoShares deployed to: ", daoShares.address);
  });
