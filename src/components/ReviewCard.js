import React from "react";
import { FaStar, FaQuoteLeft, FaCheckCircle } from "react-icons/fa";

const ReviewCard = ({ data }) => {
  return (
    <div className="reviews">
      <div className="quote-icon">
        <FaQuoteLeft />
      </div>

      <div className="stars">
        {[...Array(data.rating)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>

      <p className="desc">{data.review}</p>

      <div className="badge">
        <FaCheckCircle />
        <span>Verified Customer</span>
      </div>

      <div className="user">
        <div className="avatar">
          {data.name.charAt(0)}
        </div>

        <div>
          <h5>{data.name}</h5>
          <p>{data.role}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;