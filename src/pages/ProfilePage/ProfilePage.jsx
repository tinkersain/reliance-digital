// src/ProfilePage.js

import React, { useState } from "react";
import "./ProfilePage.css";
import { IoIosPerson } from "react-icons/io";
import { MdPerson2 } from "react-icons/md";

const ProfilePage = () => {
  const [firstName, setFirstName] = useState("Tanisha");
  const [lastName, setLastName] = useState("Kar");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("tanishakar04@gmail.com");
  const [mobileNumber, setMobileNumber] = useState("7205899177");

  return (
    <div className="profile-page">
      <h2>Personal Information</h2>
      <form>
        <div className="form-group">
          <label>Enter First Name*</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <button type="button">EDIT</button>
        </div>
        <div className="form-group">
          <label>Enter Last Name*</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <button type="button">EDIT</button>
        </div>
        <div className="form-group">
          <label>Your Date of Birth</label>
          <input
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
          <button type="button">EDIT</button>
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
          <label>Enter Email Address*</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Enter Mobile Number*</label>
          <input
            type="text"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;
