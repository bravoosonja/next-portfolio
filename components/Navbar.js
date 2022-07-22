import { useEffect, useState } from "react";
import styles from "../styles/components/Navbar.module.css";
import ActiveLink from "./ActiveLink";
import Link from "next/link";

export default function Navbar() {
  const [windowDimension, setWindowDimension] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isMobile ? (
        <div className={styles.mobileNavbar}>
          <h1 onClick={toggleMenu}>{isOpen ? "CLOSE" : "MENU"}</h1>
          <hr />
          {isOpen && (
            <div className={styles.mobileNavbarItems}>
              <div className={styles.menu}>
                <Link href="/">
                  <h1>
                    <a>Home</a>
                  </h1>
                </Link>
                <Link href="/about">
                  <h1>
                    <a>About</a>
                  </h1>
                </Link>
                <Link href="/projects">
                  <h1>
                    <a>Projects</a>
                  </h1>
                </Link>
                <Link href="/contact">
                  <h1>
                    <a>Contact</a>
                  </h1>
                </Link>
              </div>
            </div>
          )}
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
    </>
  );
}
