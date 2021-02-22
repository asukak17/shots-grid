import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { Card } from "./_card";

export async function getStaticProps() {
  const res = await fetch("https://cdn.dribbble.com/uploads/_/shots.json");
  const shots = await res.json();
  return {
    props: {
      shots,
    },
  };
}

export default function Home({ shots }) {
  return (
    <div>
      <Head>
        <title>Shots Grid</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          {shots && shots.map((shot, index) => <Card key={index} shot={shot} />)}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
