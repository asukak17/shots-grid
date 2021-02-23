import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Card from "../components/_card";

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
    </div>
  );
}
