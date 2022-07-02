import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

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
    <div className={styles.container}>
      <Head>
        <title>Pokimon App</title>
      </Head>
    <div className={styles.grid}>
      {pokimon.map(pokemon => 
        <div className={styles.card}>
        <Link href={`/pokemon/${pokemon.id}`}>
          <a>
            <img src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`} alt={pokemon.name} />
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
