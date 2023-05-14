import React from "react";

import "./PopularItem.scss";

function PopularItem({ imgUrl }) {
  return (
    <div className="PopularItem">
      <div className="img__Popular">
        <img src={imgUrl} alt="popular" />
      </div>

      <div className="item__info">
        <h3>Freshly Baked Buns</h3>
        <h4>100% Gluten free</h4>

        <button className="btn pop">Order Now</button>
      </div>
    </div>
  );
}

export default PopularItem;
