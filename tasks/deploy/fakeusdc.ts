import { task } from "hardhat/config";
import { TaskArguments } from "hardhat/types";

import { FakeUSDC } from "../../src/types/FakeUSDC";
import { FakeUSDC__factory } from "../../src/types/factories/FakeUSDC__factory";

task("deploy:FakeUSDC")
  .setAction(async function (taskArguments: TaskArguments, { ethers }) {
    const fakeUSDCFactory: FakeUSDC__factory = <FakeUSDC__factory>await ethers.getContractFactory("FakeUSDC");
    const fakeUSDC: FakeUSDC = <FakeUSDC>await fakeUSDCFactory.deploy();
    await fakeUSDC.deployed();
    console.log("FakeUSDC deployed to: ", fakeUSDC.address);
  });
