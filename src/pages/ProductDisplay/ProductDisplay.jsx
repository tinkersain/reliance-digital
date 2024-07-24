import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./ProductDisplay.css";
import {
  Card,
  CardBody,
  CardFooter,
  Text,
  Button,
  Divider,
  Stack,
  Image,
  Badge,
  useToast,
} from "@chakra-ui/react";
import { BsHeart } from "react-icons/bs";
import { Link, Navigate, useLocation } from "react-router-dom";
import { mobiledata } from "../../assets/data/mobilesAndTablets";

import Filters from "../../components/Filters/Filters";
import { computersdata } from "../../assets/data/computers";
import { accessoriesdata } from "../../assets/data/accessories";
import { allproductdata } from "../../assets/data/allproduct";
import { camerasdata } from "../../assets/data/cameras";
import { headphonesdata } from "../../assets/data/headphones";
import { homeAppliancesdata } from "../../assets/data/homeAppliances";
import { kitchendata } from "../../assets/data/kitchen";
import { personaldata } from "../../assets/data/personalcare";
import { televisondata } from "../../assets/data/televison";

const displayData = {
  "Mobiles & Tablets": mobiledata,
  Televisions: televisondata,
  Audio: headphonesdata,
  "Home Appliances": homeAppliancesdata,
  Computers: computersdata,
  Cameras: camerasdata,
  "Kitchen Appliances": kitchendata,
  "Personal Care": personaldata,
  Accessories: accessoriesdata,
};

