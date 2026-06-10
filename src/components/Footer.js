import React from "react";
import "../Assets/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>Cloudwise.io</h2>
          <p>
            Platform + People = Results. Helping organizations reduce
            cloud costs by 20-30% through FinOps excellence.
          </p>
        </div>

        <div className="footer-links">

          <div className="footer-column">
            <h3>Product</h3>
            <ul>
              <li>Platform</li>
              <li>Pricing</li>
              <li>Launch App</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Careers</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>FinOps Knowledge</h3>
            <ul>
              <li>What is FinOps?</li>
              <li>Why FinOps</li>
              <li>FinOps Culture</li>
              <li>FinOps Framework</li>
              <li>Cost Optimization</li>
              <li>FinOps for AI</li>
              <li>AI for FinOps</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Resources</h3>
            <ul>
              <li>Documentation</li>
              <li>Support</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <p>All Rights Reserved By UJR TECHNOLOGIES PVT LIMITED .</p>
      </div>
    </footer>
  );
};

export default Footer;