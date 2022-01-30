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

        let mintTx = await this.factory.connect(owner).mint(mintedAmount);
        await mintTx.wait();

        //console.log(mintedTx.events?.filter((x) => {return x.event == "VaultTransfered"}));

        let ownerUSDLBalance = await this.factory.connect(owner).balanceOf(ownerAddress);
        expect(ownerUSDLBalance.toNumber()).to.be.a('number');
        expect(ownerUSDLBalance.toNumber()).to.equal(mintedAmount);
    });

    it("Successful Second Token Release after 180 seconds", async function () {
        let owner = this.signers.admin;

        let transferTx = await this.vestedToken.connect(owner).transfer(this.vesting.address, 600);
        await transferTx.wait();

        await increaseTime(10);

        let releaseTx = await this.vesting.connect(owner)["release(address)"](this.vestedToken.address);
        await releaseTx.wait();

        let contractBalance = await this.vestedToken.connect(owner).balanceOf(this.vesting.address);
        expect(contractBalance.toNumber()).to.be.a('number');
        expect(contractBalance.toNumber()).to.equal(540);

        await increaseTime(190);

        releaseTx = await this.vesting.connect(owner)["release(address)"](this.vestedToken.address);
        await releaseTx.wait();
        expect(contractBalance.toNumber()).to.be.a('number');        
        
    });

/* 
    it("Revert if the release is before 180 seconds", async function () {
        let owner = this.signers.admin;

        let transferTx = await this.vestedToken.connect(owner).transfer(this.vesting.address, 600);
        await transferTx.wait();

        await increaseTime(10);

        let releaseTx = await this.vesting.connect(owner)["release(address)"](this.vestedToken.address);
        await releaseTx.wait();

        let contractBalance = await this.vestedToken.connect(owner).balanceOf(this.vesting.address);
        expect(contractBalance.toNumber()).to.be.a('number');
        expect(contractBalance.toNumber()).to.equal(540);

        await increaseTime(30);

        await expect(this.vesting.connect(owner)["release(address)"](this.vestedToken.address)).to.be.revertedWith("already vested")     
        
    });


*/
}