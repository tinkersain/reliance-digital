// src/Sidebar.js

import React from "react";
import "./Sidebar.css";
import { IoMdClose } from "react-icons/io";
import useWindowWidth from "../../components/useWindoWidth/useWindowWidth";

const Sidebar = ({ isOpen, toggleOpen }) => {
  const width = useWindowWidth();
  return (
    <div className="sidebar" style={{ display: `${isOpen ? "" : "none"}` }}>
      <ul>
        <li
          style={{
            float: "right",
            display: `${width <= 800 ? "" : "none"}`,
          }}
          onClick={() => toggleOpen(!isOpen)}
        >
          <IoMdClose style={{ fontSize: "x-large", fontWeight: "800" }} />
        </li>
        <li>
          <a href="#">My Account</a>
        </li>
        <li>
          <a href="#">My Profile</a>
        </li>
        <li>
          <a href="#">My Order</a>
        </li>
        <li>
          <a href="#">My Address</a>
        </li>
        <li>
          <a href="#">My Wishlist</a>
        </li>
        <li>
          <a href="#">ROne Loyalty Points</a>
        </li>
        <li>
          <a href="#">My Credit</a>
        </li>
        <li>
          <a href="#">Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
