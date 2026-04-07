import React from "react";
import "./Home.css";
import { FaArrowRight } from "react-icons/fa";
const Home = () => {
  return (
    <>
      <div className="main-container">
        <div className="header-card">
          <h3 className="heading-box">
            Enterprises FinOPs + Platform Services
          </h3>

          <p className="paragraph">
            Reduce Cloud cost by{" "}
            <span style={{ color: "green" }}>20-30%</span> with{" "}
            <span style={{ color: "green" }}>FinOps automation.</span>
          </p>

          <p className="paragraph2">
            Multi-cloud cost optimization for engineering and finance teams.
            Get visibility, recommendations, and automated savings.
          </p>

          <button className="btn btn-primary">
            Book a FinOps Assessment <FaArrowRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;