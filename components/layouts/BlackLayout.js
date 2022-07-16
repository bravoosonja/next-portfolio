import styles from "../../styles/layouts/BlackLayout.module.scss";
import Navbar from "../Navbar";

export default function BlackLayout({ children }) {
  return (
    <div className={styles.container}>
      <nav>
        <Navbar />
      </nav>
      <div className={styles.main}>
        <main>{children}</main>
      </div>
    </div>
  );
}
