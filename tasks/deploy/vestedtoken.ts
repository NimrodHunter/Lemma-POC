import { task } from "hardhat/config";
import { TaskArguments } from "hardhat/types";

import { VestedToken } from "../../src/types/VestedToken";
import { VestedToken__factory } from "../../src/types/factories/VestedToken__factory";

task("deploy:VestedToken")
  .setAction(async function (taskArguments: TaskArguments, { ethers }) {
    const vestedTokenFactory: VestedToken__factory = <VestedToken__factory>await ethers.getContractFactory("VestedToken");
    const vestedToken: VestedToken = <VestedToken>await vestedTokenFactory.deploy(taskArguments.initialSupply_);
    await vestedToken.deployed();
    console.log("Vesting deployed to: ", vestedToken.address);
  });
