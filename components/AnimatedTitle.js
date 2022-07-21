import { motion } from "framer-motion";
import styles from "../styles/components/AnimatedTitle.module.css";

export default function AnimatedTitle({ textToAnimate }) {
  const wordAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.03,
        staggerChildren: 0.2,
      },
    },
  };

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
      {textToAnimate.split(" ").map((character, index) => {
        return (
          <motion.span
            className={styles.word}
            aria-hidden="true"
            key={index}
            initial="hidden"
            animate="visible"
            variants={wordAnimation}
          >
            {character.split("").map((letter, index) => {
              return (
                <motion.span
                  className={styles.character}
                  aria-hidden="true"
                  key={index}
                  variants={characterAnimation}
                >
                  {letter}
                </motion.span>
              );
            })}
          </motion.span>
        );
      })}
    </h1>
  );
}
