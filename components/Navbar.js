import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/components/Navbar.module.scss";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarItems}>
        <nav>
          <Link href="/contact">
            <a className={router.pathname === "/contact" ? "active" : ""}>
              Contact
            </a>
          </Link>

          <Link href="/projects">
            <a className={router.pathname === "/projects" ? "active" : ""}>
              Projects
            </a>
          </Link>
          <Link href="/about">
            <a className={router.pathname === "/about" ? "active" : ""}>
              About
            </a>
          </Link>
          <Link href="/">
            <a className={router.pathname === "/" ? "active" : ""}>Home</a>
          </Link>
        </nav>
      </div>
    </div>
  );
}
