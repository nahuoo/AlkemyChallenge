import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import heroes from '../components/fetch' 
import { AddSuper } from '../components/AddSuper'
import SuperHeroeCard from '../components/SuperHeroCard'
import {AppContext} from '../components/context'
import { useContext,useEffect } from 'react'

export default function Home() {
  const { teamSize, randomNumber } = useContext(AppContext);
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