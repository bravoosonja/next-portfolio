import { useEffect, useState } from "react";
import styles from "../styles/components/Navbar.module.css";
import ActiveLink from "./ActiveLink";
import Link from "next/link";

export default function Navbar() {
  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 640;
  return (
    <nav>
      {isMobile ? (
        <div className={styles.mobileNavbar}>
          <div className={styles.mobileNavbarItems}>
            <Link href="/menu">
              <h1>
                <a>Menu</a>
              </h1>
            </Link>
          </div>
          <hr />
        </div>
      ) : (
        <div className={styles.navbar}>
          <div className={styles.navbarItems}>
            <ActiveLink href="/contact">Contact</ActiveLink>

            <ActiveLink href="/projects">Projects</ActiveLink>

            <ActiveLink href="/about">About</ActiveLink>

            <ActiveLink href="/">Home</ActiveLink>
          </div>
        </div>
      )}
    </nav>
  );
}
