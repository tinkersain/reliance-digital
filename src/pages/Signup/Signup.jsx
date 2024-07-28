import React, { useState } from "react";
import "./Signup.css"; // Import CSS file for styling
import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { TbEye, TbEyeClosed } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState();

  const toast = useToast();
  const navigate = useNavigate();

  function isValidEmail(email) {
    // Regular expression to validate an email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function isEmpty(data) {
    for (const k in data) {
      if (data[k].length === 0) return true;
    }
    return false;
  }

  const handleSignup = async (e) => {
    e.preventDefault();
    const userData = {
      name: name,
      mobile: phone,
      email: email,
      password: password,
      gender: gender,
    };

    if (isEmpty(userData)) {
      toast({
        title: "All Fields are Mandatory",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      if (!isValidEmail(userData.email)) {
        toast({
          title: "Invalid Email",
          description: "Please Enter a valid email",
          status: "warning",
          duration: 3000,
          isClosable: true,
        });
      } else {
        await axios
          .post("/signup", { userData })
          .then((res) => {
            console.log(res.data);
            toast({
              title: "Signup Successful",
              description: "We're redirecting you to Homepage",
              status: "success",
              duration: 3000,
              isClosable: true,
            });
            localStorage.setItem("logged_user", JSON.stringify(res.data.data));
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
            if (err.response.status == 400) {
              toast({
                title: "User Already Exists",
                description: "Please Try Signup using different Email",
                status: "warning",
                duration: 3000,
                isClosable: true,
              });
            } else {
              toast({
                title: "Internal Server error",
                status: "error",
                duration: 3000,
                isClosable: true,
              });
            }
          });
      }
    }
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
        <form onSubmit={handleSignup}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              placeholder="Enter your Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value.substring(0, 10))}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <InputGroup>
              <Input
                variant={"none"}
                type={showPassword ? "text" : "password"}
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <InputRightElement>
                <IconButton
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  icon={showPassword ? <TbEyeClosed /> : <TbEye />}
                  onClick={() => setShowPassword(!showPassword)}
                  variant="unstyled"
                  size={"lg"}
                />
              </InputRightElement>
            </InputGroup>
          </div>
          <div className="input-group">
            <RadioGroup onChange={setGender} value={gender}>
              <Stack direction="row">
                <Radio value="Male">Male</Radio>
                <Radio value="Female">Female</Radio>
              </Stack>
            </RadioGroup>
          </div>
          <Text>
            Already have an account?
            <Link to={"/login"}>
              <span
                style={{
                  paddingLeft: "1%",
                  color: "#e42929",
                  textDecoration: "underline",
                }}
              >
                Login Now
              </span>
            </Link>
          </Text>
          <div className="button-container">
            <button
              type="submit"
              className="login-button"
              onClick={handleSignup}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
