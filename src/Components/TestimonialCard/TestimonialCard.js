import React from "react";
import Stars from "../../Assets/Images/Star.png";

import "./TestimonialCard.scss";

function TestimonialCard({ name, desc, imgUrl }) {
  return (
    <article className="testimonial__card flex__center">
      <h4 className="name">{name}</h4>
      <p className="p-text">{desc}</p>
      <img src={Stars} alt="RatingStart" className="stars"/>
    </article>
  );
}

export default TestimonialCard;
