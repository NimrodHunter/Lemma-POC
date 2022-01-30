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
        let USDCAddress = this.fakeUSDC.address;

        let approveTx = await this.fakeUSDC.connect(owner).approve(this.factory.address, this.maxUint256);
        await approveTx.wait();

        let mintTx = await this.factory.connect(owner)["mint(address,uint256)"](USDCAddress, mintedAmount);
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

    it("Successful redeem Ether with USDL", async function () {
        let owner = this.signers.admin;
        let ownerAddress = await owner.getAddress();
        let mintedAmount = ethers.utils.parseUnits("2.0", "ether");
        let fundedAmount = ethers.utils.parseUnits("3.0", "ether");
        let etherValue = 2500;
        let address0 = ethers.constants.AddressZero;
        let USDLAmountToRedeem = mintedAmount.mul(etherValue).div(2);
        

        let mintTx = await this.factory.connect(owner)["mint()"]({ value: mintedAmount });
        await mintTx.wait();

        let ownerUSDLBalance = await this.factory.connect(owner).balanceOf(ownerAddress);
        expect(ownerUSDLBalance).to.equal(mintedAmount.mul(etherValue));

        let fundTx = await this.factory.connect(owner).fund({ value: fundedAmount });
        await fundTx.wait();

        let factoryBalance = await ethers.provider.getBalance(this.factory.address);

        let redeemTx = await this.factory.connect(owner).redeem(address0, USDLAmountToRedeem);
        await redeemTx.wait();

        let ownerNewUSDLBalance = await this.factory.connect(owner).balanceOf(ownerAddress);
        expect(ownerNewUSDLBalance).to.equal(ownerUSDLBalance.sub(USDLAmountToRedeem));
        
        let reedemAmount = await this.factory.connect(owner).reedemAmount(address0, USDLAmountToRedeem);
        let newFactoryBalance = await ethers.provider.getBalance(this.factory.address);

        expect(newFactoryBalance).to.equal(factoryBalance.sub(reedemAmount));

    });

    it("Successful redeem Fake USDC with USDL", async function () {
        let owner = this.signers.admin;
        let ownerAddress = await owner.getAddress();
        let mintedAmount = 1000;
        let fundedAmount = 3000;
        let USDLAmountToRedeem = 500;
        let USDCAddress = this.fakeUSDC.address;

        let approveTx = await this.fakeUSDC.connect(owner).approve(this.factory.address, this.maxUint256);
        await approveTx.wait();

        let mintTx = await this.factory.connect(owner)["mint(address,uint256)"](USDCAddress, mintedAmount);
        await mintTx.wait();

        let ownerUSDLBalance = await this.factory.connect(owner).balanceOf(ownerAddress);
        expect(ownerUSDLBalance).to.equal(mintedAmount);

        let fundTx = await this.fakeUSDC.connect(owner).transfer(this.factory.address, fundedAmount);
        await fundTx.wait();

        let factoryBalance = await this.fakeUSDC.connect(owner).balanceOf(this.factory.address);

        let redeemTx = await this.factory.connect(owner).redeem(USDCAddress, USDLAmountToRedeem);
        await redeemTx.wait();

        let ownerNewUSDLBalance = await this.factory.connect(owner).balanceOf(ownerAddress);
        expect(ownerNewUSDLBalance).to.equal(ownerUSDLBalance.sub(USDLAmountToRedeem));
        
        let reedemAmount = await this.factory.connect(owner).reedemAmount(USDCAddress, USDLAmountToRedeem);
        let newFactoryBalance = await this.fakeUSDC.connect(owner).balanceOf(this.factory.address);

        expect(newFactoryBalance).to.equal(factoryBalance.sub(reedemAmount));

    });

}