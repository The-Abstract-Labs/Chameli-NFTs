import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="h-24 min-h-full">
      <div className={styles.backgroundImage}>
        <div className="box-border h-32 w-32 p-4 border-4 ">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">blah blah</button>
        </div>  
      </div>
    </div>

  )
}
