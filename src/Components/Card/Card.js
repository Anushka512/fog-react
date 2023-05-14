import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { AiOutlineHeart, AiFillCheckCircle } from "react-icons/ai";

function Card({ imgUrl, name, price, salePrice, category, id }) {
  const dispatch = useDispatch();

  const addToCart = (id) => {
    dispatch({
      type: "ProductSlice/addToCart",
      payload: { id },
    });
  };

  const removeCart = (id) => {
    dispatch({
      type: "ProductSlice/addToCart",
      payload: { id },
    });
  };
  return (
    <div className="Card">
      <div className="card__top">
        <p>
          <span>20%</span>
          <span>OFF</span>
        </p>
        <Link to={`/product/${id}`} className="card__img flex__center">
          <img src={imgUrl} alt="product" />
        </Link>
      </div>
      <div className="card__bottom">
        <div className="card__info">
          <h3>{name}</h3>
          <span>{category}</span>
        </div>

        <div className="card__footer">
          <span className="card__price">
            <p className="price">₹{price}</p>
            <p className="sale__price">₹{salePrice}</p>
          </span>

          <button onClick={() => addToCart(id)} className="btn">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
