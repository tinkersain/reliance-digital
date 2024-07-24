import React, { useState } from "react";
import "./Signup.css"; // Import CSS file for styling
import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useToast,
} from "@chakra-ui/react";
import { TbEye, TbEyeClosed } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const toast = useToast();
  const navigate = useNavigate();

  function isValidEmail(email) {
    // Regular expression to validate an email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const handleSignup = (e) => {
    e.preventDefault();

    if (!email.length || !password.length || !name.length) {
      toast({
        title: "All Fields are Mandatory",
        description: "Please fill both email and password",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      if (!isValidEmail(email)) {
        toast({
          title: "Invalid Email",
          description: "Please Enter a valid email",
          status: "warning",
          duration: 3000,
          isClosable: true,
        });
      } else {
        const allUsers = JSON.parse(localStorage.getItem("allusers"));
        const newUser = {
          name: name,
          email: email,
          password: password,
        };
        if (!allUsers || allUsers.length === 0) {
          localStorage.setItem("allusers", JSON.stringify([newUser]));
          toast({
            title: "Sign up Successfull",
            description: "We have logged you in.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          navigate("/", { state: true });
          localStorage.setItem("logged_user", name);
        } else {
          const existingUser = allUsers.find((user) => user.email === email);
          if (existingUser) {
            toast({
              title: "User Already Exist",
              description: "Please Proceed to Login",
              status: "warning",
              duration: 3000,
              isClosable: true,
            });
          } else {
            allUsers.push(newUser);
            localStorage.setItem("allusers", JSON.stringify(allUsers));
            toast({
              title: "Sign up Successfull",
              description: "We have logged you in.",
              status: "success",
              duration: 3000,
              isClosable: true,
            });
            navigate("/");
            localStorage.setItem("logged_user", name);
          }
        }
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
