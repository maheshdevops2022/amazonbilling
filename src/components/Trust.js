import React from "react";
import "../Assets/Trust.css";

const Trust = () => {
  const securityItems = [
    {
      title: "SOC 2 Type II",
      status: "In Progress",
      desc: "Enterprise security standards",
    },
    {
      title: "ISO 27001",
      status: "In Progress",
      desc: "Information security management",
    },
    {
      title: "GDPR Compliant",
      status: "In Progress",
      desc: "EU data protection compliance",
    },
    {
      title: "Data Encryption",
      status: "Active",
      desc: "AES-256 at rest, TLS 1.3 in transit",
    },
  ];

  return (
    <div>
    <section className="trust">
      <div className="trust-header">
        <span className="trust-badge">TRUST & SECURITY</span>

        <h2>
          Security & <span>Compliance</span>
        </h2>

        <p>
          Enterprise-grade security protecting your cloud cost data and
          infrastructure insights.
        </p>
      </div>

      <div className="security-grid">
        {securityItems.map((item, index) => (
          <div className="security-card" key={index}>
            <h3>{item.title}</h3>

            <span className="status">{item.status}</span>

            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="security-features">
        <div className="feature">
          <span>🔒</span>
          <h4>Bank-Level Encryption</h4>
        </div>

        <div className="feature">
          <span>👁️</span>
          <h4>Read-Only Access</h4>
        </div>

        <div className="feature">
          <span>🛡️</span>
          <h4>GDPR Compliant</h4>
        </div>
      </div>
    </section>
   <div className="demo-container">
  <h2>See the Platform in Action</h2>

  <p>
    Book a free 30-minute walkthrough. We'll show you exactly how it works
    with your cloud setup.
  </p>

  <div className="btn-group">
    <button>Book A Demo</button>
    <button>View Pricing</button>
  </div>
</div>
    </div>
  );
};

export default Trust;