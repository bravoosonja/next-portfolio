import styles from "../../styles/layouts/Layout.module.css";
import Navbar from "../Navbar";

export default function BlackLayout({ children }) {
  return (
    <div className={`${styles.container} ${styles.black}`}>
      <nav>
        <Navbar />
      </nav>
      <div className={styles.main}>
        <main>{children}</main>
      </div>
    </div>
  );
}
