import Navbar from "../Navbar";

export default function NudeLayout({ children }) {
  return (
    <div className="container">
      <nav className="nude">
        <Navbar />
      </nav>
      <div className="main">
        <main>{children}</main>
      </div>
    </div>
  );
}
