import React from 'react'
import styles from '../styles/myheader.module.css'
import Image from 'next/image'
import logo from 'public/logo.png'
import abslab from 'public/abstract-labs.png'

function MyHeader() {
  return (
    <div className={styles.header}>
      <div>
     <Image className={styles.logoo} src={logo} alt="" />
     <Image className={styles.logoo} src={abslab} alt=""/>
     </div>
     <div className = {styles.myheader}>NFT Minter</div>
    </div>
  )
}

export default MyHeader