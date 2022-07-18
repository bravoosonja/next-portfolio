import styles from "../styles/components/Navbar.module.css";
import ActiveLink from "./ActiveLink";

export default function Navbar() {
  return (
    <nav>
      <div className={styles.navbar}>
        <div className={styles.navbarItems}>
          <ActiveLink href="/contact">Contact</ActiveLink>

          <ActiveLink href="/projects">Projects</ActiveLink>

          <ActiveLink href="/about">About</ActiveLink>

          <ActiveLink href="/">Home</ActiveLink>
        </div>
      </div>
    </nav>
  );
}
