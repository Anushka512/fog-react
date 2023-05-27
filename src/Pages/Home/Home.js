import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Banner from "../../Assets/Images/hero-img-new.png";
// import CardImg from "../../Assets/Images/3.jpg.png";
import logoSec from "../../Assets/Images/logo__sec.png";
import aboutBanner from "../../Assets/Images/all.png";
import catImg1 from "../../Assets/Images/cat-img-1.png";
import catImg2 from "../../Assets/Images/cat-img-2.png";
import catImg3 from "../../Assets/Images/cat-img-3.png";
import catImg4 from "../../Assets/Images/cat-img-4.png";
import Card from "../../Components/Card/Card.js";
import TestimonialCard from "../../Components/TestimonialCard/TestimonialCard.js";
import bread from "../../Assets/Images/bread.png";
import arrow from "../../Assets/Images/arrow.png";
import { FiTruck } from "react-icons/fi";
import { MdOutlineSupportAgent, MdPayments } from "react-icons/md";
import { BiTimer } from "react-icons/bi";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
// import { ProductData } from "../../Data/productsData.js";//
import "./Home.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategories,
  getAllProducts,
} from "../../Redux/slices/productSlice";
import { getUserDetail } from "../../Redux/slices/user";
import MinLoader from "../../Components/Loader/MinLoader";

