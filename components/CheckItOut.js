import styles from "../styles/components/CheckItOut.module.css";

export default function CheckItOut({ githubLink, liveLink }) {
  return (
    <div className={styles.checkItOut}>
      <h1>Check it out.</h1>
      <div className={styles.linksContainer}>
        <a
          className={styles.githubLink}
          target="_blank"
          rel="noreferrer"
          href={githubLink}
        >
          GITHUB
        </a>
        <a
          className={styles.liveLink}
          target="_blank"
          rel="noreferrer"
          href={liveLink}
        >
          LIVE
        </a>
      </div>
    </div>
  );
}
