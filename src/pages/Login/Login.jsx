import React, { useState } from "react";
import "./Login.css"; // Import CSS file for styling
import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useToast,
} from "@chakra-ui/react";
import { TbEye, TbEyeClosed } from "react-icons/tb";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const toast = useToast();
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location.state);

  function isValidEmail(email) {
    // Regular expression to validate an email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email.length || !password.length) {
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
        const sendData = { email, password };
        await axios
          .post("/login", { sendData })
          .then((res) => {
            const userData = res.data.data;
            localStorage.setItem("logged_user", JSON.stringify(userData));
            toast({
              title: "Signin Successfull",
              description: "We're redirecting you...",
              status: "success",
              duration: 3000,
              isClosable: true,
            });
            location.state !== null ? navigate(-1) : navigate("/");
          })
          .catch((err) => {
            console.log(err);
            if (err.response.status === 404) {
              toast({
                title: "User Does not exist",
                status: "error",
                duration: 3000,
                isClosable: true,
              });
            } else if (err.response.status === 400) {
              toast({
                title: "Invalid Password",
                description: "Please Enter correct password",
                status: "warning",
                duration: 3000,
                isClosable: true,
              });
            } else {
              toast({
                title: "Internal Server Error",
                description: "Something went wrong!",
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
        <form onSubmit={handleLogin}>
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
            Dont Have an account?{" "}
            <Link to={"/signup"}>
              <span style={{ color: "#e42929", textDecoration: "underline" }}>
                Create one
              </span>
            </Link>
          </Text>

          <div className="button-container">
            <button
              type="submit"
              className="login-button"
              onClick={handleLogin}
            >
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
