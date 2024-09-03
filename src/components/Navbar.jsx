import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <a href="/" className="logo">
        Logo
      </a>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about-us">About us</Link>
        <Link to="/news">News</Link>
        <Link to="/contact-us">Contact</Link>
      </nav>
    </header>
  );
};

export default Navbar;
