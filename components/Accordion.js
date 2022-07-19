import { useState } from "react";
import styles from "../styles/components/Accordion.module.css";
import Image from "next/image";
import DownArrow from "../assets/icons/down-arrow.png";
import UpArrow from "../assets/icons/up-arrow.png";

export default function Accordion() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={styles.container}>
      <div
        className={styles.accordionItem}
        id="react"
        onClick={() => setIsActive(!isActive)}
      >
        <div className={styles.accordionTitle}>
          <div className={styles.flex}>
            <h3>React</h3>
            {isActive ? (
              <Image src={UpArrow} alt="up arrow" />
            ) : (
              <Image src={DownArrow} alt="down arrow" />
            )}
          </div>
        </div>

        {isActive && (
          <div className={styles.answer}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum.
            </p>
          </div>
        )}

        <hr />
      </div>

      <div className={styles.accordionItem} id="vue">
        <a className={styles.accordionTitle} href="#vue">
          <div className={styles.flex}>
            <h3>Vue</h3>
          </div>
          {/* <Image src={Arrow} alt="arrow" /> */}
        </a>
        <div className={styles.answer}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum.
          </p>
        </div>
        <hr />
      </div>

      <div className={styles.accordionItem} id="question3">
        <a className={styles.accordionTitle} href="#question3">
          <div className={styles.flex}>
            <h3>JavaScript</h3>
          </div>
          {/* <Image src={Arrow} alt="arrow" /> */}
        </a>
        <div className={styles.answer}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum.
          </p>
        </div>
        <hr />
      </div>
    </div>
  );
}
