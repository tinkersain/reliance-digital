import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Footer from "./components/Footer/Footer";
import ProductDisplay from "./pages/ProductDisplay/ProductDisplay";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login/Login";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product" element={<ProductDisplay />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
