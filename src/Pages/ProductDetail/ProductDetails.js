import React, { useEffect } from "react";
// import Dummy from "../../Assets/Images/3.jpg.png";
import "./ProductDetail.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../../Redux/slices/productSlice";

function ProductDetails() {
  const params = useParams();
  const dispatch = useDispatch();
  const distpatch = useDispatch();
  const { product } = useSelector((state) => state.products);
  const addToCart = (id) => {
    dispatch({
      type: "ProductSlice/addToCart",
      payload: { id },
    });
  };

  useEffect(() => {
    const id = params.id;
    distpatch(getProductDetail({ id }));
  }, []);

  return (
    <div className="ProductDetail">
      <div className="container product__detail-container">
        <div className="product__img">
        { product.length && <img src={`${URL}${product.images[0]?.filename}`}  alt=''/> }
          {/* <img src={product.images[0].url} alt="Product" /> */}
        </div>
        <div className="product__details">
          <p>{product.category}</p>
          <h3>{product.name}</h3>
          <div className="product__sm-desc">
            <p className="p-text">
              {product.description}
            </p>
          </div>
          <br></br>
          <div className="weight__badge">
            <span className="active-badge">{product.weight}g</span>
            {/* <span>150g</span>
            <span>250g</span> */}
          </div>

          <div className="prize">
            <h5>Actual Price ₹{product.price} <br></br> Discounted Price ₹{product.discountedPrice}</h5>  
            <h6>{product.Stock}</h6>
          </div>

          <div className="submit__btn">
            <button className="btn" onClick={() => addToCart(product.id)}>Add To Cart</button>
          </div>
        </div>
      </div>

      <div className="product__About-container">
        <div className="product__desc">
          <h3>Product Description</h3>
          <p className="p-text">
            {product.longDescription}
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
