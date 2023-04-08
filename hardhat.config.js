require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.18",
// };

require("@nomiclabs/hardhat-ethers");
// const { API_URL, PRIVATE_KEY } = process.env;
const API_URL =
  "https://polygon-mumbai.g.alchemy.com/v2/RTsvhorGnm-S58Hbu1ehNP_BzXidq_4D";
const PRIVATE_KEY =
  "a86e67d43297c9e0a3baeaee12a80891878f2ea69701ea3bb4063a5ab57d6d62";

module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
