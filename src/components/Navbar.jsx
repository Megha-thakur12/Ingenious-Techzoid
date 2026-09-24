import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">

      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-main">Ingenious</span>
          <span className="logo-sub">Techzoid</span>
        </Link>

        {/* Desktop Menu */}
        <div className={`navbar-menu ${menuOpen ? "open" : ""}`}>

          {/* Home */}
          <Link
            to="/"
            className={isActive("/") ? "nav-link active" : "nav-link"}
            onClick={closeMenu}
          >
            Home
          </Link>

          {/* About */}
          <Link
            to="/about"
            className={isActive("/about") ? "nav-link active" : "nav-link"}
            onClick={closeMenu}
          >
            About
          </Link>

          {/* Solutions */}
          <Link
            to="/solutions"
            className={
              location.pathname.startsWith("/solutions")
                ? "nav-link active"
                : "nav-link"
            }
            onClick={closeMenu}
          >
            Solutions
          </Link>

          {/* Industries */}
          <Link
            to="/industries"
            className={
              isActive("/industries")
                ? "nav-link active"
                : "nav-link"
            }
            onClick={closeMenu}
          >
            Industries
          </Link>

          {/* Contact */}
          <Link
            to="/contact"
            className={
              isActive("/contact")
                ? "nav-link active"
                : "nav-link"
            }
            onClick={closeMenu}
          >
            Contact
          </Link>

          {/* Let's Talk */}
          <Link
            to="/contact"
            className="nav-button"
            onClick={closeMenu}
          >
            Let's Talk
          </Link>

        </div>

        {/* Mobile Button */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

    </nav>
  );
}

export default Navbar;