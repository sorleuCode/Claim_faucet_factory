import {
    loadFixture,
  } from "@nomicfoundation/hardhat-toolbox/network-helpers";
  import { expect } from "chai";
  import { ethers } from "hardhat"; // Import ethers directly
  import "@nomicfoundation/hardhat-toolbox";
  import "@nomicfoundation/hardhat-ethers";
  
  describe("Claim_Faucet_Factory", function () {
  
    async function deployFaucetFixture() {
      const  ClaimFaucetFactory = await ethers.getContractFactory("ClaimFaucetFactory");
      const faucet = await ClaimFaucetFactory.deploy();
  
      const [owner, addr1, addr2, addr3] = await ethers.getSigners(); // Get signers
  
  
      return { faucet, owner, addr1, addr2, addr3 };
    }
    
    describe('Deploy', () => {


      
    })
    
    it("should deploy and set the owner correctly", async function () {
      const { faucet, owner } = await loadFixture(deployFaucetFixture);
  
    });
  
   
  
  
  
   
  
  
  });
  