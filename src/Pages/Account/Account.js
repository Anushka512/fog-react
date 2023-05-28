import React, { Fragment } from "react";
// import { useSelector } from 'react-redux';
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

const AccountPage = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { isLoading } = useSelector((state) => state.app);
  const navigate = useNavigate();
  const handlLogout = () => {
    dispatch(getLoggedoutUser());
    Swal.fire({
      icon: "success",
      title: "Logged Out Successfully",
    });
    navigate("/");
  };

  const userData = {
    name: user?.name,
    email: user?.email,
    phoneNumber: "123-456-7890",
    address: "123 Main St, City, Country",
    previousOrders: [
      { id: 1, name: "Product A", price: 19.99 },
      { id: 2, name: "Product B", price: 29.99 },
      { id: 3, name: "Product C", price: 9.99 },
    ],
  };

  return (
    <Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="account-page">
          <AiOutlineLogout
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
            <div className="profile-photo">
              <img src={profile} alt="Profile" />
            </div>
            <div className="profile-details">
              <h2>{userData.name}</h2>
              <p>
                <b>Email: </b> {userData.email}
              </p>
              <p>
                <b>Phone: </b>
                {userData.phoneNumber}
              </p>
              <p>
                <b>Address: </b>
                {userData.address}
              </p>
            </div>
          </div>

          <div className="previous-orders">
            <h3>Previous Orders</h3>
            <ul>
              {userData.previousOrders.map((order) => (
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
      )}
    </Fragment>
  );
};

export default AccountPage;
