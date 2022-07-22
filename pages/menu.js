import Link from "next/link";

export default function MobileMenu() {
  return (
    <div className="container black">
      <div className="main">
        <div className="menu">
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
    </div>
  );
}
