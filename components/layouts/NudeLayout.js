import Navbar from "../Navbar";

export default function NudeLayout({ children }) {
  return (
    <div className="container">
      <nav>
        <Navbar />
      </nav>
      <div className="main">
        <main>{children}</main>
      </div>
    </div>
  );
}
