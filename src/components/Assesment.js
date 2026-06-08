import React from "react";
import "../Assets/Assesment.css";

const Assessment = () => {
  return (
    <section className="assessment">
      <div className="assessment-content">
        <div className="left-section">
          <span className="badge">Get Your Free Cloud Cost Assessment</span>

          <h1>
            Reduce Your Cloud Costs by <span>20-30%</span>
          </h1>

          <p className="subtitle">
            Platform + People = Results. Certified FinOps engineers and our
            enterprise platform help organizations optimize AWS, Azure, and GCP
            spending with measurable outcomes.
          </p>

          <div className="benefits">
            <h3>What You'll Get</h3>

            <ul>
              <li>Detailed spend breakdown by service & team</li>
              <li>Projected savings estimate</li>
              <li>Immediate cost-saving opportunities</li>
              <li>Customized optimization roadmap</li>
              <li>Expert FinOps recommendations</li>
            </ul>
          </div>
        </div>

        <div className="right-section">
          <div className="card">
            <h2>Book Your Free Assessment</h2>

            <p>
              Discover how leading companies reduce cloud costs without
              sacrificing performance.
            </p>

            <button>Book Free Assessment</button>

            <div className="trust-info">
              <p>✓ No Commitment</p>
              <p>✓ No Risk</p>
              <p>✓ Results in 2 Weeks</p>
            </div>

            <div className="contact">
              <h4>C3Ops.io</h4>
              <p>Cloud Cost Optimization Platform</p>
              <p>support@c3ops.io</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assessment;