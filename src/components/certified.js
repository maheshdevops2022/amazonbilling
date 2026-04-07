import React from "react";
import "./certified.css";

const sliders = [
  { id: 1, title: "Enterprise Ready", paragraph: "SOC 2 Compliant" },
  { id: 2, title: "FinOps Certified", paragraph: "Best Practices" },
  { id: 3, title: "Bank-Grade Security", paragraph: "256-bit Encryption" },
  { id: 4, title: "Fast Deployment", paragraph: "Live in 48 hours" },
];

const siders = [
    {
        id: 1,
        title: "Concentrix"
    },
    {
        id: 2,
        title: "Netxcell"

    },
    {
        id: 3,
        title: "Netxcell"
    },
    {
        id:4,
        title: "Capgemini"
    },
    {
        id:5,
        title: "Bank Of America"
    },
    {
        id:6,
        title: "SparkNZ"
    },
    {
        id:7,
        title:"Suez"
    },
    {
        id:8,
        title:"NN GROUP"
    },
    {
        id:9,
        title:"GoDataFlow INC"
    },
    {
        id:10,
        title: "IICL"
    },
    {
        id:11,
        title: "RRtechnosoft"
    }
    

]

const Certified = () => {
  return (
    <>
    <div className="trusted-section">
      <h6 className="trusted-heading">
        TRUSTED BY CLOUD-NATIVE ENTERPRISES
      </h6>

      <div className="card-wrapper">
        {sliders.map((item) => (
          <div className="card" key={item.id}>
            <h4>{item.title}</h4>
            <p>{item.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="clients-section">
  <h3>Clients</h3>
  <p>The Most Trusted By Leading Companies</p>

  <div className="slider">
    <div className="slide-track">
      {siders.concat(siders).map((i, index) => (
        <div className="slide" key={index}>
          <span>{i.title}</span>
        </div>
      ))}
    </div>
  </div>
</div>
    </>
  );
};

export default Certified;