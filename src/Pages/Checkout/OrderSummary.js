import React from 'react';
import './Checkout.scss';
import CartItem from "../../Components/CartItem/CartItem";
import { useSelector } from "react-redux";

const OrderSummary = () => {
    const { carts } = useSelector((state) => state.products);
    const cartTotal = () => {
        return carts?.reduce(function (total, item) {
          return total + (item.quantity || 1) * item.price;
        }, 0);
      };    

  return (
    <div className="order-summary-container">
      <h2>Your Orders</h2>
      <div className="order-list">
         {/* Render the list of orders here */}
         <div className="item__container">
            {carts.map((product, index) => (
              <CartItem
                id={product._id}
                name={product.name}
                imgUrl={product.images[0].url}
                price={product.price}
                quantity={product.quantity}
                weight={product.weight}
              />
            ))}
          </div>
      </div>
      <div className='check'>
      <div className="subtotal">
        <span>Subtotal: ₹{cartTotal()}</span>
      </div>
      <div className="shipping-charges">
        <span>Shipping Charges: ₹10</span>
      </div>
      <div className="gst">
        <span>GST: ₹5</span>
      </div>
      <div className="total">
        <span>Total: ₹115</span>
      </div>
      </div>
    </div>
  );
}

export default OrderSummary;
