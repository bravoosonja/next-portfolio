import styles from "../../styles/pages/Project.module.css";
import NudeLayout from "../../components/layouts/NudeLayout";
import Image from "next/image";

export default function LiveChat() {
  return (
    <>
      <div className={styles.title}>
        <h1>Live Chat</h1>
      </div>
      <div className={styles.summary}>
        <h2>
          The objective of this project is to practice using Vue + Vite by
          developing live chat application using Firebase for authentication and
          database.
        </h2>
        <div className={styles.grid}>
          <div className={styles.techStack}>
            <ul>Built with</ul>
            <li>Vue 3 + Vite</li>
            <li>Firebase - Database & Authentication</li>
            <li>CSS</li>
          </div>
          <div className={styles.technique}>
            <ul>Technique/Skills</ul>
            <li>Vue Composition API</li>
            <li>Vue Route guard</li>
            <li>Firestore database</li>
            <li>Firebase authentication</li>
            <li>Firebase hosting</li>
          </div>
          <div className={styles.demoLinks}>
            <ul>Links</ul>
            <li>
              <a
                target="_blank"
                href="https://github.com/bravoosonja/live-chat"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://vue-firebase-4dc0a.web.app/"
                rel="noreferrer"
              >
                Live
              </a>
            </li>
          </div>
        </div>
      </div>

      <div className={styles.contents}>
        <div className={styles.imageContainer}>
          <Image
            src={"/images/demo-images/chat.gif"}
            alt="demo"
            width={1000}
            height={484}
          />
        </div>
        <div className={styles.features}>
          <h2>Features</h2>
          <p>Signup / Login for authentication</p>
          <p>Real-time chat</p>
          <p>Automatically sets the them mode to user's theme preference</p>
          <p>Toggle light/theme mode</p>
          <p>Timestamp for messages</p>
        </div>
      </div>
    </>
  );
}

LiveChat.getLayout = function getLayout(LiveChat) {
  return <NudeLayout>{LiveChat}</NudeLayout>;
};
