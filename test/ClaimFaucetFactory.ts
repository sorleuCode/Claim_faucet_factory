import {
    loadFixture,
  } from "@nomicfoundation/hardhat-toolbox/network-helpers";
  import { expect, should } from "chai";
  import { ethers } from "hardhat"; // Import ethers directly
  import "@nomicfoundation/hardhat-toolbox";
  import "@nomicfoundation/hardhat-ethers";
  
  describe("Claim_Faucet_Factory", function () {

    let token1 = {
      name: "SoliuToken",
      symbol: "SLT"
    }
  
    async function deployClaimFaucetFactoryFixture() {
      const  ClaimFaucetFactory = await ethers.getContractFactory("ClaimFaucetFactory");
      const claimFaucetFactory = await ClaimFaucetFactory.deploy();
  
      const [deployer] = await ethers.getSigners(); // Get signers
  
  
      return { claimFaucetFactory, deployer};
    }
    
    describe('Deploy', () => {
      it("Should deploy claimaFaucetFactory correctly", async function name() {

        const {claimFaucetFactory} =  await loadFixture(deployClaimFaucetFactoryFixture);

        expect( await claimFaucetFactory.getAddress()).to.be.properAddress;
        
      });

  
      
    });

    describe('Functions', () => {
      it("should deploy ClaimFaucet contract correctly", async function () {
        
      
        const {claimFaucetFactory} = await loadFixture(deployClaimFaucetFactoryFixture);
        const deployedAddress =  await claimFaucetFactory.deployClaimFaucet(token1.name, token1.symbol);

         expect(deployedAddress).to.be.properAddress;

      })
      
    })
    


   
  
   
  
  
  
   
  
  
  });
  