const ProductDisplay = () => {
  const location = useLocation();

  if (!location.state) {
    return <Navigate to={"/"} />;
  }

  const [data, setData] = useState(displayData[location.state]);
  const [skeletonLoading, setSkeletonLoading] = useState(false);

  useEffect(() => {
    setData(displayData[location.state]);
  }, [location]);

  const toast = useToast();

  return (
    <>
      {/* <div style={{ marginBottom: "20px" }}>
        <AboveCarousel />
      </div> */}

      <div></div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div id="filters">
          <h1
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              fontFamily: "sans-serif",
              padding: "10px",
            }}
          >
            Filters
          </h1>
          <Filters data={data} />
        </div>
        <div id="titleBar">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              height: "80px",
              alignItems: "center",
              marginBottom: "5px",
              padding: "10px",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  fontFamily: "sans-serif",
                }}
              >
                {location.state}
              </h1>
              <span>(Showing 1-{data.length} results of total Products )</span>
            </div>
            <div id="sortButtonContainer">
              <b> Sort By :</b> <button id="sortingButton">Relevance</button>
              <button id="sortingButton">Low to High</button>
              <button id="sortingButton">High to Low</button>
            </div>
          </div>

          {skeletonLoading ? (
            <div id="productCards">
              <div>
                <Skeleton highlightColor="" height={140} />
                <h1>
                  <Skeleton />
                </h1>
                <h1>
                  <Skeleton />
                </h1>
                <p>
                  <Skeleton />
                </p>
                <h1>
                  <Skeleton height={50} />
                </h1>
              </div>
              <div>
                <Skeleton height={140} />
                <h1>
                  <Skeleton />
                </h1>
                <h1>
                  <Skeleton />
                </h1>
                <p>
                  <Skeleton />
                </p>
                <h1>
                  <Skeleton height={50} />
                </h1>
              </div>
              <div>
                <Skeleton height={140} />
                <h1>
                  <Skeleton />
                </h1>
                <h1>
                  <Skeleton />
                </h1>
                <p>
                  <Skeleton />
                </p>
                <h1>
                  <Skeleton height={50} />
                </h1>
              </div>
              <div>
                <Skeleton height={140} />
                <h1>
                  <Skeleton />
                </h1>
                <h1>
                  <Skeleton />
                </h1>
                <p>
                  <Skeleton />
                </p>
                <h1>
                  <Skeleton height={50} />
                </h1>
              </div>
              <div>
                <Skeleton height={140} />
                <h1>
                  <Skeleton />
                </h1>
                <h1>
                  <Skeleton />
                </h1>
                <p>
                  <Skeleton />
                </p>
                <h1>
                  <Skeleton height={50} />
                </h1>
              </div>
              <div>
                <Skeleton height={140} />
                <h1>
                  <Skeleton />
                </h1>
                <h1>
                  <Skeleton />
                </h1>
                <p>
                  <Skeleton />
                </p>
                <h1>
                  <Skeleton height={50} />
                </h1>
              </div>
              <div>
                <Skeleton height={140} />
                <h1>
                  <Skeleton />
                </h1>
                <h1>
                  <Skeleton />
                </h1>
                <p>
                  <Skeleton />
                </p>
                <h1>
                  <Skeleton height={50} />
                </h1>
              </div>
              <div>
                <Skeleton height={140} />
                <h1>
                  <Skeleton />
                </h1>
                <h1>
                  <Skeleton />
                </h1>
                <p>
                  <Skeleton />
                </p>
                <h1>
                  <Skeleton height={50} />
                </h1>
              </div>
              <div>
                <Skeleton height={140} />
                <h1>
                  <Skeleton />
                </h1>
                <h1>
                  <Skeleton />
                </h1>
                <p>
                  <Skeleton />
                </p>
                <h1>
                  <Skeleton height={50} />
                </h1>
              </div>
              <div>
                <Skeleton height={140} />
                <h1>
                  <Skeleton />
                </h1>
                <h1>
                  <Skeleton />
                </h1>
                <p>
                  <Skeleton />
                </p>
                <h1>
                  <Skeleton height={50} />
                </h1>
              </div>
              <div>
                <Skeleton height={140} />
                <h1>
                  <Skeleton />
                </h1>
                <h1>
                  <Skeleton />
                </h1>
                <p>
                  <Skeleton />
                </p>
                <h1>
                  <Skeleton height={50} />
                </h1>
              </div>
              <div>
                <Skeleton height={140} />
                <h1>
                  <Skeleton />
                </h1>
                <h1>
                  <Skeleton />
                </h1>
                <p>
                  <Skeleton />
                </p>
                <h1>
                  <Skeleton height={50} />
                </h1>
              </div>
            </div>
          ) : (
            <div id="productCards">
              {data.map((product) => (
                <Link to={"/productDetails"} state={product}>
                  <Card
                    variant="outline"
                    key={product.id}
                    id="Productcard"
                    _hover={{
                      boxShadow:
                        "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
                    }}
                  >
                    <CardBody id="productBody">
                      <Image
                        mt="-5"
                        src={product.img}
                        alt="Product image"
                        borderRadius="lg"
                      />

                      <Stack spacing="1">
                        <Text
                          color="blue.700"
                          fontSize={"medium"}
                          _hover={{ color: "red" }}
                          id="cardTitle"
                        >
                          {product.name}
                        </Text>
                        <Stack direction="row">
                          <Text
                            color="gray.600"
                            fontSize="smaller"
                            fontWeight={"bold"}
                          >
                            {" "}
                            <span>&#8377;</span>
                            {product.mrp}
                          </Text>
                          <Text
                            color="gray.500"
                            fontSize="smaller"
                            fontWeight={"bold"}
                          >
                            <s>
                              <span>&#8377;</span>
                              {product.mrp}{" "}
                            </s>{" "}
                          </Text>
                          <Text
                            color="green.600"
                            fontSize="x-small"
                            fontWeight={"bold"}
                          >
                            {" "}
                            <span>&#8377;</span>
                            {product.discount}
                          </Text>
                        </Stack>
                        <Stack direction="row">
                          <Badge
                            variant="outline"
                            colorScheme="green"
                            borderRadius={"15px"}
                            padding={"0px 10px 0px 10px"}
                          >
                            OFFERS AVAILABLE
                          </Badge>
                          <Badge
                            variant="outline"
                            colorScheme="green"
                            borderRadius={"15px"}
                            padding={"0px 10px 0px 10px"}
                          >
                            CASHBACK
                          </Badge>
                        </Stack>
                      </Stack>
                    </CardBody>
                    <Divider />
                    <br />
                    <CardFooter
                      justify="space-between"
                      alignItems={"center"}
                      height={"20px"}
                      mt="-4"
                    >
                      <Button flex="1" variant="ghost">
                        {
                          <Stack
                            direction="row"
                            align={"center"}
                            fontWeight={""}
                          >
                            <input
                              type="checkbox"
                              name="compare-btn"
                              id="compare-btn"
                            />
                            <label>Compare</label>
                          </Stack>
                        }
                      </Button>
                      <Button flex="1" variant="ghost" leftIcon={<BsHeart />}>
                        Wishlist
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDisplay;
