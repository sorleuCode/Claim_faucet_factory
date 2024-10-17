import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ClaimFaucetContractModule = buildModule("ClaimFaucetContractModule", (m) => {
  const claimFaucetFactory = m.contract("ClaimFaucetFactory");

  


  return { claimFaucetFactory };
});

export default ClaimFaucetContractModule;



