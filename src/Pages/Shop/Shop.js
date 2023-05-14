import React ,{useState} from 'react';
import rowIMG from "../../Assets/Images/div.row.png";
import Card from "../../Components/Card/Card.js";
import CardImg from "../../Assets/Images/3.jpg.png";
import "./Shop.scss";

function Shop() {
    const [activeFilter, setActiveFilter] = useState("All");
  return (
    <div>
<div className="div__row-img">
<img src={rowIMG} alt="ROW__IMG" />
</div>

<main>
<div className="Menu">
  <div className="container menu__container">
    <h2 className="menu__head-sec">Fresh from Free of Gluten</h2>
    <h2 className="menu__head">OUR SPECIAL MENU</h2>

    <div className="menu__items flex__center">
      {["All", "Breads", "Cookies", "Snacks", "Desert", "Namkeen"].map(
        (elem, id) => (
          <div
            onClick={() => setActiveFilter(elem)}
            className={`menu__item-filter-item flex__center p-text ${
              activeFilter === elem ? "item-active" : ""
            }`}
            key={elem - id}
          >
            {elem}
          </div>
        )
      )}
    </div>

    <div className="menu__cards-container flex__center">
      <Card name="Makkhan" price="120" imgUrl={CardImg} />
      <Card name="Makkhan" price="120" imgUrl={CardImg} />
      <Card name="Makkhan" price="120" imgUrl={CardImg} />
      <Card name="Makkhan" price="120" imgUrl={CardImg} />
      <Card name="Makkhan" price="120" imgUrl={CardImg} />
      <Card name="Makkhan" price="120" imgUrl={CardImg} />
    </div>
  </div>
</div>
</main>
    </div>
  )
}

export default Shop;


