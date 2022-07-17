import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/components/Navbar.module.css";
import { menuItems } from "../utils/data";

export default function Navbar() {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <nav>
      <div className={styles.navbar}>
        {menuItems.map((item, index) => (
          <div className={styles.navbarItems}>
            <Link href={item.path}>
              <a
                key={index}
                onClick={() => setIsSelected(item.index)}
                isSelected={isSelected === item.index}
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
