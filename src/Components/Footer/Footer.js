import React from "react";

import "./Footer.scss";

function Footer() {
  return (
    <div className="Footer">
      <div className="footer__wrapper container">
        <div className="f__lt">
          <h4>Free Of Gluten</h4>
          <p>
            Gluten, a protein found in wheat and several other grains.
            <br /> It means only eating only whole foods with no gluten. <br />{" "}
            lorem ipsum de color
          </p>

          <div className="socials">
            <span className="icon">
              <i class="fa-brands fa-facebook"></i>
            </span>
            <span className="icon">
              <i class="fa-brands fa-twitter"></i>
            </span>
            <span className="icon">
              <i class="fa-brands fa-instagram"></i>
            </span>
          </div>
        </div>
        <div className="f__md">
          <h4>Quick Links</h4>
          <ul>
            {["Home", "About Us", "Blog", "Contact Us", "Your Cart"].map(
              (item, id) => (
                <li className="f-links" key={item - id}>
                  <a href={`#${item}`}>{item}</a>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="f__rt">
          <h4>Contact Us</h4>
          <div className="cont c-1">
            <span className="icon">
              <i class="fa-regular fa-phone"></i>{" "}
            </span>
            <h5>9876543210</h5>
          </div>
          <div className="cont c-2">
            <span className="icon">
              <i class="fa-regular fa-envelope"></i>
            </span>
            <h5>freeofgluten@gmail.com</h5>
          </div>
          <div className="cont c-3">
            <span className="icon">
              <i class="fa-regular fa-location-dot"></i>{" "}
            </span>
            <h5>xyz, old city jamun road, Delhi.</h5>
          </div>
        </div>
      </div>
      <div className="footer_copyright">Freeofgluten © -2023</div>
    </div>
  );
}

export default Footer;
