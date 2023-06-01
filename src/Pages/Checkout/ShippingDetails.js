import React from 'react';
import './Checkout.scss';

const ShippingDetails = () => {
  return (
    <div className="shipping-details-container">
        <br></br>
      <h2>Shipping Details</h2>
      <form className="shipping-form">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Address" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Phone Number" />
        <br></br>
        {/* <h2>Payment Details</h2>
        <input type="text" placeholder="Name on Card" />
        <input type="text" placeholder="Card Number" />
        <input type="text" placeholder="Valid Transaction" />
        <input type="text" placeholder="CVC Code" /> */}
        <button className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default ShippingDetails;
