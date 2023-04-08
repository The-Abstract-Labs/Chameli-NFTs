import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css';
import MyHeader from '@/components/myheader';
import CWbutton from '@/components/cw-button';
import MNbutton from '@/components/mn-button';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="h-24 min-h-full">
      <MyHeader/>
      <div className={styles.backgroundImage}> 
      </div>
      <div className={styles.box}>
          <img src="/giphy.gif" alt="" className={styles.giphy}/>
          {/* <button className={styles.buttono}>Connect Wallet</button> */}
          <CWbutton/>
          <MNbutton/>
      </div> 
    </div>

  )
}
