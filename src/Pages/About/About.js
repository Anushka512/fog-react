import React from "react";
import "./About.scss";
import aboutus from "../../Assets/Images/aboutus.png";
import { motion } from "framer-motion";
import aboutBanner from "../../Assets/Images/all.png";
// import arrow from "../../Assets/Images/carasole.png";
import vision from "../../Assets/Images/vision.png";
import mission from "../../Assets/Images/mission.png";
import csr from "../../Assets/Images/csr.png";
import trust from "../../Assets/Images/trust.png";
import integrity from "../../Assets/Images/integrity.png";
import innovation from "../../Assets/Images/innovation.png";
import quality from "../../Assets/Images/quality.png";
import customer from "../../Assets/Images/customer_focus.png";
import founder from "../../Assets/Images/founder.png";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function About() {
  // Animation variants
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="about-us-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            About Us
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Think Food, Think us
          </motion.p>
        </div>
        <img src={aboutus} alt="Hero" />
      </section>

      {/* Who We Are Section */}
      <section className="who-we-are-section">
        <div className="section-title">
          <h2 className="best">Why we are best?</h2>
          <h2 className="ncr">BEST GLUTEN FREE PRODUCT IN DELHI-NCR</h2>
        </div>
        <p>
          Welcome to Free of Gluten by Chocolate Temptation, a unique gluten-free food service dedicated to providing the ultimate experience for all our customers. <br></br>
          We understand that living with gluten intolerance or celiac disease can be a challenging and frustrating experience. That's why we built the Free of Gluten community - helping those with special dietary needs enjoy numerous mouth-watering meals without subtle worries!<br></br>
          We use only the freshest and highest quality ingredients to create dishes - that are both flavourful and healthy. From delectable appetizers to satisfying entrees and tempting desserts, our menu has something for everyone.<br></br>
          But we are more than just a restaurant; we are a community of individuals sharing the passion for healthy and delicious gluten-free food.
          At Free of Gluten, we are committed to providing the highest level of service and satisfaction. We take pride in our attention to detail and our commitment to excellence. Our team, dedicated to every customer, ensures that consumers derive maximum contentment and pleasure, seeking from our innovative, healthy, and delectable presentations.
          <br></br>Whether you are gluten intolerant, celiac, or simply looking for a healthy and delicious meal, we invite you to join us at Free of Gluten. Come and experience the ultimate gluten-free legacy from the comfort of your home -<b>an experience you will never forget!</b>

        </p>
      </section>

      {/* Our Story Section */}

      <div className="About__Banner">
        <div className="container about__banner flex__center">
          <div className="left">
            <div className="about__banner-info">
              <h3 className="ab-head-first">What Inspire us?</h3>
              <h2 className="ab-head-sec">
                Story behind{" "}-
                <span style={{ fontWeight: "bold" }}> “A Tryst with Destiny!” </span>
              </h2>
              <p className="p-text">
                In 2010, Free of Gluten was established in the vibrant city of New Delhi with a singular mission: to provide delicious and healthy gluten-free food for everyone.
                 At the time, gluten-free food was a relatively new concept, rocking back and forth in its infancy. But only a few options were available for those with gluten intolerance and celiac disease.
                Our team of passionate bakers and confectioners recognized this gap in the market and set out to create a range of gluten-free products that were healthily delectable.
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={aboutBanner} alt="banner" />
        </div>
      </div>

      {/* Vision and Mission Section */}
      <section className="vision-mission-section">
        {/* <div className="section-title">
          <h2>Vision and Mission</h2>
        </div> */}
        <div className="images">
          <img src={vision} alt="" />
          <img src={mission} alt="" />
          <img src={csr} alt="" />
        </div>
        <div className="vision-mission-content">
          <div className="vision">
            <h3>VISION</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="mission">
            <h3>MISSION</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="csr">
            <h3>CSR</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="values-section">
        <div className="section-title">
          <h2>Our Values</h2>
        </div>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere
            lorem ipsum dolor sit amet consectetur adipiscing. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Posuere lorem ipsum
            dolor sit amet consectetur adipiscing. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Posuere lorem ipsum dolor sit amet
            consectetur adipiscing.
          </p>
        </div>
        <div className="image">
          <img class="one" src={trust} alt="" />
          <img class="one" src={integrity} alt="" />
          <img class="one" src={innovation} alt="" />
          <img class="one" src={quality} alt="" />
          <img class="one" src={customer} alt="" />
        </div>
      </section>

      {/* Founder */}
      <div className="section-container">
        <div className="section-content">
          <h2 className="section-heading">Our Founder</h2>
          <p className="section-paragraph">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere
            lorem ipsum dolor sit amet consectetur adipiscing. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Posuere lorem ipsum
            dolor sit amet consectetur adipiscing. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Posuere lorem ipsum dolor sit amet
            consectetur adipiscing.
          </p>
        </div>
        <div className="section-photo">
          <img src={founder} alt="section__pic" />
        </div>
      </div>

      {/* Contact Us */}

      <div className="contact-us-container">
        <h2 className="contact-us-heading">Contact Us</h2>
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <span>9876543210/ 0985142756</span>
        </div>
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <span>Glutenfree@gmail.com</span>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <span>A-30 road, Old city, new delhi, India</span>
        </div>
      </div>
    </div>
  );
}

export default About;