import { useState } from "react";
import styles from "../styles/components/Accordion.module.css";
import Image from "next/image";
import DownArrow from "../assets/icons/down-arrow.png";
import UpArrow from "../assets/icons/up-arrow.png";

export default function Accordion() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.accordion}>
      <div className={styles.item}>
        <div className={styles.title} onClick={() => setIsActive(!isActive)}>
          <h3 className={styles.titleHeading}>React</h3>
          {isActive ? (
            <Image src={UpArrow} alt="up arrow" />
          ) : (
            <Image src={DownArrow} alt="down arrow" />
          )}
        </div>
        {isActive && (
          <div className={styles.content}>
            <div className={styles.keywords}>
              <li>Next JS</li>
              <li>Styled-components</li>
            </div>
            <div className={styles.links}>
              <p>This Website</p>
              <p>Shopping Cart</p>
              <p>Movie App</p>
            </div>
          </div>
        )}
        <hr />
      </div>

      <div className={styles.item}>
        <div className={styles.title} onClick={() => setIsActive(!isActive)}>
          <h3 className={styles.titleHeading}>Vue</h3>
          {isActive ? (
            <Image src={UpArrow} alt="up arrow" />
          ) : (
            <Image src={DownArrow} alt="down arrow" />
          )}
        </div>
        {isActive && (
          <div className={styles.content}>
            <div className={styles.keywords}>
              <li>Next JS</li>
              <li>Styled-components</li>
            </div>
            <div className={styles.links}>
              <p>This Website</p>
              <p>Shopping Cart</p>
              <p>Movie App</p>
            </div>
          </div>
        )}
        <hr />
      </div>

      <div className={styles.item}>
        <div className={styles.title} onClick={() => setIsActive(!isActive)}>
          <h3 className={styles.titleHeading}>JavaScript</h3>
          {isActive ? (
            <Image src={UpArrow} alt="up arrow" />
          ) : (
            <Image src={DownArrow} alt="down arrow" />
          )}
        </div>
        {isActive && (
          <div className={styles.content}>
            <div className={styles.keywords}>
              <li>Next JS</li>
              <li>Styled-components</li>
            </div>
            <div className={styles.links}>
              <p>This Website</p>
              <p>Shopping Cart</p>
              <p>Movie App</p>
            </div>
          </div>
        )}
        <hr />
      </div>
    </div>
  );
}
