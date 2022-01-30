import { task } from "hardhat/config";
import { TaskArguments } from "hardhat/types";

import { BasisTradingVault } from "../../src/types/BasisTradingVault";
import { BasisTradingVault__factory } from "../../src/types/factories/BasisTradingVaultC__factory";

task("deploy:BasisTradingVault")
  .setAction(async function (taskArguments: TaskArguments, { ethers }) {
    const basisTradingVaultFactory: BasisTradingVault__factory = <BasisTradingVault__factory>await ethers.getContractFactory("BasisTradingVault");
    const basisTradingVault: BasisTradingVault = <BasisTradingVault>await basisTradingVaultFactory.deploy();
    await basisTradingVault.deployed();
    console.log("BasisTradingVault deployed to: ", basisTradingVault.address);
  });
