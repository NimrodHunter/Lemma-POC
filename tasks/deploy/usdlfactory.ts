import { task } from "hardhat/config";
import { TaskArguments } from "hardhat/types";

import { USDLFactory } from "../../src/types/USDLFactory";
import { USDLFactory__factory } from "../../src/types/factories/USDLFactory__factory";

task("deploy:USDLFactory")
  .setAction(async function (taskArguments: TaskArguments, { ethers }) {
    const usdlFactoryFactory: USDLFactory__factory = <USDLFactory__factory>await ethers.getContractFactory("USDLFactory");
    const usdlFactory: USDLFactory = <USDLFactory>await usdlFactoryFactory.deploy(taskArguments.usdcAddress_, taskArguments.manager_);
    await usdlFactory.deployed();
    console.log("USDLFactory deployed to: ", usdlFactory.address);
  });
