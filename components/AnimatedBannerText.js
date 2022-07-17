import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles/components/AnimatedBannerText.module.css";

export default function AnimatedBannerText({ textToAnimate }) {
  const text = textToAnimate;

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={styles.linkAnimation}>
      <div
        className={styles.container}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {text.split("").map((letter, i) => (
          <div className={styles.letterContainer} key={i}>
            <motion.div
              initial={{ left: "-100%" }}
              animate={{ left: isHovered ? "0%" : "-100%" }}
              transition={{
                duration: isHovered ? 0.7 : 0.5,
                ease: [0.7, 0, 0.3, 1],
              }}
            >
              {letter}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
