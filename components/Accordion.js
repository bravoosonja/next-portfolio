import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/components/Accordion.module.css";
import { skillsItems } from "../utils/data";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleSetIndex = (index) =>
    activeIndex !== index && setActiveIndex(index);

  return (
    <div className={styles.accordion}>
      {skillsItems.map((item, index) => (
        <div className={styles.item} key={index}>
          <div className={styles.title} onClick={() => handleSetIndex(index)}>
            <h3 className={styles.titleHeading}>{item.name}</h3>

            {activeIndex === index ? (
              <Image
                src={"/assets/icons/arrow-up.svg"}
                width="30"
                height="30"
                alt="up arrow"
                onClick={() => handleSetIndex(-1)}
              />
            ) : (
              <Image
                src={"/assets/icons/arrow-down.svg"}
                alt="down arrow"
                width="30"
                height="30"
              />
            )}
          </div>
          <AnimatePresence initial={false}>
            {activeIndex === index && (
              <motion.div
                className={styles.content}
                key="content"
                initial="collapsed"
                animate="open"
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                {item.pages.map((page, index) => (
                  <div className={styles.links} key={index}>
                    <Link href={"/projects/" + page} key={index}>
                      <a key={index} className="hoverUnderline">
                        {page.replace(/-/g, " ")}
                      </a>
                    </Link>
                  </div>
                ))}
              </motion.div>
            )}
            <hr />
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
