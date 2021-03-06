import styles from "../../styles/pages/Project.module.css";
import NudeLayout from "../../components/layouts/NudeLayout";
import Image from "next/image";
import CheckItOut from "../../components/CheckItOut";
import { motion } from "framer-motion";

//animation variants
const banner = {
  hidden: {
    y: "-100vh",
  },
  show: {
    y: 0,
    transition: {
      delayChildren: 0.4,
      duration: 1,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

const title = {
  hidden: { opacity: 0, y: "20rem" },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.3,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

export default function MovieApp() {
  return (
    <div className={styles.main}>
      <motion.div
        className={styles.title}
        variants={banner}
        initial="hidden"
        animate="show"
      >
        <motion.h1 variants={title}>Movie App</motion.h1>
      </motion.div>

      <div className={styles.summary}>
        <h2>
          The objective of this project is to practice fetching data from an
          external API.
        </h2>
        <div className={styles.grid}>
          <div className={styles.techStack}>
            <ul>Built with</ul>
            <li>React</li>
            <li>Styled-components</li>
          </div>
          <div className={styles.technique}>
            <ul>Technique</ul>
            <li>Fetch data from an external API</li>
            <li>Custom React hooks</li>
            <li>Persist state in session storage to cache fetched data</li>
          </div>
          <div className={styles.demoLinks}>
            <ul>Links</ul>
            <li>
              <a
                target="_blank"
                href=" https://github.com/bravoosonja/movie-app"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href=" https://master--bright-parfait-e0cd13.netlify.app/"
                rel="noreferrer"
              >
                Live
              </a>
            </li>
          </div>
        </div>
      </div>
      {/* end of overview */}
      <div className={styles.contents}>
        <div className={styles.imageContainer}>
          <Image
            src={"/images/demo-images/movie-app-desktop.gif"}
            alt="demo"
            width={1000}
            height={484}
          />
        </div>
        <div className={styles.features}>
          <h2>Features</h2>
          <p>Display popular movies</p>
          <p>Display movie information</p>
          <p>Search for movies</p>
          <p>Mobile responsive</p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={"/images/movie-app/main-page.png"}
            alt="main page"
            width={1920}
            height={872}
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={"/images/movie-app/details-page.png"}
            alt="demo"
            width={1920}
            height={872}
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={"/images/movie-app/full-page.png"}
            alt="demo"
            width={1920}
            height={2081}
          />
        </div>
        {/* end of images */}

        <div className={styles.description}></div>
      </div>
      {/* end of description */}
      <CheckItOut
        githubLink={"https://github.com/bravoosonja/movie-app"}
        liveLink={"https://master--bright-parfait-e0cd13.netlify.app/"}
      />
    </div>
  );
}

MovieApp.getLayout = function getLayout(MovieApp) {
  return <NudeLayout>{MovieApp}</NudeLayout>;
};
