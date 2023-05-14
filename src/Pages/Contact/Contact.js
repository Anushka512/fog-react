import React, { useState } from "react";
import axios from "axios";
import contact from "../../Assets/Images/contact.png";
import phn from "../../Assets/Images/phone.png";
import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/send-email", formData)
      .then(() => {
        alert("Your message has been sent!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch(() => {
        alert("Succesfully sent your message!!");
      });
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="contact-page">
      <div className="container1">
        <img src={phn} alt="" />
        <h2 className="quote">Get in touch with us</h2>
      </div>
      <div className="contact-form-container">
        <div>
          <h1>LET'S HAVE A TALK !!</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="contact-image-container">
          <img src={contact} alt="Contact" />
        </div>
      </div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <div className="container3">
        <h2 className="left">Contact</h2>
        <h4 className="left1">freeofgluten@gmail.com</h4>
        <h4 className="left2">9876543210</h4>
        <div class = "vertical1"></div>
        <h2 className="center2"> Based in</h2>
        <h4 className="center1">Old city road, New Delhi, India</h4>
        <div class = "vertical"></div>
        <h2 className="right1">Social Media</h2>
        <a href="#" class="fa fa-facebook"></a>
        <a href="#" class="fa fa-twitter" ></a>
        <a href="#" class="fa fa-instagram"></a>
      </div> 
    </div>
  );
};

export default Contact;