function Home() {
  const dispatch = useDispatch();
  const { products, categories } = useSelector((state) => state.products);
  const { isLoading } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllCategories());
    dispatch(getUserDetail());
  }, [dispatch]);

  const HorizontalScroll1 = useRef();
  const HorizontalScroll2 = useRef();
  // const [activeFilter, setActiveFilter] = useState("All");

  const handleTransformLeft1 = (e) => {
    console.log(e);
    HorizontalScroll1.current.scrollLeft += 120;
  };

  const handleTransformRight1 = () => {
    HorizontalScroll1.current.scrollLeft -= 120;
  };

  const handleTransformLeft2 = (e) => {
    console.log(e);
    HorizontalScroll2.current.scrollLeft += 120;
  };

  const handleTransformRight2 = () => {
    HorizontalScroll2.current.scrollLeft -= 120;
  };

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
    <div className="Home">
      {/* {---------------------HERO SECTION START----------------------------} */}

      <div className="banner">
        <div className=" hero__container">
          <img src={Banner} alt="HERO__IMG" />
        </div>
      </div>

      {/* {---------------------HERO SECTION END----------------------------} */}

      {/* {---------------------SERVICE SECTION START----------------------------} */}

      <div className="service__detail">
        <div className="services__option">
          <div className="ser ser-1">
            <FiTruck />
            <h4>Free Delivery</h4>
            <p className="desc">on orders above ₹999</p>
          </div>

          <div className="ser ser-1">
            <BiTimer />

            <h4>Free Delivery</h4>
            <p className="desc">on orders above ₹999</p>
          </div>

          <div className="ser ser-2">
            <MdPayments />
            <h4>Free Delivery</h4>
            <p className="desc">on orders above ₹999</p>
          </div>

          <div className="ser ser-3">
            <MdOutlineSupportAgent />
            <h4>Free Delivery</h4>
            <p className="desc">on orders above ₹999</p>
          </div>
        </div>
      </div>

      {/* {---------------------SERVICE SECTION END----------------------------} */}

      {/* {---------------------POPULAR-CATEGORY  SECTION START----------------------------} */}

      <div className="categories">
        <div className="categories__main container">
          <div className="cat-head">
            <h2>Shop By</h2>
            <h1>Categories</h1>
          </div>
          <div className="cat_card_wrapper">
            {isLoading ? (
              <MinLoader />
            ) : (
              categories.map((category) => <img src={catImg4} alt="cat-img" />)
            )}
            {/* <img src={catImg1} alt="cat-img" />
            <img src={catImg2} alt="cat-img" />
            <img src={catImg3} alt="cat-img" /> */}
          </div>
          <div className="cat-btn">
            <Link to="/shop" className="btn bl-btn">
              Go to Shop
            </Link>
          </div>
        </div>
      </div>

      {/* {---------------------CARD SECTION START----------------------------} */}
      <article className="products">
        <div className="container products__container">
          <div className="popular__product product__heading">
            <div>
              <h1>
                Supersaver <span className="g-text">Up to 50% off</span>
              </h1>
              <span>View all -</span>
            </div>
          </div>
          <div className="products__cards" ref={HorizontalScroll1}>
            {isLoading ? (
              <div
                style={{
                  width: "90vw",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MinLoader />
              </div>
            ) : (
              products.map((item, index) => (
                <Card
                  key={item.name + index}
                  imgUrl={item?.images[0]?.url}
                  name={item.name}
                  price={item.price}
                  salePrice={item.price - "20"}
                  category={"Breads"}
                  id={item._id}
                  isAddedOnCart={item.isOnCard ? true : false}
                />
              ))
            )}
          </div>
          <div className="scroll__buttons">
            <AiFillCaretRight
              className="right__btn"
              onClick={handleTransformLeft1}
            />
            <AiFillCaretLeft
              className="left__btn"
              onClick={handleTransformRight1}
            />
          </div>

          <div className="feature__product product__heading">
            <div>
              <h1>
                Our <span className="g-text">Best Selling Products</span>
              </h1>
              <span>View all -</span>
            </div>
          </div>
          <div className="products__cards" ref={HorizontalScroll2}>
            {isLoading ? (
              <div
                style={{
                  width: "90vw",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MinLoader />
              </div>
            ) : (
              products.map((item, index) => (
                <Card
                  key={item.name + index}
                  imgUrl={item?.images[0]?.url}
                  name={item.name}
                  price={item.price}
                  salePrice={item.price - "20"}
                  category={"Breads"}
                  id={item._id}
                  isAddedOnCart={item.isOnCard ? true : false}
                />
              ))
            )}
          </div>
          <div className="scroll__buttons-2">
            <AiFillCaretRight
              className="right__btn"
              onClick={handleTransformLeft2}
            />
            <AiFillCaretLeft
              className="left__btn"
              onClick={handleTransformRight2}
            />
          </div>
        </div>
      </article>

      {/* {---------------------CARD SECTION END----------------------------} */}

      {/* {---------------------BANNER SECTION START----------------------------} */}

      <div className="About__Banner">
        <div className="container about__banner flex__center">
          <div className="left">
            <div className="about__logo">
              <img src={logoSec} alt="Company__logo" />
            </div>

            <div className="about__banner-info">
              <h3 className="ab-head-first">Why to choose us ?</h3>
              <h2 className="ab-head-sec">
                Why <span style={{ fontWeight: "bold" }}>Free of Gluten?</span>
              </h2>
              <p className="p-text">
                Gluten, a protein found in wheat and several other grains. It
                means only eating only whole foods with no gluten. A gluten-free
                diet is also popular among people who haven’t been diagnosed. It
                means only eating only whole foods with no gluten. A gluten-free
                diet is also popular among people who haven’t been diagnosed.
              </p>
              <button className="btn1">Go to Shop</button>
              <button className="btn2">Reach Us</button>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={aboutBanner} alt="banner" />
        </div>
      </div>

      {/* {---------------------BANNER SECTION END----------------------------} */}

      {/* Yess section */}

      <div className="ysection">
        <h2 className="yess">Yesssssss!!!!!!</h2>
        <h1 className="its">It’s Healthy & Tasty</h1>
        <div className="right">
          <img src={bread} alt="bread" />
        </div>
      </div>

      {/* text section  */}

      <h1 className="lifestyle">
        <div>
          It's not just
          <span className="food"> Food,</span>
        </div>
        <div>
          It's a<span className="life"> Lifestyle!</span>
        </div>
      </h1>

      {/* {---------------------TESTIMONIALS SECTION START----------------------------} */}

      <div className="Testimonials1">
        <h1>
          We Serve - they
          <span className="enjoy1"> Enjoy</span>
          every
        </h1>
        <h1>
          minute of their
          {/* <img src={arrow} alt="" /> */}
          <span className="live1"> Lives</span>
        </h1>
      </div>

      <div className="test">
        <p>
          We don’t accept half-measures and shortcuts, because what we care
          about is the WOW effect. And all the lucl that our efforts{" "}
          <p className="centre">
            are not in vain. we know this because we closely follow the opinions
            of our cusumers.
          </p>
        </p>
      </div>

      <div className="cards">
        <div className="testimonials__container flex__center">
          <TestimonialCard
            name="Deepak"
            desc="The generated Lorem Ipsum is therefore always free from a dummy text, generated text."
          />

          <TestimonialCard
            name="Deepak"
            desc="The generated Lorem Ipsum is therefore always free from a dummy text, generated text."
          />

          <TestimonialCard
            name="Deepak"
            desc="The generated Lorem Ipsum is therefore always free from a dummy text, generated text."
          />
        </div>
      </div>

      {/* {---------------------TESTIMONIALS SECTION END----------------------------} */}
      <div className="last">
        <div className="contact">
          <div className="us">
            <h3 className="first">Join our community</h3>
            <h2 className="sec">YOU ARE NOT ALONE</h2>
            <p className="para">
              Gluten, a protein found in wheat and several other grains. It
              means only eating only whole foods with no gluten. A gluten-free
              diet is also popular among people who haven’t been diagnosed. It
              means only eating only whole foods with no gluten. A gluten-free
              diet is also popular among people who haven’t been diagnosed.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
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
        <div className="white"></div>
      </div>
    </div>
  );
}

export default Home;
