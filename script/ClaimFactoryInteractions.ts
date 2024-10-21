import hre from "hardhat";

async function main() {

    const DEPLOYED_FACTORY_CONTRACT = "0x67C3A0F118B94dBe528E562AA8Ffe80C2A278060";

    const myAccount = "0xdf3A9C7bed041f90c51452a2B03cE44b80aF2E2F";

    const signer = await hre.ethers.getSigner(myAccount)

    const factoryContractInstance = await hre.ethers.getContractAt("ClaimFaucetFactory", DEPLOYED_FACTORY_CONTRACT);


    //starting scripting

    console.log("########### deploying claim faucet ##########")

    const deployClaimFaucetTx1 =  await factoryContractInstance.connect(signer)
    .deployClaimFaucet("Lisk Token", "LSK");

    deployClaimFaucetTx1.wait();

    console.log({"Claim faucet 1 deployed to": deployClaimFaucetTx1})

    const deployClaimFaucetTx2 = await factoryContractInstance
    .connect(signer)
    .deployClaimFaucet("Starknet Token", "STRK");

    deployClaimFaucetTx2.wait();

    console.log({"Claim faucet 2 deployed to": deployClaimFaucetTx2});

    console.log("######## Getting the  length and data of deployed Claim Faucet ########");

    const getLengthOfDeployedContract = await factoryContractInstance.getLengthOfDeployedContract();

    console.log({"Length of Claim Faucets": getLengthOfDeployedContract.toString()});


    const getUserContracts = await factoryContractInstance.connect(signer).getUserDeployedContracts();

    console.table(getUserContracts);

    console.log("######## Getting User Deployed Claim Faucet by Index ########");

    const {deployer_: deployerA, deployedContract_: deployedContractA} = await factoryContractInstance
    .connect(signer)
    .getUserDeployedContractByIndex(0);

    const {deployer_: deployerB, deployedContract_: deployedContractB} = await factoryContractInstance
    .connect(signer)
    .getUserDeployedContractByIndex(1);


    console.log([{"Deployer": deployerA, "Deployed Contract Address": deployedContractA},
                {"Deployer": deployerB, "Deployed Contract Address": deployedContractB},
            ]);


    console.log("######## Getting Deployed Contract Info ########");

    const contractInfo1 = await factoryContractInstance.getInfoFromContract(deployedContractA);

    console.table(contractInfo1);

    const contractInfo2 = await factoryContractInstance.getInfoFromContract(deployedContractB);

    console.table(contractInfo2);


    console.log("########## Claiming token and Getting User Balance on  the Token ##########");

    const claimTokenFaucetTx1 = await factoryContractInstance
    .connect(signer)
    .claimFaucetFromContract(deployedContractA);

    claimTokenFaucetTx1.wait()


    const claimTokenFaucetTx2 = await factoryContractInstance
    .connect(signer)
    .claimFaucetFromContract(deployedContractB);

    claimTokenFaucetTx2.wait();

    const checkUserbalForToken1 = await factoryContractInstance
    .connect(signer)
    .getBalanceFromDeployedContract(deployedContractA);

    const checkUserbalForToken2 = await factoryContractInstance
    .connect(signer)
    .getBalanceFromDeployedContract(deployedContractB);

    console.log({
        "Faucet 1 Balance": hre.ethers.formatUnits(checkUserbalForToken1, 18),
        "Faucet 2 Balance": hre.ethers.formatUnits(checkUserbalForToken2, 18),

    });









    
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1
})