import { expect } from "chai";

export function shouldBehaveLikeDaoShares(): void {

    it("mint a new share", async function () { 
    let owner = await this.signers.admin;
    let ownerAddress = await owner.getAddress();
    let tx = await this.daoShares.connect(owner).mintShares(ownerAddress, "")
    await tx.wait();
    expect(tx).to.emit(this.daoShares, 'NewShare').withArgs(ownerAddress, ownerAddress, 1);
    let shareId = await this.daoShares.connect(owner).getCurrenttokenId() 
    expect(shareId.toNumber()).to.be.a('number');
    expect(shareId.toNumber()).to.equal(1);
    
    });
}