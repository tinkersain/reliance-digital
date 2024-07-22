import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Footer from "./components/Footer/Footer";
import ProductDisplay from "./pages/ProductDisplay/ProductDisplay";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product" element={<ProductDisplay />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
