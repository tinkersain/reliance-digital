import React, { useEffect, useState } from "react";
import "./Cart.css";
import { FaPlus } from "react-icons/fa";
import { Box, Button, Image, Text, useToast } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

const CartItem = ({ product, index, handleCartRemove }) => {
  const { name, img, price, mrp, discount, id } = product;

  return (
    <div>
      <div key={id} className="cart-info-box">
        <div className="product-box">
          <div>
            <img src={img} alt="Product images" className="cart-image" />
          </div>
          <div>
            <h3>{name}</h3>
            <h5>
              <FaPlus size="12" className="add-logo" />
              <span> RECOMMENDED SERVICES/WARRANTY </span>
            </h5>
          </div>
          <div id="price-section">
            <h2> ₹{price} </h2>
            <h2 id="price-strike">
              const M.R.P:
              <i style={{ textDecoration: "line-through" }}>{mrp}</i>
              <span> Inclusive of all taxes </span>
            </h2>
            <h2 id="cart-shipping"> Free Shipping </h2>
            <h2 id="cart-delivery">
              <img
                src="https://www.reliancedigital.in/build/client/images/standard_delivery_icon.png"
                width="24px"
                alt="truck"
              />
              Delivere by: 22-22-2222
            </h2>
            <h2 id="govt-assurance">
              *Delivery assurance is subject to our delivery locations staying
              open as per govt. regulations
            </h2>
          </div>
        </div>
        <div className="cart-buttons">
          <button onClick={() => handleCartRemove(index)}>Remove</button>

          <button> Move to wishlist </button>
        </div>
      </div>
    </div>
  );
};

const EmptyCart = () => {
  return (
    <div>
      <Box display="flex" flexDirection={"column"} alignItems="center">
        <Image
          src="https://cdn-icons-png.flaticon.com/512/13637/13637462.png"
          alt="cart"
          maxW={"20vw"}
        />
        <Text fontSize={"25px"} pt={"1%"}>
          Your Shopping Cart is Empty
        </Text>
        <Link to="/">
          <Button
            colorScheme={"none"}
            borderRadius={0}
            mt={12}
            mb={20}
            bgColor={"#e42929"}
            color="white"
          >
            CONTINUE SHOPPING
          </Button>
        </Link>
      </Box>
    </div>
  );
};

function Cart() {
  const toast = useToast();
  const [data, setData] = useState(JSON.parse(localStorage.getItem("cart")));
  const [trigger, setTrigger] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("cart")));
    console.log("new");
  }, [trigger]);

  const handleCartRemove = async (index) => {
    console.log(index);
    setData(data.splice(index, 1));
    localStorage.setItem("cart", JSON.stringify(data));
    setTrigger(!trigger);
    toast({
      title: "Item Removed",
      description: "We've removed the item from your cart.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  function calculateTotalPrice() {
    let total = 0;
    for (const k in data) {
      const price = Number(data[k].price.replace(/,/g, "")); // Remove commas and convert to number
      total += price;
    }
    return total;
  }

  const handlePlaceOrder = () => {
    const login = localStorage.getItem("logged_user");
    if (!login) {
      toast({
        title: "Please Login first to continue",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      navigate("/login", { state: true });
    } else {
      toast({
        title: "Order Successfully Placed",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      localStorage.setItem("cart", JSON.stringify([]));
      setTrigger(!trigger);
    }
  };

  return (
    <>
      {data.length !== 0 ? (
        <div className="cart-container">
          <div>
            {data.map((product, index) => {
              return (
                <CartItem
                  product={product}
                  index={index}
                  handleCartRemove={handleCartRemove}
                />
              );
            })}
          </div>
          <div className="payment-checkout">
            <button id="checkout-btn" onClick={handlePlaceOrder}>
              Place Order{" "}
            </button>
            <div className="amount">
              <div id="coupon">
                <input type="text" placeholder="Coupon Code" />
                <button> APPLY </button>
              </div>
              <hr />
              <div id="price-final">
                <h4> PRICE DETAILS </h4>
                <div>
                  <h4>Price {data.length} Items </h4>
                  <h4> ₹{calculateTotalPrice()}</h4>
                </div>
                <div>
                  <h4>Delivery Charges</h4>
                  <h4> {0.01 * calculateTotalPrice()}</h4>
                </div>
                <hr />
                <div className="payment">
                  <h5> AMOUNT PAYABLE </h5>
                  <h5>
                    ₹{calculateTotalPrice() + 0.01 * calculateTotalPrice()}
                  </h5>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </>
  );
}

export default Cart;
