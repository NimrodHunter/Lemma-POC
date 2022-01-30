import { expect } from "chai";
import { ethers } from "hardhat";
import { increaseTime } from "../utils/utils";

export function shouldBehaveLikeUSDLFactory(): void {

    it("Successful Approve Transfer Fake USDC", async function () {

        let owner = this.signers.admin;
        let ownerAddress = await owner.getAddress();

        let approveTx = await this.fakeUSDC.connect(owner).approve(this.factory.address, this.maxUint256);
        await approveTx.wait();

        let allowedAmount = await this.fakeUSDC.connect(owner).allowance(ownerAddress, this.factory.address);
        expect(allowedAmount).to.equal(this.maxUint256);
    
    
    });
 
    it("Successful Transfer Fake USDC and get USDL", async function () {
        let owner = this.signers.admin;
        let ownerAddress = await owner.getAddress();
        let mintedAmount = 1000;

        let approveTx = await this.fakeUSDC.connect(owner).approve(this.factory.address, this.maxUint256);
        await approveTx.wait();

        let mintTx = await this.factory.connect(owner)["mint(uint256)"](mintedAmount);
        await mintTx.wait();

        //console.log(mintedTx.events?.filter((x) => {return x.event == "VaultTransfered"}));

        let ownerUSDLBalance = await this.factory.connect(owner).balanceOf(ownerAddress);
        expect(ownerUSDLBalance.toNumber()).to.be.a('number');
        expect(ownerUSDLBalance.toNumber()).to.equal(mintedAmount);
    });

    it("Successful Mint with Ether and get USDL", async function () {
        let owner = this.signers.admin;
        let ownerAddress = await owner.getAddress();
        let mintedAmount = ethers.utils.parseUnits("2.0", "ether");
        let etherValue = 2500;

        let mintTx = await this.factory.connect(owner)["mint()"]({ value: mintedAmount });
        let mintedTx = await mintTx.wait();

        //let a  = mintedTx.events?.filter((x) => {return x.event == "Messages"});
        //a = mintedTx.events?.filter((x) => {return x.event == "Messages"});
        //let a  = ethers.utils.AbiCoder(this.factory.mint);

        let ownerUSDLBalance = await this.factory.connect(owner).balanceOf(ownerAddress);
        expect(ownerUSDLBalance).to.equal(mintedAmount.mul(etherValue));     
        
    });
 /*
    it("Successful Fund with", async function () {
        let owner = this.signers.admin;
        let ownerAddress = await owner.getAddress();
        let fundedAmount = ethers.utils.parseUnits("3.0", "ether");

        //expect(await this.factory.connect(owner)["fund()"]({ value: fundedAmount })).to.emit(this.factory, "EtherFund").withArgs(ownerAddress, fundedAmount)
        //await fundTx.wait();
        await this.factory.connect(owner)["fund()"]({ value: fundedAmount });
        //console.log(mintedTx.events?.filter((x) => {return x.event == "VaultTransfered"}));

        //let ownerUSDLBalance = await this.factory.connect(owner).balanceOf(ownerAddress);
        //console.log(ownerUSDLBalance)
        //expect(ownerUSDLBalance).to.equal(mintedAmount.mul(etherValue)); 
    });
*/

}