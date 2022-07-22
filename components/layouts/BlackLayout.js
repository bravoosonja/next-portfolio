import Navbar from "../Navbar";

export default function BlackLayout({ children }) {
  return (
    <div className="container black">
      <nav>
        <Navbar />
      </nav>
      <div className="main">
        <main>{children}</main>
      </div>
    </div>
  );
}
