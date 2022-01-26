import { task } from "hardhat/config";
import { TaskArguments } from "hardhat/types";

import { DaoToken } from "../../src/types/DaoToken";
import { DaoToken__factory } from "../../src/types/factories/DaoToken__factory";

task("deploy:DaoToken")
  .addParam("greeting", "Say hello, be nice")
  .setAction(async function (taskArguments: TaskArguments, { ethers }) {
    const daoTokenFactory: DaoToken__factory = <DaoToken__factory>await ethers.getContractFactory("ERC721");
    const daoToken: DaoToken = <DaoToken>await daoTokenFactory.deploy(1000, []);
    await daoToken.deployed();
    console.log("DaoToken deployed to: ", daoToken.address);
  });
