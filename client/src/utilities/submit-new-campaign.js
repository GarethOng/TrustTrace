import { ethers } from "ethers";
const fs = require('fs');

async function submitForm(totalAmount, regulatorAddress, segmentPercentages) {

  // Check if MetaMask is installed
  if (typeof window.ethereum !== 'undefined') {
    
    // Request account access
    await window.ethereum.request({ method: 'eth_requestAccounts' });

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = provider.getSigner();

    const contractArtifact = JSON.parse(fs.readFileSync('artifacts/contracts/TrustTrace.sol/TrustTrace.json', 'utf8'));
    const trustTraceAbi = contractArtifact.abi;
    const trustTraceBytecode = contractArtifact.bytecode;

    const trustUSDAddress = "0x32dFb7521Fa685fA2d0BA5dD9462B56a2c6EA5C5";
    const trustTraceFactory = new ethers.ContractFactory(trustTraceAbi, trustTraceBytecode, signer);

    const trustTrace = await trustTraceFactory.deploy(
      trustUSDAddress,
      ethers.utils.parseUnits(totalAmount.toString(), 18),
      regulatorAddress,
      segmentPercentages
    );

    await trustTrace.deployTransaction.wait();  // Wait for the deployment transaction to be mined

    const deployedContractAddress = trustTrace.address;
    console.log("TrustTrace deployed to:", deployedContractAddress);

    verifyContract(deployedContractAddress, trustUSDAddress, ethers.utils.parseUnits(totalAmount.toString(), 18).toString(), regulatorAddress, segmentPercentages);

  } else {
    console.error("MetaMask not found");
  }

}