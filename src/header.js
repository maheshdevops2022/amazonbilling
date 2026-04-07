import React from "react";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <nav className="navbar">

        {/* LEFT - Logo */}
        <div className="logo">
          <h2>UJR
            
          </h2>
        </div>

        {/* CENTER - Menu */}
        <ul className="nav-links">
          <li>Home</li>
          <li>Platform</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>

        {/* RIGHT - Buttons */}
        <div className="nav-buttons">
          <button className="login-btn">Login</button>
          <button className="cta-btn">Get Demo</button>
        </div>

      </nav>
    </header>
  );
}

export default Header;