import Navbar from "../Navbar";

export default function BlackLayout({ children }) {
  return (
    <div className="black container">
      <nav className="black">
        <Navbar />
      </nav>
      <div className="main">
        <main>{children}</main>
      </div>
    </div>
  );
}
