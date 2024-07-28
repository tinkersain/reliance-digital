import { Fragment, useEffect, useState } from "react";
import {
  chakra,
  Box,
  Stack,
  VStack,
  HStack,
  Flex,
  Text,
  Image,
  Container,
  Icon,
  useToast,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { BsTelephoneX } from "react-icons/bs";
import PulseLoader from "../PulseLoader/PulseLoader";
import axios from "axios";
import { FaHeart } from "react-icons/fa";

const Wishlist = () => {
  const user = JSON.parse(localStorage.getItem("logged_user"));
  const [loading, setLoading] = useState(true);
  const [productsList, setProductsList] = useState(null);
  const [trigger, setTrigger] = useState(true);
  const toast = useToast();

  useEffect(() => {
    // Function to fetch data from backend
    const fetchData = async () => {
      try {
        setLoading(true);
        await axios
          .post("/wishlistdata", { id: user._id })
          .then((res) => {
            setProductsList(res.data);
            setLoading(false);
          })
          .catch((err) => console.log(err));
      } catch (err) {
        console.error("Error fetching data:", err);
        setLoading(false);
      }
    };

    fetchData();
  }, [trigger]);

  const handleWishlistRemove = async (id) => {
    console.log(id);
    await axios
      .post("/removeWishlistItem", { uid: user._id, iid: id })
      .then((res) => {
        toast({
          title: "Item Removed",
          description: "We've removed the item from your Wishlist.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setTrigger(!trigger);
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "something went wrong",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  return (
    <>
      {loading ? (
        <PulseLoader />
      ) : (
        <div style={{ overflowY: "scroll", height: "100vh" }}>
          <Container maxW="7xl" p={{ base: 5, md: 12 }} margin="0 auto">
            {productsList.length !== 0 ? (
              <VStack spacing={4}>
                {productsList.map((product, index) => (
                  <Stack
                    key={index}
                    spacing={{ base: 0, md: 4 }}
                    direction={{ base: "column", md: "row" }}
                    border="1px solid"
                    borderColor="gray.400"
                    p={2}
                    rounded="md"
                    w={{ base: "auto", md: "2xl" }}
                    overflow="hidden"
                    pos="relative"
                  >
                    <Flex
                      alignItems="center"
                      p={1}
                      bg="red.400"
                      pos="absolute"
                      fontSize="xs"
                      fontWeight="500"
                      color="white"
                      top={0}
                      left={0}
                    >
                      <Text>Discount: {product.discount}</Text> &nbsp;{" "}
                      <Icon as={AiOutlineExclamationCircle} h={4} w={4} />
                    </Flex>

                    <Flex ml="0 !important">
                      <Image
                        rounded="md"
                        w={{ base: "100%", md: "18rem" }}
                        h="auto"
                        objectFit="cover"
                        src={product.img}
                        alt="product image"
                      />
                    </Flex>
                    <Stack
                      direction="column"
                      spacing={2}
                      w="100%"
                      mt={{ base: "5px !important", sm: 0 }}
                    >
                      <Flex justifyContent="space-between">
                        <chakra.h3
                          fontSize={{ base: "lg", md: "xl" }}
                          fontWeight="bold"
                          textOverflow="ellipsis"
                          overflow="hidden"
                        >
                          {product.name.substr(0, 50)}...
                        </chakra.h3>
                        <chakra.h3
                          fontSize={{ base: "lg", md: "xl" }}
                          fontWeight="bold"
                          color={"#e42929"}
                        >
                          ₹{product.price}
                        </chakra.h3>
                      </Flex>
                      <Box>
                        <Text
                          fontSize="lg"
                          fontWeight="500"
                          textDecoration="line-through"
                        >
                          ₹{product.mrp}
                        </Text>
                      </Box>
                      <Flex alignItems="center" color="gray.500">
                        <Fragment>
                          <Text fontSize={{ base: "sm", sm: "md" }}>
                            {product.brand}
                          </Text>
                        </Fragment>
                      </Flex>
                      <Stack
                        direction={{ base: "column-reverse", sm: "row" }}
                        justifyContent="flex-end"
                        alignItems={{ base: "flex-start", sm: "center" }}
                      >
                        <Stack direction="row" spacing={1} mb="0 !important">
                          <IconButton>
                            <Icon
                              as={FaHeart}
                              w={4}
                              h={4}
                              style={{ color: "#e42929" }}
                            />
                          </IconButton>
                          <IconButton
                            spacing={2}
                            bg="red.500"
                            color="white"
                            onClick={() => handleWishlistRemove(product._id)}
                          >
                            <Icon as={BsTelephoneX} w={4} h={4} />
                            <Text fontSize="sm">Remove</Text>
                          </IconButton>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Stack>
                ))}
              </VStack>
            ) : (
              <>
                <chakra.h1
                  fontSize="4xl"
                  lineHeight={1.2}
                  fontWeight="bold"
                  color={"#e42929"}
                >
                  Wishlist is Empty
                </chakra.h1>
                <Image
                  src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg?t=st=1722196983~exp=1722200583~hmac=aafb78833b65b558e35d9defc42921d4bd07ab1cee163997cfadd0ef2b850af8&w=1060"
                  alt="empty"
                  width={500}
                />
              </>
            )}
          </Container>
        </div>
      )}
    </>
  );
};

const IconButton = ({ children, ...props }) => {
  return (
    <HStack
      cursor="pointer"
      border="1px solid"
      borderColor="gray.300"
      px={2}
      py="0.15rem"
      alignItems="center"
      rounded="sm"
      spacing={2}
      {...props}
    >
      {children}
    </HStack>
  );
};

export default Wishlist;
