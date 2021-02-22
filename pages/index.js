import Head from "next/head";
import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  const res = await fetch("https://cdn.dribbble.com/uploads/_/shots.json");
  const shots = await res.json();
  return {
    props: {
      shots,
    },
  };
}

export const Cards = ({ shots }) => {
  return (
    <div className={styles.container}>
      {shots.map((shot, index) => (
        <div key={index} className={styles.cardContainer}>
          <img className={styles.cardImage} src={shot.stillUrl} alt={shot.title} />
          <div className={styles.cardFooter}>
            <div className={styles.cardFooterLeft}>
              <img src={shot.author.avatarUrl} className={styles.avatarImage} />
              <h5>{shot.author.name}</h5>
              <div className="badge">
                {shot.author.isPro ? "Pro" : shot.author.isTeam ? "Team" : ""}
              </div>
            </div>
            <div className={styles.cardFooterRight}>
              <img src="/comment.svg" alt="comment" className={styles.logo} />
              <span>{shot.savesCount}</span>
              <img src="/like.svg" alt="comment" className={styles.logo} />
              <span>{shot.likesCount}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function Home({ shots }) {
  return (
    <div>
      <Head>
        <title>Shots Grid</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>{shots && <Cards shots={shots} />}</main>

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
