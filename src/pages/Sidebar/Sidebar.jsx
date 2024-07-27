// src/Sidebar.js

import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
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
