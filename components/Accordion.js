import { useState } from "react";
import styles from "../styles/components/Accordion.module.css";
import Image from "next/image";
import DownArrow from "../assets/icons/down-arrow.png";
import UpArrow from "../assets/icons/up-arrow.png";
import { skillsItems } from "../utils/data";
import Link from "next/link";

export default function Accordion() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.accordion}>
      {skillsItems.map((item, index) => (
        <div className={styles.item} key={index}>
          <div className={styles.title} onClick={() => setIsActive(!isActive)}>
            <h3 className={styles.titleHeading}>{item.name}</h3>

            {isActive ? (
              <Image src={UpArrow} alt="up arrow" />
            ) : (
              <Image src={DownArrow} alt="down arrow" />
            )}
          </div>
          {isActive && (
            <div className={styles.content}>
              <div className={styles.keywords}>
                {item.keywords.map((keyword, index) => (
                  <li className={styles.keywords} key={index}>
                    {keyword}
                  </li>
                ))}
              </div>

              {item.pages.map((page, index) => (
                <div className={styles.links} key={index}>
                  <Link href={"/projects/" + page} key={index}>
                    <a key={index}>{page.replace(/-/g, " ")}</a>
                  </Link>
                </div>
              ))}
            </div>
          )}
          <hr />
        </div>
      ))}
    </div>
  );
}
