import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Comics.module.css'
import ComicsIndex from '../components/ComicsIndex'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

      <main className={styles.main}>
        <ComicsIndex></ComicsIndex>
      </main>
    </>
  )
}
