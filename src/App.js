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
import Account from "./Pages/Account/Account";
import Admin from "./Pages/Admin/Dashboard";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import CreateProduct from "./Pages/Admin/NewProduct";
import ProductList from "./Pages/Admin/ProductList";
import Categories from "./Pages/Admin/CategoryList";
import Pincodes from "./Pages/Admin/PinCodeList";
import CreatePincode from "./Pages/Admin/CreatePincode";
import UpdateProduct from "./Pages/Admin/UpdateProduct";

import ProductDetail from "./Pages/ProductDetail/ProductDetails.js";
import { useState } from "react";
// import { ContactEmergency } from "@mui/icons-material";
import CreateCategory from "./Pages/Admin/CreateCategory";
import UserList from "./Pages/Admin/UserList";
import UpdateCategory from "./Pages/Admin/UpdateCategory";
import HeaderOffer from "./Pages/Admin/HeaderOffer";

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
        <Route path="/about" element={<About />} />
        <Route path="/reach" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/products" element={<ProductList />} />
        <Route path="/admin/product/:id" element={<UpdateProduct />} />
        <Route path="/admin/categories" element={<Categories />} />
        <Route path="/admin/category/:id" element={<UpdateCategory />} />
        <Route path="/admin/categories/create" element={<CreateCategory />} />
        <Route path="/admin/createproject" element={<CreateProduct />} />
        <Route path="/admin/users" element={<UserList />} />
        <Route path="/admin/pincodes" element={<Pincodes />} />
        <Route path="/admin/pincodes/create" element={<CreatePincode />} />
        <Route path="/admin/header" element={<HeaderOffer />} />
      </Routes>
      <Cart toggleCart={toggleCart} setToggleCart={handleToggleCart} />
      <Footer />
    </div>
  );
}

export default App;
