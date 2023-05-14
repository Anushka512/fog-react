import React from "react";
import { CiLocationOn } from "react-icons/ci";
import "./AddressBox.scss";

function AddressBox({ name, title, HNO, address }) {
  return (
    <div className="AddressBox">
      <div className="left__add-info">
        <CiLocationOn />
        <div className="info">
          <h5>
            {title} {name}
          </h5>
          <p className="p-text">
            H.No {HNO} {address}
          </p>
        </div>
      </div>
      <span />
    </div>
  );
}

export default AddressBox;
