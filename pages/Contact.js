import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles/pages/Contact.module.css";
import BlackLayout from "../components/layouts/BlackLayout";

export default function Contact() {
  function copyToClipboard() {
    navigator.clipboard.writeText("songnachoi@gmail.com");
  }

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={styles.contact}>
      <div className={styles.leftContainer}>
        <div className={styles.content}>
          <h1>Contact</h1>
          <div className={styles.email}>
            <motion.span
              className={styles.underline}
              onMouseOver={() => setIsHovered(true)}
              onMouseOut={() => setIsHovered(false)}
              onClick={() => {
                copyToClipboard();
              }}
            >
              songnachoi@gmail.com
            </motion.span>
            <motion.span
              className={styles.copyText}
              initial={{ opacity: 0 }}
              animate={{
                opacity: isHovered ? "1" : "0",
                // x: isHovered ? "0" : "50",
              }}
              transition={{
                duration: isHovered ? "0.7" : "0.7",
                ease: [0.2, 0.65, 0.3, 0.9],
              }}
            >
              Click to copy to clipboard
            </motion.span>
          </div>
          <div className={styles.links}>
            <a
              target="_blank"
              href="https://github.com/bravoosonja"
              rel="noreferrer"
            >
              github
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/songna-c"
              rel="noreferrer"
            >
              linkedin
            </a>
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}></div>
    </div>
  );
}

Contact.getLayout = function getLayout(Contact) {
  return <BlackLayout>{Contact}</BlackLayout>;
};
