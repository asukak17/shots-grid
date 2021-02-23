import styles from "../styles/Home.module.scss";

function Card({ shot }) {
  return (
    <div className={styles.cardContainer}>
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
          <img src="/like.svg" alt="like" className={styles.logo} />
          <span>{shot.likesCount}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
