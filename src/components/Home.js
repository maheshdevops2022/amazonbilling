import React from "react";
import "./Home.css";
import { FaArrowRight } from "react-icons/fa";
import img1 from '../Assets/images/aws-img1.png';
import img2 from '../Assets/images/azure-img2.png';
import img3 from '../Assets/images/gcp-img3.jpg';
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

      <div class="logo-container">
        <div class="logo">
          <img src={img1} alt="AWS"/>
            <p>AWS</p>
        </div>

        <div class="logo">
          <img src={img2} alt="Azure"/>
            <p>Azure</p>
        </div>

        <div class="logo">
          <img src={img3} alt="GCP"/>
            <p>GCP</p>
        </div>
        </div>


      </>
      );
};

export default Home;