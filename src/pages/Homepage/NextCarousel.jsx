import React from "react";
import { Box, IconButton, Flex, useBreakpointValue } from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import "./Homepage.css";
import useWindowWidth from "../../components/useWindoWidth/useWindowWidth";
import { useNavigate } from "react-router-dom";

const NextCarousel = ({ items, link }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerSlide = useBreakpointValue({ base: 1, sm: 2, md: 3, lg: 4 });
  const totalSlides = Math.ceil(items.length / itemsPerSlide);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
  });

  const [imgHover, setImgHover] = useState({
    itemid: "",
    status: false,
  });

  function getDiscountPrice(str) {
    const regex = /₹([\d,]+)/;
    const match = str.match(regex);
    if (match) {
      const amount = match[1].replace(/,/g, "");
      return amount;
    }
    return null;
  }

  const width = useWindowWidth();
  const navigate = useNavigate();

  return (
    <Box
      position="relative"
      width="full"
      boxShadow="lg"
      paddingBottom={"1%"}
      overflow="hidden"
      {...swipeHandlers}
    >
      <Flex justify="center" align="center">
        <IconButton
          aria-label="Previous Slide"
          icon={<BiLeftArrowAlt style={{ fontSize: "x-large" }} />}
          onClick={handlePrev}
          zIndex="10"
          height={"20vh"}
          background={"#d3cfcf"}
          borderRadius={0}
          mr={2} // Margin right to create space between the button and carousel
        />
        <Box flex="1" overflow="hidden" position="relative">
          <Flex
            transition="transform 0.5s"
            transform={`translateX(-${(currentIndex * 100) / itemsPerSlide}%)`}
            onClick={() => {
              navigate("/product", { state: link });
            }}
          >
            {items.map((item, index) => (
              <Box
                key={index}
                flex="0 0 auto"
                width={`${100 / itemsPerSlide}%`}
              >
                <div className="card-body" key={item.id}>
                  {width > 1000 && (
                    <div className="card-teaser">
                      <p>
                        <span
                          style={{
                            background: `${
                              item.teaserType.length !== 0 ? "#007fad" : ""
                            }`,
                          }}
                        >
                          {item.teaserType.substr(0, 35)}
                        </span>
                      </p>
                    </div>
                  )}
                  <div
                    className="card-img"
                    style={{
                      backgroundImage: `url("https://www.reliancedigital.in${item.imageUrl}")`,
                      height: "20vh",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "60% 120%",
                      backgroundPosition: "center",
                      transition: "transform 0.2s ease-in-out",
                      transform: `${
                        imgHover.status && imgHover.itemid === item.imageUrl
                          ? "scale(1.038)"
                          : "none"
                      }`,
                    }}
                    onMouseEnter={() => {
                      setImgHover((prev) => ({
                        ...prev,
                        status: true,
                        itemid: item.imageUrl,
                      }));
                    }}
                    onMouseLeave={() => {
                      setImgHover((prev) => ({
                        ...prev,
                        status: false,
                        itemid: "",
                      }));
                    }}
                  ></div>
                  <div className="card-name">{item.name.substr(0, 50)}</div>
                  <div className="card-price">
                    <p>
                      Deal Price:{" "}
                      <span
                        style={{
                          color: "black",
                          fontWeight: "500",
                          fontSize: "17px",
                        }}
                      >
                        ₹{item.mrp}
                      </span>
                    </p>
                    <p>
                      M.R.P:{" "}
                      <span style={{ textDecoration: "line-through" }}>
                        ₹
                        {parseInt(item.mrp) +
                          parseInt(getDiscountPrice(item.discount))}
                      </span>
                    </p>
                    <p>You Save: {item.discount}</p>
                  </div>
                </div>
              </Box>
            ))}
          </Flex>
        </Box>
        <IconButton
          aria-label="Next Slide"
          icon={<BiRightArrowAlt style={{ fontSize: "x-large" }} />}
          onClick={handleNext}
          zIndex="10"
          height={"20vh"}
          background={"#d3cfcf"}
          borderRadius={0}
          ml={2} // Margin left to create space between the button and carousel
        />
      </Flex>
    </Box>
  );
};

export default NextCarousel;
