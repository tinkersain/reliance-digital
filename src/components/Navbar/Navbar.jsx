import React, { useState } from "react";
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
  MdOutlineSms,
} from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { ImSpoonKnife } from "react-icons/im";
import { BiQrScan } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa";
import dropdownData from "./dropdownData";
import "./Navbar.css";
import useWindowWidth from "../useWindoWidth/useWindowWidth";
import { Link } from "react-router-dom";

function Navbar() {
  const [selected, setSelected] = useState("Mobiles & Tablets");
  const [toDisplay, setToDisplay] = useState(false);
  const width = useWindowWidth();
  const { isOpen, onOpen, onClose } = useDisclosure();
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
            <div className="logo">
              <Image
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
                  <p>Select your Pin Code</p>
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      borderLeft: "1px solid white",
                    }}
                  >
                    <IoCart style={{ fontSize: "x-large" }} />
                    <p>Cart</p>
                  </p>
                  <Link to="/login">
                    <p
                      style={{
                        display: "flex",
                        alignItems: "center",
                        borderLeft: "1px solid white",
                      }}
                    >
                      <IoPerson style={{ fontSize: "x-large" }} />

                      <p>Login</p>
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
                  <Image
                    src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg"
                    alt="logo"
                    width={150}
                  />
                </div>
                <div className="options">
                  <Button background={"transparent"} color={"white"}>
                    <IoCart style={{ fontSize: "x-large", padding: "2%  " }} />
                  </Button>
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
                  Login / Register
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
                      <Link to="">
                        {" "}
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
                      <Link to="">
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
                      <Link to="">
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
                      <Link to="">
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
                      <Link to="">
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
                      <Link to="">
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
                      <Link to="">
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
                      <Link to="">
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
                      <Text onClick={onClose}>Accessories</Text>
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
                      <Text onClick={onClose}>Login</Text>
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
                  .slice(0, 5)
                  .map((item) => {
                    return (
                      <>
                        <Link to={"/product"}>
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
                        </Link>
                      </>
                    );
                  })}
          </div>
        )}
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
