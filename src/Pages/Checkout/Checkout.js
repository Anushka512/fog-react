import React from 'react';
import ShippingDetails from './ShippingDetails';
import OrderSummary from './OrderSummary';
import './Checkout.scss';

const Checkout = () => {
  return (
    <div className="checkout-page">
      <div className="shipping-details">
        <ShippingDetails />
      </div>
      <div className="order-summary">
        <OrderSummary />
      </div>
    </div>
  );
}

export default Checkout;
