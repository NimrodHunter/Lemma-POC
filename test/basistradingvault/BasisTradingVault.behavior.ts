import { expect } from "chai";
import { ethers } from "hardhat";
import { increaseTime } from "../utils/utils";

export function shouldBehaveLikeBasisTradingVault(): void {

    it("Successful Approve Transfer Fake USDC", async function () {

        let owner = this.signers.admin;
        let ownerAddress = await owner.getAddress();

        let approveTx = await this.fakeUSDC.connect(owner).approve(this.basisTradingVault.address, this.maxUint256);
        await approveTx.wait();

        let allowedAmount = await this.fakeUSDC.connect(owner).allowance(ownerAddress, this.basisTradingVault.address);
        expect(allowedAmount).to.equal(this.maxUint256);
    
    
    });

    it("Successful Deposit Fake USDC and get xUSDL", async function () {
        let owner = this.signers.admin;
        let ownerAddress = await owner.getAddress();
        let depositAmount = 1000;

        let approveTx = await this.fakeUSDC.connect(owner).approve(this.basisTradingVault.address, this.maxUint256);
        await approveTx.wait();

        let depositTx = await this.basisTradingVault.connect(owner).deposit(this.fakeUSDC.address, depositAmount)
        await depositTx.wait();

        //console.log(mintedTx.events?.filter((x) => {return x.event == "Vaulteposited"}));

        let ownerxUSDLBalance = await this.basisTradingVault.connect(owner).balanceOf(ownerAddress);
        let mintedAmount = await this.basisTradingVault.connect(owner). mintedAmount(this.fakeUSDC.address, depositAmount);
        expect(ownerxUSDLBalance.toNumber()).to.be.a('number');
        expect(ownerxUSDLBalance.toNumber()).to.equal(mintedAmount);
    });
 /*
    it("Successful Mint with Ether and get USDL", async function () {
        let owner = this.signers.admin;
        let ownerAddress = await owner.getAddress();
        let mintedAmount = ethers.utils.parseUnits("2.0", "ether");
        let etherValue = 2500;

        let mintTx = await this.factory.connect(owner)["mint()"]({ value: mintedAmount });
        let mintedTx = await mintTx.wait();

        let ownerUSDLBalance = await this.factory.connect(owner).balanceOf(ownerAddress);
        expect(ownerUSDLBalance).to.equal(mintedAmount.mul(etherValue));     
        
    });

    it("Successful Fund with Ether", async function () {
        let owner = this.signers.admin;
        let ownerAddress = await owner.getAddress();
        let fundedAmount = ethers.utils.parseUnits("3.0", "ether");

        expect(await this.factory.connect(owner).fund({ value: fundedAmount })).to.emit(this.factory, "EtherFund").withArgs(ownerAddress, fundedAmount);
        let contractBalance = await ethers.provider.getBalance(this.factory.address);
        expect(contractBalance).to.equal(fundedAmount);
    });

    it("Successful Fund with Ether, whitout calling fund()", async function () {
        let owner = this.signers.admin;
        let ownerAddress = await owner.getAddress();
        let fundedAmount = ethers.utils.parseUnits("3.0", "ether");

        expect(await owner.sendTransaction({
            to: this.factory.address,
            value: fundedAmount
        })).to.emit(this.factory, "EtherFund").withArgs(ownerAddress, fundedAmount);
        let contractBalance = await ethers.provider.getBalance(this.factory.address);
        expect(contractBalance).to.equal(fundedAmount);
        
    });
*/
}