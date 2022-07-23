import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles/pages/Contact.module.css";
import BlackLayout from "../components/layouts/BlackLayout";
import AnimatedTitle from "../components/AnimatedTitle";

export default function Contact() {
  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = () => {
    setIsClicked(true);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText("songnachoi@gmail.com");
  };

  return (
    <div className={styles.contact}>
      <div className={styles.leftContainer}>
        <div className={styles.content}>
          <AnimatedTitle textToAnimate={"Contact"} />
          <div className={styles.emailContainer}>
            <div className={styles.copyText}>
              {isClicked ? "Copied!" : "Click to copy to clipboard"}
            </div>
            <p
              className="hoverUnderline"
              id="email"
              onClick={() => {
                copyToClipboard();
                clickHandler();
              }}
            >
              songnachoi@gmail.com
            </p>
          </div>
          <div className={styles.links}>
            <a
              target="_blank"
              href="https://github.com/bravoosonja"
              rel="noreferrer"
              className="hoverUnderline"
            >
              Github
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/songna-c"
              rel="noreferrer"
              className="hoverUnderline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

Contact.getLayout = function getLayout(Contact) {
  return <BlackLayout>{Contact}</BlackLayout>;
};
