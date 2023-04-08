// const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const alchemyKey =
  "https://eth-ropsten.alchemyapi.io/v2/VDFRZtv7lpxPlG2fl0PUeNPw7mWSsQ3B";
console.log(alchemyKey);
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);
import { pinJSONToIPFS } from "./pinata.js";

const contractABI = require("./MyNFT.json");
// const abi = fs.readFileSync("./MyNFT.json");
// const contractABI = JSON.parse(abi);
const contractAddress = "0xDDa67C91a31c1C2Aeb0536add0c77fb16Dd5DEb6";

export const mintNFT = async () => {
  //error handling
  let url = "./publicgiphy.gif";
  let name = "Cool NFT";
  let description = "Monkey";
  if (url.trim() == "" || name.trim() == "" || description.trim() == "") {
    return {
      success: false,
      status: "❗Please make sure all fields are completed before minting.",
    };
  }

  //make metadata
  const metadata = new Object();
  metadata.name = name;
  metadata.image = url;
  metadata.description = description;

  //pinata pin request
  const pinataResponse = await pinJSONToIPFS(metadata);
  if (!pinataResponse.success) {
    return {
      success: false,
      status: "😢 Something went wrong while uploading your tokenURI.",
    };
  }
  const tokenURI = pinataResponse.pinataUrl;

  //load smart contract
  window.contract = new web3.eth.Contract(contractABI.abi, contractAddress); //loadContract();

  //set up your Ethereum transaction
  const transactionParameters = {
    to: contractAddress, // Required except during contract publications.
    from: window.ethereum.selectedAddress, // must match user's active address.
    data: window.contract.methods
      .mintNFT(window.ethereum.selectedAddress, tokenURI)
      .encodeABI(), //make call to NFT smart contract
  };

  //sign transaction via MetaMask
  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });
    return {
      success: true,
      status:
        "✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/" +
        txHash,
    };
  } catch (error) {
    return {
      success: false,
      status: "😥 Something went wrong: " + error.message,
    };
  }
};
