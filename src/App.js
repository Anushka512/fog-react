import "./style.scss";

import Navbar from "./Components/Navbar/Navbar.js";
import { Route, Routes } from "react-router-dom";
import Error from "./Pages/Error/Error.js";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Products from "./Pages/Shop/Shop.js";
import Faq from "./Pages/FAQ/Faq";
import Cart from "./Components/Cart/Cart.js";
import Account from "./Pages/Account/index";
import Admin from "./Pages/Admin/Dashboard";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import CreateProduct from "./Pages/Admin/NewProduct"

import ProductDetail from "./Pages/ProductDetail/ProductDetails.js";
import { useState } from "react";
import { ContactEmergency } from "@mui/icons-material";

function App() {
  const [toggleCart, setToggleCart] = useState(false);
  function handleToggleCart() {
    console.log("Run", toggleCart);
    setToggleCart(!toggleCart);
  }
  return (
    <div className="App">
      <Navbar setToggleCart={handleToggleCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/badreq" element={<Error />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/shop" element={<Products />} />
        <Route path="/account" element={<Account />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/about" element={<About />} />
        <Route path="/reach" element={<Contact />} />
        <Route path="/admin/createproject" element={<CreateProduct />} />
      </Routes>
      <Cart toggleCart={toggleCart} setToggleCart={handleToggleCart} />
      <Footer />
    </div>
  );
}

export default App;
