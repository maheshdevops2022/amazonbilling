import React from "react";
import "../Assets/Review.css";
import ReviewCard from "./ReviewCard";


const reviews = [
  {
    review:
      "Cloudwise reduced our cloud costs significantly while giving us deep, actionable insights. It’s an essential tool for any cloud-driven team.",
    name: "Jhon",
    role: "Manager,Capgemini",
    rating: 5,
  },
  {
    review:
      "A seamless fusion of FinOps and DevOps that has completely transformed our team’s efficiency. Truly a game changer.",
    name: "Raghu Sharma",
    role: "Manager,American Bank",
    rating: 5,
  },
  {
    review:
      "Enhanced visibility into our multi-cloud infrastructure has revolutionized the way we manage and optimize cloud costs.",
    name: "Mthu Shetty",
    role: "Team Lead,Hitachi",
    rating: 5,
  },
  {
    review:
      "We now have full transparency across our cloud usage, enabling us to optimize costs and improve performance effortlessly.",
    name: "Sadam Soujanya",
    role: "Founder Of RR",
    rating: 5
  },
];

const Review = () => {
  return (
    <section className="container">
      <div className="header-container">
        <h3>Our Clients</h3>
        <h1>
          Trusted by <span>Industry Leaders</span>
        </h1>
        <p>Trusted by leading cloud-native companies</p>

        <div className="review-wrapper">
          {reviews.map((item, index) => (
            <ReviewCard key={index} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
