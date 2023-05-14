import React from "react";
import Dummy from "../../Assets/Images/3.jpg.png";

import "./ProductDetail.scss";

function ProductDetails() {
  return (
    <div className="ProductDetail">
      <div className="container product__detail-container">
        <div className="product__img">
          <img src={Dummy} alt="Product" />
        </div>

        <div className="product__details">
          <p>Product Category</p>
          <h3>Product Name</h3>
          <div className="product__sm-desc">
            <p className="p-text">
              small note about the product small note about the product small
              note about the product small note about the product
            </p>
          </div>

          <div className="weight__badge">
            <span className="active-badge">50g</span>
            <span>150g</span>
            <span>250g</span>
          </div>

          <div className="prize">
            <h5>$500</h5>
          </div>

          <div className="submit__btn">
            <button className="btn">Add To Cart</button>
          </div>
        </div>
      </div>

      <div className="product__About-container">
        <div className="product__desc">
          <h3>Product Description</h3>
          <p className="p-text">
            small note about the product small note about the product small note
            about the product small note about the product small note about the
            product small note about the product small note about the product
            small note about the product small note about the product small note
            about the product small note about the product small note about the
            product small note about the product small note about the product
            small note about the product small note about the product
          </p>
        </div>

        <div className="manu__detail">
          <h3>Manufacturer Details</h3>
          <p className="p-text">
            small note about the product small note about the product small note
            about the product small note about the product small note about the
            product small note about the product small note about the product
            small note about the product small note about the product small note
            about the product small note about the product small note about the
            product small note about the product small note about the product
            small note about the product small note about the product
          </p>
        </div>

        <div className="disclaimer">
          <h3>Disclaimer</h3>
          <p className="p-text">
            small note about the product small note about the product small note
            about the product small note about the product small note about the
            product small note about the product small note about the product
            small note about the product small note about the product small note
            about the product small note about the product small note about the
            product small note about the product small note about the product
            small note about the product small note about the product
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
