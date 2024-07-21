import React, { useState } from "react";
import {
  Image,
  Input,
  InputGroup,
  InputRightElement,
  useStatStyles,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import dropdownData from "./dropdownData";
import "./Navbar.css";

function Navbar() {
  const [selected, setSelected] = useState("Mobiles & Tablets");
  const [toDisplay, setToDisplay] = useState(false);
  return (
    <>
      <div
        className="nav-main
    "
      >
        <div className="upper-part">
          <div className="child1">
            <p>Find a Store</p>
            <p>|</p>
            <p>Buying Guides</p>
            <p>|</p>
            <p>Contact US</p>
          </div>
        </div>
        <div className="lower-part">
          <div className="logo">
            <Image
              src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg"
              alt="logo"
            />
          </div>
          <div className="search">
            <InputGroup>
              <Input
                variant="filled"
                type="search"
                placeholder="Find your favourite product"
                borderRadius={"20px"}
              />
              <InputRightElement pointerEvents="none">
                <FaSearch style={{ color: "grey" }} />
              </InputRightElement>
            </InputGroup>
          </div>
          <div className="options">
            <div className="parent-option">
              <div className="child2">
                <p>
                  Select your pin <code></code>
                </p>
                <p>|</p>
                <p style={{ display: "flex", alignItems: "center" }}>
                  <IoCart style={{ fontSize: "x-large" }} />
                  <p>Cart</p>
                </p>
                <p>|</p>
                <p style={{ display: "flex", alignItems: "center" }}>
                  <IoPerson style={{ fontSize: "x-large" }} />
                  <p>Hi Aditya</p>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="navigations">
          {Object.keys(dropdownData).map((item) => {
            return (
              <>
                <div
                  style={{
                    display: "flex",
                    padding: "0.5%",
                  }}
                  onMouseOver={() => {
                    setSelected(item);
                    setToDisplay(true);
                  }}
                  onMouseLeave={() => setToDisplay(false)}
                >
                  <div>{item}</div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column-reverse",
                    }}
                  >
                    <FaAngleDown />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      {toDisplay && (
        <div className="parent-dropdown">
          <div className="dropdown">
            <div className="drop-up">
              {dropdownData[selected].slice(1, 10).map((key) => {
                return <div>{key}</div>;
              })}
            </div>
            <div className="drop-up">
              {dropdownData[selected].slice(11, 20).map((key) => {
                return <div>{key}</div>;
              })}
            </div>
            <div className="drop-up">
              {dropdownData[selected].slice(21, 30).map((key) => {
                return <div>{key}</div>;
              })}
            </div>
            <div className="drop-up">
              {dropdownData[selected].slice(31, 40).map((key) => {
                return <div>{key}</div>;
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
