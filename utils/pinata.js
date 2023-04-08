// const key = process.env.REACT_APP_PINATA_KEY;
// const secret = process.env.REACT_APP_PINATA_SECRET;
const key = "ed917e0acb71e1b58633";
const secret =
  "a18c72e6cf360896c8f54285e2b646a0fd4e686404c21d6d2002da8f04fb8675";

const axios = require("axios");

export const pinJSONToIPFS = async (JSONBody) => {
  const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
  //making axios POST request to Pinata ⬇️
  return axios
    .post(url, JSONBody, {
      headers: {
        pinata_api_key: key,
        pinata_secret_api_key: secret,
      },
    })
    .then(function (response) {
      return {
        success: true,
        pinataUrl:
          "https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash,
      };
    })
    .catch(function (error) {
      console.log(error);
      return {
        success: false,
        message: error.message,
      };
    });
};
