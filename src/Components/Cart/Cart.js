import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import CartImg from "../../Assets/Images/Cartitem.jpeg";
import CartItem from "../CartItem/CartItem.js";
import AddressBox from "../AddressBox/AddressBox.js";
import { ProductData } from "../../Data/productsData";
import { useDispatch, useSelector } from "react-redux";

import "./Cart.scss";

function Cart({ toggleCart, setToggleCart }) {
  const dispatch = useDispatch();

  const { carts } = useSelector((state) => state.products);
  const { addresses } = useSelector((state) => state.user);
  const [secondComp, setSecondComp] = useState(false);
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [HNo, setHNO] = useState("");
  const [address, setAddress] = useState("");
  const [addressContainer, setAddressContainer] = useState(false);

  const cartTotal = () => {
    return carts?.reduce(function (total, item) {
      return total + (item.quantity || 1) * item.price;
    }, 0);
  };

  const handleChangeComp = () => {
    setSecondComp(!secondComp);
  };

  const handleAddressOpener = () => {
    setAddressContainer(true);
  };

  const handleClearCart = () => {
    dispatch({
      type: "ProductSlice/clearCart",
    });
  };

  const handleCreateAddress = () => {
    dispatch({
      type: "user/createAddress",
      payload: { title, name, HNO: HNo, address },
    });

    setName("");
    setAddress("");
    setHNO("");
    setTitle("");
    setAddressContainer(false);
  };
  return (
    <>
      {addressContainer && (
        <div className="overlay">
          <RxCross1 onClick={() => setAddressContainer(false)} />
          <div className="Address__Box">
            <div className="top__box">
              <h3>Enter Complete Address</h3>
              <p className="p-text">
                This Allow us to find you easily and give you timely <br />
                Delivery exprerience
              </p>
            </div>

            <div className="form">
              <div className="cost__name">
                <select onChange={(e) => setTitle(e.target.value)}>
                  <option>MR</option>
                  <option>Miss</option>
                </select>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Reciever's Name"
                />
              </div>

              <div className="address">
                <input
                  type="text"
                  onChange={(e) => setHNO(e.target.value)}
                  placeholder="Flat/House/Office No."
                />
              </div>

              <div className="address">
                <input
                  type="text"
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Street/Society/Office Name"
                />
              </div>

              <button className="btn" onClick={handleCreateAddress}>
                Save Address
              </button>
            </div>
          </div>
        </div>
      )}

      {!secondComp && (
        <div className={`Cart flex__center ${toggleCart ? "active" : ""}`}>
          <div className="top__cart-section">
            <h5>My Cart</h5>
            <RxCross1 onClick={setToggleCart} />
          </div>

          <div className="cart__del-info">
            <div className="left__info">
              <h5>Delivery in 10 minutes</h5>
              <p className="p-text">{carts.length} Items</p>
            </div>

            <div className="right__opt">
              <button
                onClick={() => handleClearCart()}
                className="theme-btn-one btn-black-overlay btn_sm"
              >
                Clear Cart
              </button>
            </div>
          </div>

          <div className="item__container">
            {carts.map((product, index) => (
              <CartItem
                id={product._id}
                name={product.name}
                imgUrl={product.images[0].url}
                price={product.price}
                quantity={product.quantity}
              />
            ))}

            {/* <CartItem name="Item-1"  imgUrl={CartImg} price={50} quantity="500" />
      <CartItem name="Item-1"  imgUrl={CartImg} price={50} quantity="500" />
      <CartItem name="Item-1"  imgUrl={CartImg} price={50} quantity="500" /> */}
          </div>

          <div onClick={handleChangeComp} className="place__order">
            <h5>{carts.length} Items . {cartTotal()}</h5>
            <h5>Proceed</h5>
          </div>
        </div>
      )}
      {secondComp && (
        <div className={`Cart flex__center ${toggleCart ? "active" : ""}`}>
          <div className="top__cart-section">
            <h5>My Address</h5>
            <RxCross1 onClick={setToggleCart} />
          </div>
          <div className="address comp2">
            <span onClick={handleAddressOpener}>+</span>
            <div className="add__adress">
              <h5>Add A New Address</h5>
            </div>
          </div>
          <div className="address__selection">
            <p className="p-text">Choose Delivery Address</p>

            <div className="address__selection-container">
              {addresses?.map((info, index) => (
                <AddressBox
                  key={index - info.HNO}
                  name={info.name}
                  HNO={info.HNO}
                  title={info.title}
                  address={info.address}
                />
              ))}
            </div>
          </div>

          <div onClick={handleChangeComp} className="place__order submit">
            <h5>Back To Cart</h5>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
