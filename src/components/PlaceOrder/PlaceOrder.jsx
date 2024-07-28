import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  HStack,
  useToast,
} from "@chakra-ui/react";
import Address from "../Address/Address";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PlaceOrder({ toOpen, setOpen, trigger, setTrigger, amount, data }) {
  const uid = JSON.parse(localStorage.getItem("logged_user"))._id;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [addressDone, setAddressDone] = useState(false);
  const toast = useToast();
  async function finalizeOrder() {
    await axios
      .post("/completeorder", { id: uid, data })
      .then((res) => {
        toast({
          title: "Order Successfull",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setTrigger(!trigger);
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "Internal Server Error",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  }

  const handlerazorpay = (data) => {
    console.log("tanisha", data);
    const options = {
      key: "rzp_test_pM0vDUp05pvdwo",
      amount: data.amount,
      currency: "INR",
      name: "Reliance Checkout",
      description: "Pay to proceed",
      order_id: data.id,
      handler: function (response) {
        console.log(response, "Tanisha");
        finalizeOrder();
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  async function checkout(amt) {
    const response = await axios
      .post("/razorpay", { amt })
      .then((res) => {
        console.log(res.data, "Tanisha");
        handlerazorpay(res.data);
      })
      .catch((err) => console.log(err));
  }

  function handlePayment() {
    checkout(Math.floor(amount));
  }

  useEffect(() => {
    if (toOpen) {
      onOpen();
    }
    if (!toOpen) {
      onClose();
    }
  }, [toOpen]);

  return (
    <>
      <Modal
        isCentered
        isOpen={isOpen}
        onClose={() => {
          onClose();
          setOpen(false);
        }}
      >
        <ModalOverlay
          bg="none"
          backdropFilter="auto"
          backdropInvert="10%"
          backdropBlur="2px"
        />
        <ModalContent>
          <ModalHeader color={"#003380"}>Please Select an Address</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Address
              calledBy={true}
              handlePayment={handlePayment}
              setOpen={setOpen}
            />
          </ModalBody>
          <ModalFooter>
            <HStack spacing={2}>
              <Button
                onClick={() => {
                  onClose();
                  setOpen(false);
                }}
                bg={"#003380"}
                color={"white"}
                _hover={{ color: "black", bg: "grey" }}
              >
                Close
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default PlaceOrder;
