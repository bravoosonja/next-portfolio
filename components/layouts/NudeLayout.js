import styles from "../../styles/layouts/NudeLayout.module.css";
import Navbar from "../Navbar";

export default function NudeLayout({ children }) {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <div className={styles.container}>
        <div className={styles.main}>
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
