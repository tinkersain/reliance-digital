import {
  Box,
  Flex,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import styleProduct from "./prod.module.css";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const ProductInfo = () => {
  const user = JSON.parse(localStorage.getItem("logged_user"));
  const navigate = useNavigate();
  const location = useLocation();
  if (!location.state) {
    return <Navigate to={"/"} />;
  }
  const toast = useToast();
  const data = location.state;

  const handleAddtoCart = async (toNaviagte) => {
    if (!user) {
      toast({
        title: "Please Login First",
        description: "Please Login to start adding in your cart",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      navigate("/login", { state: "/productDetails" });
    } else {
      console.log(data);
      await axios
        .post(`/addtocart/${user._id}`, { data })
        .then((res) => {
          toast({
            title: "Item Added to Cart.",
            description: "We added this item in your cart.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        })
        .catch((err) => {
          console.log(err);
          toast({
            title: "Internal Server Error",
            description: "Something Went Wrong",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        });
      toNaviagte ? navigate("/cart") : "";
    }
  };

  return (
    <>
      <Box className={styleProduct.main} mt={12} mb={12}>
        <Box className={styleProduct.box1}>
          <Image src={data.img} alt="Product-image" p={12} />
        </Box>
        <Box className={styleProduct.box2}>
          <Box className={styleProduct.name}>
            <Heading as="h5" className={styleProduct.heading} size="lg">
              {data.name}
            </Heading>
          </Box>
          <Box className={styleProduct.infobox} p={4}>
            <Box className={styleProduct.info1}>
              <Heading
                as="h5"
                fontSize="lg"
                textAlign={"left"}
                fontWeight="700"
              >
                Key Features
              </Heading>
              <UnorderedList color="#3a3a3a" fontSize="md">
                <ListItem> Definitive Quality </ListItem>
                <ListItem> High-Definition Clarity </ListItem>
                <ListItem> Transmits Original Colours </ListItem>
                <ListItem> Clear Touch' Easy Clean </ListItem>
              </UnorderedList>
              <Heading
                as="h5"
                fontSize={{ base: "sm", lg: "md" }}
                textAlign={"left"}
                fontWeight="700"
              >
                Return Policy
              </Heading>
              <UnorderedList color="#3a3a3a" fontSize="md">
                <ListItem>
                  {" "}
                  Items are eligible for return within 7 Days of Delivery.{" "}
                </ListItem>
                <ListItem>
                  {" "}
                  All accessories, product & packaging need to be returned in
                  original condition.{" "}
                </ListItem>
              </UnorderedList>
              <Heading as="h5" size="sm" textAlign={"left"} fontWeight="500">
                Got Feedback to share on this page?
              </Heading>
            </Box>
            <Box className={styleProduct.info2}>
              <Heading
                size={{ base: "md", lg: "lg" }}
                textAlign={"left"}
                fontWeight="500"
              >
                ₹{data.price}
              </Heading>
              <Text
                size="xs"
                textAlign={"left"}
                fontWeight="500"
                className={styleProduct.mrp}
              >
                MRP: {data.mrp}{" "}
                <span className={styleProduct.inc}>
                  {" "}
                  (Inclusive of all taxes){" "}
                </span>
              </Text>
              <Text
                size="xs"
                textAlign={"left"}
                fontWeight="500"
                className={styleProduct.discount}
              >
                You Save: {data.discount}
              </Text>
              <Heading as="h3" size={{ base: "xs", lg: "sm" }}>
                FREE Shipping!
              </Heading>
              <Text className={styleProduct.lines}>
                {" "}
                *Delivery assurance is subject to our delivery locations staying
                open as per govt. regulations{" "}
              </Text>
              <div gap="10px" className={styleProduct.butbox}>
                <button
                  data-cy="product-add-item-to-cart-button"
                  onClick={() => handleAddtoCart(false)}
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => {
                    handleAddtoCart(true);
                  }}
                >
                  {" "}
                  BUY NOW{" "}
                </button>
              </div>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProductInfo;
