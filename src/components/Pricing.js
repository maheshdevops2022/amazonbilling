import React from "react";
import "../Assets/Pricing.css";

import {
  FaUsers,
  FaChartLine,
  FaDollarSign,
  FaRocket,
  FaCertificate,
  FaShieldAlt,
} from "react-icons/fa";

const chooselist = [
  {
    icon: <FaUsers />,
    heading: "Platform + People",
    paragraph: "Not just dashboards - you get expert engineers implementing optimizations",
  },
  {
    icon: <FaChartLine />,
    heading: "Proven Results",
    paragraph: "Average 25-35% cost reduction with 3-6 month ROI",
  },
  {
    icon: <FaDollarSign />,
    heading: "Predictable Pricing",
    paragraph: "No percentage of cloud spend - just transparent monthly fees",
  },
  {
    icon: <FaRocket />,
    heading: "Fast ROI",
    paragraph: "Most clients see 3-6 month payback period",
  },
  {
    icon: <FaCertificate />,
    heading: "FinOps Certified",
    paragraph: "FinOps Foundation partners with certified professionals",
  },
  {
    icon: <FaShieldAlt />,
    heading: "No Lock-in",
    paragraph: "Month-to-month after initial term, own your optimizations",
  },
];

const Pricing = () => {
  return (
    <div className="pricing-page">
      <div className="container">
        <h3>C3Ops Pricing Plans</h3>

        <h1>FinOps-Driven DevOps Platform + Expert Engineers</h1>

        <p>Choose the plan that matches your organization's cloud spend and optimization needs</p>
      </div>

      <div className="card-container">
  <h2>What Makes C3Ops Different</h2>

  <div className="content">
    <ul>
      <li>
        <span className="tick">✓</span>
        Enterprise-grade FinOps platform (CMDB, Budget Tracking, Cost Dashboards)
      </li>

      <li>
        <span className="tick">✓</span>
        Hands-on implementation, not just recommendations
      </li>
    </ul>

    <ul>
      <li>
        <span className="tick">✓</span>
        Dedicated FinOps Certified Engineer working with your team
      </li>

      <li>
        <span className="tick">✓</span>
        Proven 3-phase approach: Assess → Optimize → Govern
      </li>
    </ul>
  </div>
</div>
      <div className="why-choose">
  <h2>Our Differentiators</h2>
  <h1>
    Why Choose <span>This Approach</span>
  </h1>
</div>

<div className="card-section">
  {chooselist.map((item, index) => (
    <div className="choose-card" key={index}>
      <div className="card-icon">
        {item.icon}
      </div>

      <h4>{item.heading}</h4>
      <p>{item.paragraph}</p>
    </div>
  ))}
</div>
    </div>
  );
};

export default Pricing;
