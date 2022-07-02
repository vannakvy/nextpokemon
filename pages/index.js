/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Header from '../components/headers/Header'

export default function Home() {
  const [pokimon, setPokimon] = useState([]);

  useEffect(() => {
   async function getPokimon() {
     const response = await fetch("https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json");
     const data = await response.json();
     setPokimon(data);
   }

   getPokimon();
  },[]);
  return (
    <div>
      <Head>
        <title>Pokimon App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700;800;900&family=Siemreap&display=swap"
          rel="stylesheet"
        />
          <link
      href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
      rel="stylesheet"
    />
      </Head>
      <Header/>
    <div className={styles.grid}>
    
      {pokimon.map(pokemon => 
        <div key={pokemon.id} className={styles.card}>
        <Link href={`/pokemon/${pokemon.id}`}>
          <a>
            <Image width={200} height={200} src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`} alt={pokemon.name} />
            <h3>{pokemon.name}</h3>
          </a>
        </Link>
        </div>
         )}
    </div>

  <h1>Hello</h1>
    </div>
  )
}
