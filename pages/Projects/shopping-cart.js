import styles from "../../styles/pages/Project.module.css";
import NudeLayout from "../../components/layouts/NudeLayout";
import Image from "next/image";
import CheckItOut from "../../components/CheckItOut";
import { motion } from "framer-motion";

//animation variants
const banner = {
  hidden: {
    y: "-100vh",
  },
  show: {
    y: 0,
    transition: {
      delayChildren: 0.4,
      duration: 1,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

const title = {
  hidden: { opacity: 0, y: "20rem" },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.3,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

export default function ShoppingCart() {
  return (
    <div className={styles.main}>
      <motion.div
        className={styles.title}
        variants={banner}
        initial="hidden"
        animate="show"
      >
        <motion.h1 variants={title}>Shopping Cart</motion.h1>
      </motion.div>

      <div className={styles.summary}>
        <h2>
          The objective of this project is to implement a shopping cart
          functionality using React Context API.
        </h2>
        <div className={styles.grid}>
          <div className={styles.techStack}>
            <ul>Built with</ul>
            <li>React</li>
            <li>Styled-components</li>
          </div>
          <div className={styles.technique}>
            <ul>Technique</ul>
            <li>React Context API</li>
            <li>Styled components global style</li>
            <li>CSS animation</li>
          </div>
          <div className={styles.demoLinks}>
            <ul>Links</ul>
            <li>
              <a
                target="_blank"
                href="https://github.com/bravoosonja/shopping-cart"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://regal-faun-bcff09.netlify.app/"
                rel="noreferrer"
              >
                Live
              </a>
            </li>
          </div>
        </div>
      </div>
      {/* end of overview */}
      <div className={styles.contents}>
        <div className={styles.imageContainer}>
          <Image
            src={"/images/demo-images/shopping-cart-desktop-demo.gif"}
            alt="demo"
            width={1000}
            height={484}
          />
        </div>
        <div className={styles.features}>
          <h2>Features</h2>
          <p>Mobile responsive</p>
          <p>Add and remove items to the cart</p>
          <p>View, update, close the cart modal</p>
          <p>Show active states of the cart</p>
          <p>Display the number of items in a cart on a badge</p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={"/images/demo-images/shopping-cart-mobile-demo.gif"}
            alt="demo"
            width={347}
            height={753}
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={"/images/shopping-cart/desktop-full-page.png"}
            alt="demo"
            width={1920}
            height={1666}
          />
        </div>
        {/* end of images */}

        <div className={styles.description}></div>
      </div>
      {/* end of description */}
      <CheckItOut
        githubLink={"https://github.com/bravoosonja/shopping-cart"}
        liveLink={"https://regal-faun-bcff09.netlify.app/"}
      />
    </div>
  );
}

ShoppingCart.getLayout = function getLayout(ShoppingCart) {
  return <NudeLayout>{ShoppingCart}</NudeLayout>;
};
