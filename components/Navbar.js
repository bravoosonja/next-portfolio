//TODO: Strike-through for active item

import Link from "next/link";
import styles from "../styles/components/Navbar.module.css";
import { menuItems } from "../utils/data";

export default function Navbar() {
  return (
    <nav>
      <div className={styles.navbar}>
        {menuItems.map((item, index) => (
          <div className={styles.navbarItems} key={index}>
            <Link href={item.path}>
              <a key={index}>{item.name}</a>
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
}
