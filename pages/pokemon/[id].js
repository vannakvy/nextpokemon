import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Detail.module.css";

export default function Detail() {
  const [pokimon, setPokimon] = useState({});

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function getPokimon() {
      const response = await fetch(
        `https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${id}.json`
      );
      const data = await response.json();
      setPokimon(data);
    }
    if (id) {
      getPokimon();
    }
  }, [id]);

  if (!pokimon) {
    return null;
  }

  return <div>
    <Head>
        <title>{pokimon.name}</title>
    </Head>
    <div>
        <Link href="/">
            Back to Home
        </Link>
    </div>
    <div className={styles.container}>
        <img width={300} height={300} src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokimon.image}`} alt={pokimon.name} />
    
    <div>
        <h1>{pokimon?.type?.join(", ")}</h1>
        <h2>{pokimon.name}</h2>
        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Value</td>
                </tr>
            </thead>
            <tbody>
                {pokimon?.stats?.map(stat => <tr>
                    <td>{stat.name}</td>
                    <td>{stat.value}</td>
                </tr>)
}
            </tbody>
        </table>
       
    </div>
    
    </div>
    </div>;
}
