import hre from "hardhat";

async function main() {

    const DEPLOYED_FACTORY_CONTRACT = "0x67C3A0F118B94dBe528E562AA8Ffe80C2A278060";

    const myAccount = "0xdf3A9C7bed041f90c51452a2B03cE44b80aF2E2F";

    const signer = await hre.ethers.getSigner(myAccount)

    const factoryContractInstance = await hre.ethers.getContractAt("ClaimFaucetFactory", DEPLOYED_FACTORY_CONTRACT);
    
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1
})