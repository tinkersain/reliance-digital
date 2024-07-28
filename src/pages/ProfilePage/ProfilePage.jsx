// src/ProfilePage.js

import React, { useEffect, useState } from "react";
import "./ProfilePage.css";
import { IoIosPerson } from "react-icons/io";
import { MdPerson2 } from "react-icons/md";
import Sidebar from "../Sidebar/Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import useWindowWidth from "../../components/useWindoWidth/useWindowWidth";
import { useToast } from "@chakra-ui/react";

const ProfilePage = () => {
  const width = useWindowWidth();
  const toast = useToast();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [isOpen, toggleOpen] = useState(true);

  const [editStatus, setEditStatus] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });

  useEffect(() => {
    if (width > 800) toggleOpen(true);
    else toggleOpen(false);
  }, [width]);

  function isEmpty(data) {
    for (const k in data) {
      if (data[k].length === 0) return true;
    }
    return false;
  }

  function handleEditClick(num) {
    setEditStatus((prev) => ({ ...prev, [num]: true }));
  }

  function handleUpdate() {
    const userData = {
      name: firstName + lastName,
      dob: dateOfBirth,
      mobile: mobileNumber,
    };
    if (isEmpty(userData)) {
      toast({
        title: "Cannot Update Blank Values",
        description: "Please fill values to update",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      console.log(userData);
    }
  }

  return (
    <div className="profile-container">
      <Sidebar isOpen={isOpen} toggleOpen={toggleOpen} />

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
          <h2>Personal Information</h2>
        </div>
        <form>
          <div className="name-content">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                value={firstName}
                disabled={editStatus[1] ? false : true}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <button
                type="button"
                onClick={() => {
                  if (editStatus[1]) handleUpdate();
                  else handleEditClick(1);
                }}
              >
                {editStatus[1] ? "UPDATE" : "EDIT"}
              </button>
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                value={lastName}
                disabled={editStatus[2] ? false : true}
                onChange={(e) => setLastName(e.target.value)}
              />
              <button
                type="button"
                onClick={() => {
                  if (editStatus[2]) handleUpdate();
                  else handleEditClick(2);
                }}
              >
                {editStatus[2] ? "UPDATE" : "EDIT"}
              </button>
            </div>
          </div>
          <div className="form-group">
            <label>Your Date of Birth</label>
            <input
              type="date"
              value={dateOfBirth}
              disabled={editStatus[3] ? false : true}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
            <button
              type="button"
              onClick={() => {
                if (editStatus[3]) handleUpdate();
                else handleEditClick(3);
              }}
            >
              {editStatus[3] ? "UPDATE" : "EDIT"}
            </button>
          </div>
          <div className="form-group">
            <label>Your Gender</label>
            <div className="gender-group">
              <label>
                <input
                  type="radio"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={(e) => setGender(e.target.value)}
                />
                <IoIosPerson />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={(e) => setGender(e.target.value)}
                />
                <MdPerson2 />
                Female
              </label>
            </div>
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Mobile Number</label>
            <input
              type="text"
              value={mobileNumber}
              disabled={editStatus[4] ? false : true}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
            <button
              type="button"
              onClick={() => {
                if (editStatus[4]) handleUpdate();
                else handleEditClick(4);
              }}
            >
              {editStatus[4] ? "UPDATE" : "EDIT"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
