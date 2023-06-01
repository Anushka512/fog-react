import React, { Fragment, useState } from "react";
// import { useSelector } from 'react-redux';
import { RxCross1 } from "react-icons/rx";
import "./Account.scss";
import profile from "../../Assets/Images/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { AiOutlineLogout } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Components/Loader/Loader";
import { getLoggedoutUser } from "../../Redux/slices/user";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";

const AccountPage = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { isLoading } = useSelector((state) => state.app);
  const navigate = useNavigate();
  const [addressContainer, setAddressContainer] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(profile);
  const [phone, setPhone] = useState("");
  // const [HNo, setHNO] = useState("");
  const [address, setAddress] = useState("");

  // for profile photo
  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      setProfilePhoto(e.target.result);
    };

    reader.readAsDataURL(file);
  };

  const userData1 = {
    name: user?.name,
    email: user?.email,
    phoneNumber: phone ? phone : "Please Enter your phone number",
    address: address ? address : "Please enter your address",
    previousOrders: [
      { id: 1, name: "Product A", price: 19.99 },
      { id: 2, name: "Product B", price: 29.99 },
      { id: 3, name: "Product C", price: 9.99 },
    ],
  };

  const handleOpenBox = () => {
    setAddressContainer(true);
  };

  const handleSubmitPrompt = () => {
    if (phone) {
      userData1.phoneNumber = phone;
    }
    if (address) {
      userData1.address = address;
    }

    if (phone || address) {
      alert.success("Updated Succesfully");
      setAddressContainer(false);
    }
  };

  const handlLogout = () => {
    dispatch(getLoggedoutUser());
    Swal.fire({
      icon: "success",
      title: "Logged Out Successfully",
    });
    navigate("/");
  };

  return (
    <Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <Fragment>
          {addressContainer && (
            <div className="overlay">
              <RxCross1 onClick={() => setAddressContainer(false)} />
              <div className="Address__Box">
                <div className="top__box">
                  <h3>Enter Complete Information</h3>
                  <p className="p-text">
                    This Allow us to find you easily and give you timely <br />
                    Delivery exprerience
                  </p>
                </div>

                <div className="form">
                  <div className="phone">
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone number"
                    />
                  </div>

                  <div className="address">
                    <input
                      type="text"
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Full Address"
                    />
                  </div>

                  <button className="btn" onClick={handleSubmitPrompt}>
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}

          <div
            className={`account-page ${addressContainer} ? '' : 'no-scrollbar'`}
          >
            <AiOutlineLogout
              className="logout"
              style={{
                position: "absolute",
                top: "0",
                right: "0",
                cursor: "pointer",
                fontSize: "2rem",
              }}
              onClick={handlLogout}
            />
            <div className="profile">
              <div className="userImg">
                <label htmlFor="imgLabel" className="inputLabel">
                  <img
                    className="inputLabel"
                    src={profilePhoto}
                    alt="labelImg"
                  />
                </label>

                <input
                  id="imgLabel"
                  className="inputImg"
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                />
              </div>
              <div className="profile-details">
                <h2>{userData1.name}</h2>
                <p>
                  <b>Email: </b> {userData1.email}
                </p>
                <p>
                  <b>Phone: </b>
                  {userData1.phoneNumber}&nbsp;&nbsp;
                  <a className="fa fa-edit" onClick={() => handleOpenBox()}></a>
                </p>
                <p>
                  <b>Address: </b>
                  {userData1.address}&nbsp;&nbsp;
                  <a className="fa fa-edit" onClick={() => handleOpenBox()}></a>
                </p>
              </div>
            </div>
            <div className="previous-orders">
              <h3>Previous Orders</h3>
              <ul>
                {userData1.previousOrders.map((order) => (
                  <li key={order.id} className="order-item">
                    <span className="order-name">{order.name}</span>
                    <span className="order-price"> ₹ {order.price}</span>
                  </li>
                ))}
              </ul>
            </div>
            <h3 className="invoice">Download Invoice</h3>
            <button className="download-button">
              <FontAwesomeIcon icon={faDownload} className="download-icon" />
              Download
            </button>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default AccountPage;
