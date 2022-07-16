import styles from "../../styles/layouts/NudeLayout.module.scss";
import Navbar from "../Navbar";

export default function NudeLayout({ children }) {
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
