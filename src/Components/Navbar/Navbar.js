import Logo from "../../Assets/Images/logo__sec.png";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineUser,
  AiOutlineSearch,
  AiFillDashboard,
} from "react-icons/ai";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { getHeaderTagLine } from "../../Redux/slices/utilsSlice";

export default function Navbar({ setToggleCart }) {
  const dispatch = useDispatch();
  const { headerTagLine } = useSelector((state) => state.utils);
  const { isAuthenticated } = useSelector((state) => state.user);
  const [toggle, setToggle] = useState(false);
  const { isAdmin } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getHeaderTagLine());
  }, [dispatch]);

  return (
    <div className="wrapper__nav">
      <div className="top__nav">
        <div className="social__icon">
          <BsFacebook />
          <BsInstagram />
          <BsTwitter />
        </div>

        <p>
          {headerTagLine ? headerTagLine : "Sale: 20% off on orders above ₹999"}
        </p>
      </div>
      <nav className="navbar-items">
        <div className="container nav__container">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <ul className="app__navbar-links">
            <Link to={`/`}>Home</Link>
            <Link to={`/shop`}>Gluten free Shop</Link>
            <Link to={`/about`}>About Us</Link>
            <Link to={`/reach`}>Reach Us</Link>
            <Link to={`/blogs`}>Blogs</Link>
          </ul>
          <div className="right">
            <AiOutlineSearch />
            <AiOutlineShoppingCart onClick={setToggleCart} />
            {!isAdmin && (
              <Link to={isAuthenticated ? "/account" : "/auth"}>
                <AiOutlineUser />
              </Link>
            )}
            {isAdmin && (
              <Link to="/admin">
                <AiFillDashboard  />
                
              </Link>
            )}
          </div>
        </div>

        <div className="responsive__menu">
          <AiOutlineShoppingCart onClick={setToggleCart} size={25} style={{ marginRight: "10px" }} />

          {!isAdmin && (
            <Link to={isAuthenticated ? "/account" : "/auth"}>
              <AiOutlineUser size={25} style={{ marginRight: "35px" }} />
            </Link>
          )}
          {isAdmin && (
            <Link to="/admin">
              <AiFillDashboard size={25} style={{ marginRight: "35px" }} />
            </Link>
          )}

          <div className="app__navbar-menu">
            <HiMenuAlt4 onClick={() => setToggle(true)} />
            {toggle && (
              <motion.div
                whileInView={{ x: [300, 0] }}
                transition={{ duration: 0.85, ease: "easeOut" }}
              >
                <HiX onClick={() => setToggle(false)} />
                <ul>
                  <Link to={`/`}>Home</Link>
                  <Link to={`/shop`}>Gluten free Shop</Link>
                  <Link to={`/about`}>About Us</Link>
                  <Link to={`/reach`}>Reach Us</Link>
                  <Link to={`/blogs`}>Blogs</Link>
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
