import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Footer from "./components/Footer/Footer";
import ProductDisplay from "./pages/ProductDisplay/ProductDisplay";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login/Login";
import ProductInfo from "./pages/ProductInfo/ProductInfo";
import Cart from "./pages/Cart/Cart";
import Signup from "./pages/Signup/Signup";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import WishlistPage from "./pages/WishlistPage/WishlistPage";
import Demo from "./components/page";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product" element={<ProductDisplay />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="productDetails" element={<ProductInfo />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/ProfilePage" element={<ProfilePage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/page" element={<Demo />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
