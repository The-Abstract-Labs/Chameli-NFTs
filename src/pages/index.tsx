import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import styles_btn from "../styles/button.module.css";
import MyHeader from "@/components/myheader";
import CWbutton from "@/components/cw-button";
import React, { useState } from "react";
import { Web3Button } from "@web3modal/react";
import { mintNFT } from "../utils/interact.js";
import { useAccount } from 'wagmi';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { address } = useAccount();

  return (
    <div className="h-24 min-h-full">
      <MyHeader />
      <div className={styles.backgroundImage}></div>
      <div className={styles.box}>
        <img src="/giphy.gif" alt="" className={styles.giphy} />
        <Web3Button />
        <div className={styles_btn.button} onClick={() => mintNFT(address)}>
          <a>Mint NFT</a>
        </div>
      </div>
    </div>
  );
}
