import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Text,
  Button,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Stack,
  ModalFooter,
  Divider,
  ButtonGroup,
  Image,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import PulseLoader from "../PulseLoader/PulseLoader";
import axios from "axios";

function MyOrder() {
  const user = JSON.parse(localStorage.getItem("logged_user"));
  const [trigger, setTrigger] = useState(true);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Function to fetch data from backend
    const fetchData = async () => {
      try {
        setLoading(true);
        await axios
          .post("/getallorders", { id: user._id })
          .then((res) => {
            console.log(res.data, "hhhh");
            setData(res.data.data);
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

  if (loading) {
    return <PulseLoader />;
  }
  return (
    <>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        {data.map((item) => {
          return (
            <Card>
              <CardHeader>
                <Heading size="sm">
                  <span style={{ color: "#003380" }}>Order ID </span>"{item._id}
                  "{" "}
                </Heading>
              </CardHeader>
              <CardBody>
                <Text>Click Below for More Details</Text>
              </CardBody>
              <CardFooter>
                <Button
                  onClick={() => {
                    setItem(item.items);
                    onOpen();
                  }}
                >
                  View here
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </SimpleGrid>

      {data && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Products</ModalHeader>
            <ModalCloseButton />

            {item && (
              <ModalBody>
                <div style={{ height: "57vh", overflowY: "scroll" }}>
                  {item.map((prod) => {
                    return (
                      <Card maxW="sm">
                        <CardBody>
                          <Image
                            src={prod.img}
                            alt="Green double couch with wooden legs"
                            borderRadius="lg"
                          />
                          <Stack mt="6" spacing="3">
                            <Heading size="md">
                              {prod.name.substr(0, 20)}...
                            </Heading>
                            <Text color="blue.600" fontSize="2xl">
                              ₹{prod.price}
                            </Text>
                          </Stack>
                        </CardBody>
                        <Divider />
                      </Card>
                    );
                  })}
                </div>
              </ModalBody>
            )}

            <ModalFooter>
              <Button
                bg={"#003380"}
                color={"white"}
                _hover={{ color: "black", bg: "grey" }}
                onClick={onClose}
              >
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}

export default MyOrder;
