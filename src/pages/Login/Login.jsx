// src/components/LoginPage.jsx
import React, { useState } from "react";
import "./Login.css"; // Import CSS file for styling

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Mobile Number:", mobileNumber);
  };

  return (
    <div className="login-container">
      <div className="img-ad-container">
        <img
          src="https://www.reliancedigital.in/akamai/images/web/LoginWebBanner.jpeg"
          alt="Ad Banner"
        />
      </div>
      <div className="login-box">
        <h2>Login / Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Enter Mobile Number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
            />
          </div>
          <div className="button-container">
            <button type="submit" className="login-button">
              PROCEED
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
