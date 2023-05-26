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
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getHeaderTagLine } from "../../Redux/slices/utilsSlice";

export default function Navbar({ setToggleCart }) {
  const dispatch = useDispatch();
  const { headerTagLine } = useSelector((state) => state.utils);
  const { isAuthenticated } = useSelector((state) => state.user);
  const { isAdmin } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getHeaderTagLine());
  }, []);

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
          <ul>
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
                <AiOutlineUser />
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
