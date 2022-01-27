import { task } from "hardhat/config";
import { TaskArguments } from "hardhat/types";

import { Vesting } from "../../src/types/Vesting";
import { Vesting__factory } from "../../src/types/factories/Vesting__factory";

task("deploy:Vesting")
  .setAction(async function (taskArguments: TaskArguments, { ethers }) {
    const vestingFactory: Vesting__factory = <Vesting__factory>await ethers.getContractFactory("Vesting");
    const vesting: Vesting = <Vesting>await vestingFactory.deploy(
      taskArguments.beneficiaryAddress, taskArguments.startTimestamp, taskArguments.durationSeconds
    );
    await vesting.deployed();
    console.log("Vesting deployed to: ", vesting.address);
  });
