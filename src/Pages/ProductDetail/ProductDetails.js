import React, { Fragment, useEffect } from "react";

import "./ProductDetail.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../../Redux/slices/productSlice";
import Loader from "../../Components/Loader/Loader";

function ProductDetails() {
  const params = useParams();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.app);
  const distpatch = useDispatch();
  const { product } = useSelector((state) => state.products);

  useEffect(() => {
    const id = params.id;
    dispatch(getProductDetail({ id }));
  }, []);

  const addToCart = () => {
    dispatch({
      type: "ProductSlice/addToCart",
      payload: { id: product._id },
    });
  };

  return (
    <Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="ProductDetail">
          <div className="container product__detail-container">
            <div className="product__img">
              {product?.images?.map((image) => (
                <img src={image?.url ? image?.url : ""} alt="Product" />
                // console.log(image)
              ))}
            </div>

            <div className="product__details">
              <p>{product?.category}</p>
              <h3>{product?.name}</h3>
              <div className="product__sm-desc">
                <p className="p-text">{product?.description}</p>
              </div>

              <div className="weight__badge">
              <span className="active-badge">{product.weight}g</span>
                {/* <span>150g</span>
                <span>250g</span> */}
              </div>

              <div className="prize">
                <h5>₹{product?.price}</h5>
              </div>

              <div className="submit__btn">
                <button onClick={() => addToCart()} className="btn">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
          <div className="product__About-container">
            <div className="product__desc">
              <h3>Product Description</h3>
              <p className="p-text">{product?.longDescription}</p>
            </div>

            <div className="manu__detail">
              <h3>Manufacturer Details</h3>
              <p className="p-text">
                small note about the product small note about the product small
                note about the product small note about the product small note
                about the product small note about the product small note about
                the product small note about the product small note about the
                product small note about the product small note about the
                product small note about the product small note about the
                product small note about the product small note about the
                product small note about the product
              </p>
            </div>
            <div className="product__About-container">
              <div className="product__desc">
                <h3>Product Description</h3>
                <p className="p-text">{product.longDescription}</p>
              </div>
              <div className="manu__detail">
                <h3>Manufacturer Details</h3>
                <p className="p-text">
                  small note about the product small note about the product
                  small note about the product small note about the product
                  small note about the product small note about the product
                  small note about the product small note about the product
                  small note about the product small note about the product
                  small note about the product small note about the product
                  small note about the product small note about the product
                  small note about the product small note about the product
                </p>
              </div>

              <div className="disclaimer">
                <h3>Disclaimer</h3>
                <p className="p-text">
                  small note about the product small note about the product
                  small note about the product small note about the product
                  small note about the product small note about the product
                  small note about the product small note about the product
                  small note about the product small note about the product
                  small note about the product small note about the product
                  small note about the product small note about the product
                  small note about the product small note about the product
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default ProductDetails;
