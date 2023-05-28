import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import webHeader from "../../Assets/Images/web_header.jpg";
// import CardImg from "../../Assets/Images/3.jpg.png";
// import logoSec from "../../Assets/Images/logo__sec.png";
import aboutBanner from "../../Assets/Images/all.png";
// import catImg1 from "../../Assets/Images/cat-img-1.png";
// import catImg2 from "../../Assets/Images/cat-img-2.png";
// import catImg3 from "../../Assets/Images/cat-img-3.png";
import catImg4 from "../../Assets/Images/cat-img-4.png";
import Card from "../../Components/Card/Card.js";
import TestimonialCard from "../../Components/TestimonialCard/TestimonialCard.js";
import bread from "../../Assets/Images/bread.png";
// import arrow from "../../Assets/Images/arrow.png";
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

  console.log("THis is product", products);

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
          <img src={webHeader} alt="HERO__IMG" />
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

            <h4>Quick Delivery</h4>
            <p className="desc">We always Deliver on time</p>
          </div>

          <div className="ser ser-2">
            <MdPayments />
            <h4>Safe transaction</h4>
            <p className="desc">100% safe and secure payments</p>
          </div>

          <div className="ser ser-3">
            <MdOutlineSupportAgent />
            <h4>24*7 Support</h4>
            <p className="desc">We are Always there for you</p>
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
                  price={item.weightPrice[0].price}
                  weight={item.weightPrice[0].weight}
                  salePrice={item.weightPrice[0].price}
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
              products?.map((item, index) => (
                <Card
                  key={item.name + index}
                  imgUrl={item?.images[0]?.url}
                  name={item.name}
                  price={item.weightPrice[0].price}
                  weight={item.weightPrice[0].weight}
                  salePrice={item.weightPrice[0].price}
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


      <div className="container about__banner">
        <div className="ab-left">
          <h3 className="ab-head-first">Why to choose us ?</h3>
          <h3 className="ab-head-sec">
            Why Free of Gluten?
          </h3>
          <p className="p-text">
            Gluten, a protein found in wheat and several other grains. It
            means only eating only whole foods with no gluten. A gluten-free
            diet is also popular among people who haven’t been diagnosed. It
            means only eating only whole foods with no gluten. A gluten-free
            diet is also popular among people who haven’t been diagnosed.
          </p>
          <span>
            <button className="btn bl-btn">Go to Shop</button>
            <button className="btn bl-btn outline-btn">Reach Us</button>
          </span>

        </div>

        <span className="ab-right">
          <img src={aboutBanner} alt="aboutbanner" />
        </span>
      </div>

      {/* {---------------------BANNER SECTION END----------------------------} */}

      {/* Yess section */}

      <div className="ysection">
        <div className="y-top">
        <h2 className="yess">Yesssssss!!!!!!</h2>
        <h1 className="its">It’s Healthy & Tasty</h1>
        </div>
        <div className="y-btm">
          <img src={bread} alt="bread" />
        </div>
      </div>

      {/* text section  */}
      <div className="lifestyle">
        <h1 className="lifestyle">
          <div>
            It's not just
            <span className="food"> Food,</span>
          </div>
          <div>
            It's a<span className="life"> Lifestyle!</span>
          </div>
        </h1>
      </div>


      {/* {---------------------TESTIMONIALS SECTION START----------------------------} */}
      <section className="test-wrapper">

        <div className=" container testimonials">
          <h1>
            We Serve - they
            <span className="enjoy1"> Enjoy </span> <br />
            Every minute of their
            <span className="live1"> Lives</span>
          </h1>

          <p className="test-text">
            We passionately cater our customers with gluten sensitivities,
            allowing them to relish every moment without worry, while indulging
            in our mouthwatering and completely Gluten-Free products. Experience the joy
            of gluten-free living and embrace a life filled with flavorful delights.
          </p>

          <div className="test-cards flex__center">

            <TestimonialCard
              name="Abhinav Gupta"
              desc="Ordered a gluten free cake & I was so happily pleased 
              with everything. My go to place for gluten free food. Thanks for such amazing food."
            />

            <TestimonialCard
              name="Vishal Bachani"
              desc="The gluten free pineapple cake was the best ! Reminded me of 
              the cake we used to get in our school days, with the quality maintained really well."
            />

            <TestimonialCard
              name="Shalu Singh"
              desc="Being a parent of a celiac child, I am so glad there is a gluten free facility in Delhi which fulfills all our 
              gf bakery needs. Had ordered a birthday cake for my daughter recently… she loved it!"
            />

            <TestimonialCard
              name="Aman Kabir"
              desc="This store is a life saver. Certified gluten free as I've tried it personally and I suffer from celiacs.
                    I'm just sad it took me so long to find it."
            />
            <TestimonialCard
              name="Neetu Mishra"
              desc="It is really difficult to find a good celiac friendly Baker. But thank you Chocolate temptations for such an appetizing cake.
              Also other stuffs on the menu are an added on bonus."
            />

            <TestimonialCard
              name="Mahima Seth"
              desc="The best place to have gluten free food! Yummy & 
              Delicious. My favourite is Pineapple Pastry. They have a 
              gluten free dedicated kitchen which is a saviour for all the celiacs."
            />

          </div>
        </div>
      </section>


      {/* {---------------------TESTIMONIALS SECTION END----------------------------} */}
      <section className="cta">
        <div className="cta-wrapper container">

          <div className="cta-left">
            <h3 className="first">Join our community</h3>
            <h2 className="sec">YOU ARE NOT ALONE</h2>
            <p className="para">
            We invite you to be a part of our community FOGHEADS of Gluten sensitive 
            individuals where your unique dietary needs are understood and 
            celebrated. By joining our community you get access to valuable 
            insights, resources and connections with the individuals with a 
            shared sensitivity Together, let's 
            embrace a gluten-free lifestyle and embark on a journey of shared 
            inspiration and empowerment.
            </p>
          </div>
          <div className="cta-right">

          <form onSubmit={handleSubmit} >
            <div className="form-field">
              {/* <label htmlFor="email">Email</label> */}
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <button type="submit">Submit</button>
            </div>
            {/* <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Type your words here"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div> */}
            {/* <button type="submit">Submit</button> */}
          </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
