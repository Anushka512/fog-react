import Logo from "../../Assets/Images/logo__sec.png";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineUser,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import "./Navbar.scss";
import { Link } from "react-router-dom";

export default function Navbar({ setToggleCart }) {
  return (
    <div className="wrapper__nav">
      <div className="top__nav">
        <div className="social__icon">
          <BsFacebook />
          <BsInstagram />
          <BsTwitter />
        </div>

        <p>Sale: 20% off on orders above ₹999</p>
      </div>
      <nav className="navbar-items">
        <div className="container nav__container">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <ul>
            <Link to={`/`}>Home</Link>
            <Link to={`/shop`}>Gluten free Shop</Link>
            <Link to={`/about`}>About Us</Link>
            <Link to={`/reach`}>Reach Us</Link>
            <Link to={`/blogs`}>Blogs</Link>
          </ul>
          <div className="right">
            <AiOutlineSearch />
            <AiOutlineHeart />
            <AiOutlineShoppingCart onClick={setToggleCart} />
            <Link to="/auth">
              <AiOutlineUser />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
