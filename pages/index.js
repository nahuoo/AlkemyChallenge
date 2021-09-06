import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import heroes from '../components/fetch' 
import { AddSuper } from '../components/AddSuper'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sigismondi | Alkemy challenge</title>
        <meta name="description" content="Alkemy Challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <AddSuper />
      </main>
    </div>
  )
}
// 10226206302529619