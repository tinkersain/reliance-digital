// src/Sidebar.js

import React from "react";
import "./Sidebar.css";
import { IoMdClose } from "react-icons/io";
import useWindowWidth from "../../components/useWindoWidth/useWindowWidth";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

const Sidebar = ({ isOpen, toggleOpen, setOption }) => {
  const width = useWindowWidth();
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogout = () => {
    localStorage.removeItem("logged_user");
    toast({
      title: "Logged Out Successfully",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    navigate("/");
  };
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
        <li onClick={() => setOption(1)}>
          <a href="#">My Profile</a>
        </li>
        <li onClick={() => setOption(2)}>
          <a href="#">My Orders</a>
        </li>
        <li onClick={() => setOption(3)}>
          <a href="#">My Address</a>
        </li>
        <li onClick={() => setOption(4)}>
          <a href="#">My Wishlist</a>
        </li>
        <li>
          <a href="#">Rone Loyalty Points</a>
        </li>
        <li>
          <a href="#">My Credit</a>
        </li>
        <li onClick={handleLogout}>
          <a href="#">Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
