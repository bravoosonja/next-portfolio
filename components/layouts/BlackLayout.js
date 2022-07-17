import styles from "../../styles/layouts/BlackLayout.module.css";
import Navbar from "../Navbar";

export default function BlackLayout({ children }) {
  return (
    <div className={styles.container}>
      <nav>
        <Navbar className={styles.blackNav} />
      </nav>
      <div className={styles.main}>
        <main>{children}</main>
      </div>
    </div>
  );
}
