const hre = require("hardhat");

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const lockedAmount = hre.ethers.utils.parseEther("0.001");

  const Mintnft = await hre.ethers.getContractFactory("Mintnft");
  const mintnft = await Mintnft.deploy();

  await mintnft.deployed();

  console.log(
    `Mintnft with ${ethers.utils.formatEther(
      lockedAmount
    )}ETH and unlock timestamp ${unlockTime} deployed to ${mintnft.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});