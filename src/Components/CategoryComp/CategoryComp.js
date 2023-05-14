import React from "react";

import "./CategoryComp.scss";

function CategoryComp({ imgUrl, catName }) {
  return (
    <div className="CategoryComp">
      <img src={imgUrl} alt="Category" />
      <p>{catName}</p>
    </div>
  );
}

export default CategoryComp;
