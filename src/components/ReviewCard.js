import React from "react";
import "../Assets/Review.css";
const ReviewCard = ({ data }) => {
  const { review, name, role, rating } = data;

  return (
    <div className="reviews">
      <div className="stars">★★★★★</div>

      <p className="desc">{review}</p>

      <span className="badge">✔ Verified Review</span>

      <div className="user">
        <div className="avatar">{name.charAt(0)}</div>
        <div>
          <h5>{name}</h5>
          <p>{role}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
