import React, { useState } from "react";
import "./Assets/header.css";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <h2>CloudWise</h2>
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <Link
              to="/"
              onClick={() => {
                setMenuOpen(false);
                window.scrollTo(0, 0);
              }}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/platform"
              onClick={() => {
                setMenuOpen(false);
                window.scrollTo(0,0);
              }}
            >
              Platform
            </Link>
          </li>

          <li>
            <Link
              to="/pricing"
              onClick={() => {
                setMenuOpen(false);
                window.scrollTo(0, 0);
              }}
            >
              Pricing
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              onClick={() => {
                setMenuOpen(false);
                window.scrollTo(0, 0);
              }}
            >
              Contact
            </Link>
          </li>

          <li>
            <Link
              to="/"
              className="cta-btn"
              onClick={() => {
                setMenuOpen(false);
                window.scrollTo(0, 0);
              }}
            >
              Launch App
            </Link>
          </li>
        </ul>

        <div className="nav-buttons">
          <span className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✕" : "☰"}
          </span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
