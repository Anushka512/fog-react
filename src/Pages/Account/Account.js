import React from 'react';
// import { useSelector } from 'react-redux'; 
import './Account.scss';
import profile from "../../Assets/Images/profile.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const AccountPage = () => {
//   const { userName, email } = useSelector((state) => state.user);
  const userData = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    phoneNumber: '123-456-7890',
    address: '123 Main St, City, Country',
    previousOrders: [
      { id: 1, name: 'Product A', price: 19.99 },
      { id: 2, name: 'Product B', price: 29.99 },
      { id: 3, name: 'Product C', price: 9.99 },
    ],
  };

  return (
    <div className="account-page">
      <div className="profile">
        <div className="profile-photo">
          <img src={profile} alt="Profile" />
        </div>
        <div className="profile-details">
          <h2>{userData.name}</h2>
          <p><b>Email: </b> {userData.email}</p>
          <p><b>Phone: </b>{userData.phoneNumber}</p>
          <p><b>Address: </b>{userData.address}</p>
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
      <h3 className='invoice'>Download Invoice</h3>
      <button className="download-button">
        <FontAwesomeIcon icon={faDownload}  className="download-icon"/>
        Download
      </button>
      </div>
  );
};

export default AccountPage;
