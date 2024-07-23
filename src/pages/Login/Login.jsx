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
      <img
        src="src/assets/LoginWebBanner.avif"
        alt="Ad Banner"
        className="ad-banner"
      />
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
          <button type="submit" className="login-button">
            PROCEED
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
