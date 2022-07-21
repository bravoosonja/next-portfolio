import { motion } from "framer-motion";
import styles from "../styles/components/AnimatedTitle.module.css";

export default function AnimatedTitle({ textToAnimate }) {
  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: "0.25em",
    },
    visible: {
      opacity: 1,
      y: "0em",
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <h1 className={styles.title} aria-label={textToAnimate} role="heading">
      {textToAnimate.split(" ").map((word, index) => {
        return (
          <motion.span
            className={styles.word}
            aria-hidden="true"
            key={index}
            // animate={textToAnimate}
            transition={{
              delayChildren: index * 0.06,
              staggerChildren: 0.2,
            }}
          >
            {word.split("").map((character, index) => {
              return (
                <motion.span
                  className={styles.character}
                  aria-hidden="true"
                  key={index}
                  initial="hidden"
                  animate="visible"
                  variants={characterAnimation}
                >
                  {character}
                </motion.span>
              );
            })}
          </motion.span>
        );
      })}
    </h1>
  );
}
