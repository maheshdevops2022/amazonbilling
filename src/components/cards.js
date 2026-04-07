import React from "react";
//import Card from "./Card";   // ✅ correct path
import img1 from "../Assets/icons/FinOps.png";
import img2 from "../Assets/icons/FinOps2.png";
import img3 from "../Assets/icons/finops3.png";

function Cards() {
  return (
    <div className="certifications">
  <h4>FINOPS CERTIFIED & PARTNER</h4>
  <h2>Industry Certifications & Trust</h2>
 
  <div className="card-container">
    
    <div className="card">
      <img src={img1} alt=""/>
      <p>FinOps Certified Practitioner</p>
    </div>
 
    <div className="card">
      <img src={img2} alt=""/>
      <p>FinOps Certified Focus Analyst</p>
    </div>
 
    <div className="card">
      <img src={img3} alt=""/>
      <p>FinOps Certified Engineer</p>
    </div>
 
  </div>
</div>
 )
}

export default Cards;
