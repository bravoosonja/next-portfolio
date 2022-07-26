import NudeLayout from "../../components/layouts/NudeLayout";
import styles from "../../styles/pages/Project.module.css";
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

export default function ThisWebsite() {
  return (
    <div className={styles.main}>
      <motion.div
        className={styles.title}
        variants={banner}
        initial="hidden"
        animate="show"
      >
        <motion.h1 variants={title}>This Website</motion.h1>
      </motion.div>
    </div>
  );
}

ThisWebsite.getLayout = function getLayout(ThisWebsite) {
  return <NudeLayout>{ThisWebsite}</NudeLayout>;
};
