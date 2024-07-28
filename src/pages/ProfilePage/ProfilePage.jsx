// src/ProfilePage.js

import React, { useEffect, useState } from "react";
import "./ProfilePage.css";
import { IoIosPerson } from "react-icons/io";
import { MdPerson2 } from "react-icons/md";
import Sidebar from "../Sidebar/Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import useWindowWidth from "../../components/useWindoWidth/useWindowWidth";
import { Radio, RadioGroup, Stack, useToast } from "@chakra-ui/react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import MainProfile from "../../components/MainProfile/MainProfile";
import Wishlist from "../../components/Wishlist/Wishlist";
import Address from "../../components/Address/Address";
import MyOrder from "../../components/MyOrders/MyOrder";

const ProfilePage = () => {
  const width = useWindowWidth();
  const toast = useToast();

  const userData = JSON.parse(localStorage.getItem("logged_user"));
  if (!userData) {
    return <Navigate to="/" />;
  }

  const [isOpen, toggleOpen] = useState(true);

  useEffect(() => {
    if (width > 800) toggleOpen(true);
    else toggleOpen(false);
  }, [width]);

  const [option, setOption] = useState(1);

  return (
    <div className="profile-container">
      <Sidebar isOpen={isOpen} toggleOpen={toggleOpen} setOption={setOption} />

      <div className="profile-page">
        <div className="ham">
          <GiHamburgerMenu
            style={{
              fontSize: "x-large",
              display: `${width >= 801 ? "none" : ""}`,
              cursor: "pointer",
            }}
            onClick={() => toggleOpen(!isOpen)}
          />
          {option === 1 && <MainProfile />}
          {option === 2 && <MyOrder />}
          {option === 3 && <Address />}
          {option === 4 && <Wishlist />}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
