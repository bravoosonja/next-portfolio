import Link from "next/link";
import styles from "../styles/components/Navbar.module.scss";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      {navItems.map((item, index) => (
        <div className={styles.navbarItems}>
          <nav>
            <ul>
              <Link href={item.path}>
                <li key={index}>{item.name}</li>
              </Link>
            </ul>
          </nav>
        </div>
      ))}
    </div>
  );
}
