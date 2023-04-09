import Head from "next/head";
import styles from "../styles/Home.module.css";
import styles_btn from "../styles/button.module.css";
import MyHeader from "../components/myheader";
import { Web3Button } from "@web3modal/react";
import {
  useDisconnect,
  usePrepareContractWrite,
  useContractWrite,
} from "wagmi";
import { useWeb3ModalTheme } from "@web3modal/react";
import w3mv2ProxyContractABI from "../abi/w3mv2ProxyContractABI.json";
import Image from "next/image";
import { ethers } from "ethers";

export default function Home() {
  const { theme, setTheme } = useWeb3ModalTheme();
  const { disconnect } = useDisconnect();

  setTheme({ themeColor: "blackWhite" });

  const { config } = usePrepareContractWrite({
    address: "0x398e3493d980533bB77Ff7e26A8C6C80f6D52C1C",
    abi: w3mv2ProxyContractABI,
    functionName: "purchase",
    args: [1],
    overrides: { value: ethers.utils.parseEther("0.001") },
  });

  const { data, write: mintNFT } = useContractWrite(config);

  return (
    <>
      <div className="h-24 min-h-full">
        <MyHeader />
        <div className={styles.backgroundImage}></div>
        <div className={styles.box}>
          <Image
            src="/giphy.gif"
            style={{
              border: "1px solid grey",
              marginTop: "3em",
              borderRadius: "1em",
              marginBottom: "2em",
            }}
            width={250}
            height={250}
            alt="gateway"
          />
          <Web3Button />
          <div
            className={styles_btn.button}
            style={{
              marginBottom: "3em",
              marginTop: "2em",
            }}
            onClick={() => mintNFT?.()}
          >
            <a>Mint NFT</a>
          </div>
        </div>
      </div>
    </>
  );
}
