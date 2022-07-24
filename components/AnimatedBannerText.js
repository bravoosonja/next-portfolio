import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles/components/AnimatedBannerText.module.css";

export default function AnimatedBannerText({ textToAnimate }) {
  return (
    <div className={styles.button}>
      {textToAnimate.split("").map((letter, i) => (
        <div className={styles.box} key={i}>
          {letter}
        </div>
      ))}
    </div>
  );
}
