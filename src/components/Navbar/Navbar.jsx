import React, { useEffect, useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  background,
  useToast,
} from "@chakra-ui/react";

import {
  Button,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  useDisclosure,
  Divider,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { BsCameraFill, BsFillTelephoneFill } from "react-icons/bs";
import {
  FaBath,
  FaHeadphones,
  FaInfoCircle,
  FaMobileAlt,
  FaShoppingCart,
  FaSitemap,
  FaUsb,
} from "react-icons/fa";
import { GiHamburgerMenu, GiPlug } from "react-icons/gi";
import { GoPlus } from "react-icons/go";
import {
  MdAccountCircle,
  MdComputer,
  MdLocationOn,
  MdMyLocation,
  MdOutlineSms,
} from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { ImSpoonKnife } from "react-icons/im";
import { BiQrScan } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa";
import dropdownData from "./dropdownData";
import "./Navbar.css";
import useWindowWidth from "../useWindoWidth/useWindowWidth";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loggedUser, setLoggedUser] = useState(
    JSON.parse(localStorage.getItem("logged_user"))
  );
  const [selected, setSelected] = useState("Mobiles & Tablets");
  const [toDisplay, setToDisplay] = useState(false);
  const width = useWindowWidth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [trigger, setTrigger] = useState(false);

  const toast = useToast();

  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("logged_user")));
  }, [trigger, location]);

  const handleSignout = () => {
    localStorage.removeItem("logged_user");
    toast({
      title: "Logged Out Successfully",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setTrigger(!trigger);
  };

  return (
    <>
      <div
        className="nav-main
    "
      >
        {width > 800 && (
          <div className="upper-part">
            <div className="child1">
              <p>Find a Store</p>
              <p style={{ borderLeft: "1px solid white" }}>Buying Guides</p>
              <p style={{ borderLeft: "1px solid white" }}>Contact us</p>
            </div>
          </div>
        )}
        {width > 800 && (
          <div className="lower-part">
            <div className="logo" onClick={() => navigate("/")}>
              <img
                src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg"
                alt="logo"
                width={150}
              />
            </div>
            <div className="search">
              <InputGroup width={"100%"}>
                <Input
                  placeholder="Find your favorite products"
                  variant={"none"}
                  borderRadius="20px"
                  type="search"
                  paddingLeft={"20px"}
                  color={"black"}
                />
                <InputRightElement>
                  <FaSearch style={{ color: "grey" }} />
                </InputRightElement>
              </InputGroup>
            </div>

            <div className="options">
              <div className="parent-option">
                <div className="child2">
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Menu>
                      <MenuButton
                        style={{ fontSize: "14px", fontWeight: "bold" }}
                      >
                        Select your Pincode
                      </MenuButton>
                      <MenuList background={"#e42929"}>
                        <h1 style={{ padding: "2% " }}>
                          Choose Your Delivery Location
                        </h1>
                        <MenuItem background={"#003380"}>
                          <Input
                            placeholder="Enter Delivery Pincode"
                            type="search"
                            variant={"none"}
                            paddingLeft={"20px"}
                            color={"black"}
                          />
                        </MenuItem>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            paddingLeft: "2%",
                          }}
                        >
                          <MdMyLocation style={{ fontSize: "large" }} />
                          <h1 style={{ padding: "2%" }}>Detect My Location</h1>
                        </div>
                      </MenuList>
                    </Menu>
                  </p>
                  <p>|</p>
                  <Link to={"/cart"}>
                    <p style={{ display: "flex", alignItems: "center" }}>
                      <IoCart style={{ fontSize: "x-large" }} />
                      <p>Cart</p>
                    </p>
                  </Link>
                  <Link to={!loggedUser ? "/login" : "/ProfilePage"}>
                    <p
                      style={{
                        display: "flex",
                        alignItems: "center",
                        borderLeft: "1px solid white",
                      }}
                    >
                      <IoPerson style={{ fontSize: "x-large" }} />

                      <p>
                        {loggedUser
                          ? `Hi ${loggedUser.name.split(" ")[0]}`
                          : "Login"}
                      </p>
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        {width < 800 && (
          <>
            <div className="lower-part-mobile">
              <div className="top-lower">
                <div className="contain-lower" onClick={onOpen}>
                  <Button background={"transparent"} color={"white"}>
                    <GiHamburgerMenu
                      colorScheme="teal"
                      style={{ fontSize: "140%" }}
                    />
                  </Button>
                </div>
                <div className="logo">
                  <Link to="/">
                    <Image
                      src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg"
                      alt="logo"
                      width={150}
                    />
                  </Link>
                </div>
                <div className="options">
                  <Link to={"/cart"}>
                    <Button background={"transparent"} color={"white"}>
                      <IoCart
                        style={{ fontSize: "x-large", padding: "2%  " }}
                      />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="bottom-lower">
                <div className="search">
                  <InputGroup width={"90vw"}>
                    <Input
                      placeholder="Find your favorite products"
                      type="search"
                      variant={"none"}
                      borderRadius="20px"
                      paddingLeft={"20px"}
                      color={"black"}
                    />
                    <InputRightElement>
                      <FaSearch style={{ color: "grey" }} />
                    </InputRightElement>
                  </InputGroup>
                </div>
              </div>
            </div>

            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton color={"white"} />
                <DrawerHeader
                  fontSize={"16px"}
                  color="white"
                  fontWeight={"semibold"}
                  bgColor={"#e42529"}
                >
                  <Link
                    to={loggedUser ? "/ProfilePage" : "/login"}
                    onClick={onClose}
                  >
                    {loggedUser
                      ? loggedUser.name.split(" ")[0]
                      : "Login/Register"}
                  </Link>
                </DrawerHeader>

                <DrawerBody p={0} fontSize={"15px"}>
                  <Box bgColor="gray.100" p={2}>
                    Categories
                  </Box>

                  <Flex
                    alignItems={"center"}
                    justifyContent="space-between"
                    pl={3}
                    pr={3}
                    pt={2}
                    pb={2}
                    borderTop="1px solid #cecece"
                    borderBottom="1px solid #cecece"
                  >
                    <Flex alignItems={"center"} gap="10px">
                      <FaMobileAlt />
                      <Link to="/product" state={"Mobiles & Tablets"}>
                        <Text onClick={onClose}>Mobiles & Tablets</Text>
                      </Link>
                    </Flex>
                    <GoPlus />
                  </Flex>
                  <Flex
                    alignItems={"center"}
                    justifyContent="space-between"
                    pl={3}
                    pr={3}
                    pt={2}
                    pb={2}
                    borderTop="1px solid #cecece"
                    borderBottom="1px solid #cecece"
                  >
                    <Flex alignItems={"center"} gap="10px">
                      <RiComputerLine />
                      <Link to="/product" state={"Television"}>
                        <Text onClick={onClose}>Television</Text>
                      </Link>
                    </Flex>
                    <GoPlus />
                  </Flex>
                  <Flex
                    alignItems={"center"}
                    justifyContent="space-between"
                    pl={3}
                    pr={3}
                    pt={2}
                    pb={2}
                    borderTop="1px solid #cecece"
                    borderBottom="1px solid #cecece"
                  >
                    <Flex alignItems={"center"} gap="10px">
                      <FaHeadphones />
                      <Link to="/product" state={"Audio"}>
                        <Text onClick={onClose}>Audio</Text>
                      </Link>
                    </Flex>
                    <GoPlus />
                  </Flex>
                  <Flex
                    alignItems={"center"}
                    justifyContent="space-between"
                    pl={3}
                    pr={3}
                    pt={2}
                    pb={2}
                    borderTop="1px solid #cecece"
                    borderBottom="1px solid #cecece"
                  >
                    <Flex alignItems={"center"} gap="10px">
                      <GiPlug />
                      <Link to="/product" state={"Home Appliances"}>
                        <Text onClick={onClose}>Home Appliances</Text>
                      </Link>
                    </Flex>
                    <GoPlus />
                  </Flex>
                  <Flex
                    alignItems={"center"}
                    justifyContent="space-between"
                    pl={3}
                    pr={3}
                    pt={2}
                    pb={2}
                    borderTop="1px solid #cecece"
                    borderBottom="1px solid #cecece"
                  >
                    <Flex alignItems={"center"} gap="10px">
                      <MdComputer />
                      <Link to="/product" state={"Computer"}>
                        <Text onClick={onClose}>Computer</Text>
                      </Link>
                    </Flex>
                    <GoPlus />
                  </Flex>
                  <Flex
                    alignItems={"center"}
                    justifyContent="space-between"
                    pl={3}
                    pr={3}
                    pt={2}
                    pb={2}
                    borderTop="1px solid #cecece"
                    borderBottom="1px solid #cecece"
                  >
                    <Flex alignItems={"center"} gap="10px">
                      <BsCameraFill />
                      <Link to="/product" state={"Cameras"}>
                        <Text onClick={onClose}>Cameras</Text>
                      </Link>
                    </Flex>
                    <GoPlus />
                  </Flex>
                  <Flex
                    alignItems={"center"}
                    justifyContent="space-between"
                    pl={3}
                    pr={3}
                    pt={2}
                    pb={2}
                    borderTop="1px solid #cecece"
                    borderBottom="1px solid #cecece"
                  >
                    <Flex alignItems={"center"} gap="10px">
                      <ImSpoonKnife />
                      <Link to="/product" state={"Kitchen Appliances"}>
                        <Text onClick={onClose}>Kitchen Appliances</Text>
                      </Link>
                    </Flex>
                    <GoPlus />
                  </Flex>
                  <Flex
                    alignItems={"center"}
                    justifyContent="space-between"
                    pl={3}
                    pr={3}
                    pt={2}
                    pb={2}
                    borderTop="1px solid #cecece"
                    borderBottom="1px solid #cecece"
                  >
                    <Flex alignItems={"center"} gap="10px">
                      <FaBath />
                      <Link to="/product" state={"Personal Care"}>
                        <Text onClick={onClose}>Personal Care</Text>
                      </Link>
                    </Flex>
                    <GoPlus />
                  </Flex>
                  <Flex
                    alignItems={"center"}
                    justifyContent="space-between"
                    pl={3}
                    pr={3}
                    pt={2}
                    pb={2}
                    borderTop="1px solid #cecece"
                    borderBottom="1px solid #cecece"
                  >
                    <Flex alignItems={"center"} gap="10px">
                      <FaUsb />
                      <Link to="/product" state={"Accessories"}>
                        <Text onClick={onClose}>Accessories</Text>
                      </Link>
                    </Flex>
                    <GoPlus />
                  </Flex>
                  <Box bgColor="gray.100" p={2}>
                    Help Section
                  </Box>

                  <Flex
                    alignItems={"center"}
                    justifyContent="space-between"
                    pl={3}
                    pr={3}
                    pt={2}
                    pb={2}
                    borderTop="1px solid #cecece"
                    borderBottom="1px solid #cecece"
                  >
                    <Flex alignItems={"center"} gap="10px">
                      <FaShoppingCart />
                      <Text onClick={onClose}>Cart</Text>
                    </Flex>
                  </Flex>

                  <Flex
                    alignItems={"center"}
                    justifyContent="space-between"
                    pl={3}
                    pr={3}
                    pt={2}
                    pb={2}
                    borderTop="1px solid #cecece"
                    borderBottom="1px solid #cecece"
                  >
                    <Flex alignItems={"center"} gap="10px">
                      <MdLocationOn />
                      <Text onClick={onClose}>Find a Store</Text>
                    </Flex>
                  </Flex>

                  <Flex
                    alignItems={"center"}
                    justifyContent="space-between"
                    pl={3}
                    pr={3}
                    pt={2}
                    pb={2}
                    borderTop="1px solid #cecece"
                    borderBottom="1px solid #cecece"
                  >
                    <Flex alignItems={"center"} gap="10px">
                      <BsFillTelephoneFill />
                      <Text onClick={onClose}>Contact Us</Text>
                    </Flex>
                  </Flex>

                  <Flex
                    alignItems={"center"}
                    justifyContent="space-between"
                    pl={3}
                    pr={3}
                    pt={2}
                    pb={2}
                    borderTop="1px solid #cecece"
                    borderBottom="1px solid #cecece"
                  >
                    <Flex alignItems={"center"} gap="10px">
                      <BiQrScan />
                      <Text onClick={onClose}>Scanner</Text>
                    </Flex>
                  </Flex>

                  <Flex
                    alignItems={"center"}
                    justifyContent="space-between"
                    pl={3}
                    pr={3}
                    pt={2}
                    pb={2}
                    borderTop="1px solid #cecece"
                    borderBottom="1px solid #cecece"
                  >
                    <Flex alignItems={"center"} gap="10px">
                      <FaInfoCircle />
                      <Text onClick={onClose}>Buying Guide</Text>
                    </Flex>
                  </Flex>

                  <Flex
                    alignItems={"center"}
                    justifyContent="space-between"
                    pl={3}
                    pr={3}
                    pt={2}
                    pb={2}
                    borderTop="1px solid #cecece"
                    borderBottom="1px solid #cecece"
                  >
                    <Flex alignItems={"center"} gap="10px">
                      <FaSitemap />
                      <Text onClick={onClose}>Site Info</Text>
                    </Flex>
                    <GoPlus />
                  </Flex>

                  <Flex
                    alignItems={"center"}
                    justifyContent="space-between"
                    pl={3}
                    pr={3}
                    pt={2}
                    pb={2}
                    borderTop="1px solid #cecece"
                    borderBottom="1px solid #cecece"
                  >
                    <Flex alignItems={"center"} gap="10px">
                      <MdAccountCircle />
                      <Text
                        onClick={() => {
                          localStorage.removeItem("logged_user");
                          onClose();
                          setTrigger(!trigger);
                        }}
                      >
                        {loggedUser ? "Log out" : "Login"}
                      </Text>
                    </Flex>
                  </Flex>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </>
        )}

        {width > 800 && (
          <div className="navigations">
            {width > 1080
              ? Object.keys(dropdownData).map((item) => {
                  return (
                    <>
                      <div
                        style={{
                          display: "flex",
                          padding: "0.5%",
                        }}
                        onMouseEnter={() => {
                          setSelected(item);
                          setToDisplay(true);
                        }}
                        onMouseOver={() => {
                          setSelected(item);
                          setToDisplay(true);
                        }}
                        onMouseLeave={() => setToDisplay(false)}
                      >
                        <div>
                          <Link to={"/product"} state={item}>
                            {item}
                          </Link>
                        </div>
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
                })
              : Object.keys(dropdownData)
                  .filter((_, index) => [1, 2, 4, 5, 8].includes(index))
                  .map((item) => {
                    return (
                      <>
                        <Link to={"/product"} state={item}>
                          <div
                            style={{
                              display: "flex",
                              padding: "0.5%",
                            }}
                            onMouseEnter={() => {
                              setSelected(item);
                              setToDisplay(true);
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
                        </Link>
                      </>
                    );
                  })}
          </div>
        )}
      </div>
      {toDisplay && (
        <div
          className="parent-dropdown"
          onMouseOver={() => setToDisplay(true)}
          onMouseLeave={() => setToDisplay(false)}
        >
          <div className="dropdown">
            <div className="drop-up">
              {dropdownData[selected].slice(1, 10).map((key) => {
                return (
                  <Link
                    to="/product"
                    state={selected}
                    onClick={() => setToDisplay(false)}
                  >
                    <div onClick={() => setToDisplay(false)}>{key}</div>
                  </Link>
                );
              })}
            </div>
            <div className="drop-up">
              {dropdownData[selected].slice(11, 20).map((key) => {
                return (
                  <Link
                    to="/product"
                    state={selected}
                    onClick={() => setToDisplay(false)}
                  >
                    <div>{key}</div>
                  </Link>
                );
              })}
            </div>
            <div className="drop-up">
              {dropdownData[selected].slice(21, 30).map((key) => {
                return (
                  <Link
                    to="/product"
                    state={selected}
                    onClick={() => setToDisplay(false)}
                  >
                    <div>{key}</div>
                  </Link>
                );
              })}
            </div>
            <div className="drop-up">
              {dropdownData[selected].slice(31, 40).map((key) => {
                return (
                  <Link
                    to="/product"
                    state={selected}
                    onClick={() => setToDisplay(false)}
                  >
                    <div>{key}</div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
