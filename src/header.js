import React from "react";
import "./Assets/header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <h2>UJR Technologies</h2>
        </div>

        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/platform">Platform</Link>
          </li>

          <li>
            <Link to="/pricing">Pricing</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div className="nav-buttons">
          <button className="login-btn">Login</button>
          <button className="cta-btn">Get Demo</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
