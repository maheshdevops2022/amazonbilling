import React from "react";
import "../Assets/Platform.css";

const Platform = () => {
  return (
    <section className="platform">
      {/* Header */}
      <div className="platform-header">
        <span className="platform-badge">HOW IT WORKS</span>

        <h1>
          Platform & <span>Methodology</span>
        </h1>

        <p>
          Advanced FinOps software combined with expert services to deliver sustainable cloud
          savings.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="platform-cards">
        <div className="platform-card">
          <div className="icon">☁️</div>

          <h2>Multi-Cloud Visibility</h2>

          <ul>
            <li>Unified dashboard across AWS, Azure, and GCP</li>
            <li>Cost allocation by team, application, environment</li>
            <li>Real-time anomaly detection and alerts</li>
          </ul>
        </div>

        <div className="platform-card">
          <div className="icon">⚡</div>

          <h2>Intelligent Automation</h2>

          <ul>
            <li>Rightsizing recommendations with ROI modeling</li>
            <li>Automated resource scheduling and cleanup</li>
            <li>Policy-driven governance and guardrails</li>
          </ul>
        </div>

        <div className="platform-card">
          <div className="icon">🎯</div>

          <h2>Expert Services</h2>

          <ul>
            <li>FinOps-certified engineers implementing optimizations</li>
            <li>Team training and knowledge transfer</li>
            <li>Ongoing strategic guidance and support</li>
          </ul>
        </div>
      </div>

      {/* Methodology */}
      <div className="methodology-section">
        <h1>Our Three-Phase Methodology</h1>

        <div className="methodology-cards">
          <div className="card">
            <h2>Phase 1: Discovery</h2>
            <ul>
              <li>Cloud spend analysis & anomaly detection</li>
              <li>Immediate optimization opportunities</li>
              <li>Strategic savings roadmap</li>
            </ul>
          </div>

          <div className="card">
            <h2>Phase 2: Optimization</h2>
            <ul>
              <li>Resource rightsizing automation</li>
              <li>Commitment-based discount optimization</li>
              <li>Advanced cost allocation framework</li>
            </ul>
          </div>

          <div className="card">
            <h2>Phase 3: Governance</h2>
            <ul>
              <li>Team enablement & knowledge transfer</li>
              <li>Policy framework & automated controls</li>
              <li>Self-sustaining optimization culture</li>
            </ul>
          </div>

          <div className="card">
            <h2>Phase 4: Improvement</h2>

            <ul>
              <li>Ongoing cost optimization reviews</li>
              <li>Advanced analytics & forecasting</li>
              <li>Continuous governance enhancement</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="integration-banner">
        <p>
          <strong>Seamless Integration:</strong> with AWS, Azure, GCP, Terraform, Kubernetes,
          Jenkins, GitHub Actions, Slack, Datadog and more.
        </p>
      </div>
    </section>
  );
};

export default Platform;
