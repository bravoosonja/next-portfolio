import styles from "../../styles/pages/Project.module.css";
import NudeLayout from "../../components/layouts/NudeLayout";
import Image from "next/image";
import CheckItOut from "../../components/CheckItOut";
import { liveChatImages } from "../../utils/data";

export default function LiveChat() {
  return (
    <div className={styles.main}>
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
            <ul>Technique</ul>
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
      <div className={styles.imageContainer}>
        <Image
          src={"/images/demo-images/chat.gif"}
          alt="demo"
          width={1000}
          height={484}
        />
      </div>
      <div className={styles.contents}>
        <div className={styles.features}>
          <h2>Features</h2>
          <p>Signup / Login for authentication</p>
          <p>Real-time chat</p>
          <p>
            Automatically sets the them mode to user&apos;s theme preference
          </p>
          <p>Toggle light/theme mode</p>
          <p>Timestamp for messages</p>
        </div>

        {liveChatImages.map((item, index) => (
          <div className={styles.imageContainer} key={index}>
            <Image src={item.src} alt={item.alt} width={1920} height={929} />
          </div>
        ))}
        <div className={styles.description}>
          <p>
            As this is my first project done with Vue as well as Firebase, there
            were many silly challenges involved in developing this project like
            following Firebase 8 documentation and realizing I was using
            Firebase 9, and mixing up the syntax for Composition API and Options
            API in Vue <code>script setup</code>, to name a few.
          </p>
          <br />
          <p>
            As someone who started her front-end developer journey not long ago,
            I would go back to the code I wrote to check or refactor more often
            than I would like. In that sense, Vue’s single-file component
            structure saved a lot of time going back and forth between folder
            structures within vscode, and the componentized structure within the
            file helped me analyse the code faster.
          </p>
          <br />
          <p>
            Though Next JS supports out-of-the-box support for CSS modules, I
            found the extra typing involved was tedious
          </p>
          <br />
          <p>
            <code>{`<div className={styles.container} />`}</code> as opposed to
            Emmet abbreviation <code>.container</code>.
          </p>
          <br />
          <p>
            Installing an extension on vscode could probably save me from extra
            typing involved with styling with CSS modules, but Vue’s way of
            scoping style was pleasant to work with. Incorporating the dark mode
            was as effortless as using React and Styled-components by using{" "}
            <code>usedark</code> from VueUse.
          </p>
          <br />
          <p>
            Though React and Vue are of different flavours, I can’t help but
            recall the moment when I first learned to use React. Coming from
            vanilla JavaScript, React felt like a whole new world not having to
            type <code>document.</code> so many times and I was enchanted by the
            new way of manipulating DOM. Perhaps I’m in the honeymoon phase with
            Vue, but I cannot wait to learn more about the way of Vue.
          </p>
        </div>
        <div className={styles.noteToSelf}>
          <h3>Note to self</h3>
          <ol>
            <li>Learning new framework is fun but</li>
            <li>Master React, and Vue first</li>
            <li>Then maybe Svelte</li>
          </ol>
        </div>
      </div>
      <CheckItOut
        githubLink={"https://github.com/bravoosonja/live-chat"}
        liveLink={"https://vue-firebase-4dc0a.web.app/"}
      />
    </div>
  );
}

LiveChat.getLayout = function getLayout(LiveChat) {
  return <NudeLayout>{LiveChat}</NudeLayout>;
};
