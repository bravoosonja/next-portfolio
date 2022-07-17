import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/components/Navbar.module.css";
import { menuItems } from "../utils/data";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav>
      <div className={styles.navbar}>
        {menuItems.map((item, index) => (
          <div className={styles.navbarItems}>
            <Link href={item.path}>
              <a
                key={index}
                className={router.pathname === item.path ? styles.active : ""}
              >
                {item.name}
              </a>
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
}
