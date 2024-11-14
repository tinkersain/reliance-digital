const express = require("express");
const cors = require("cors");
const { mongoose } = require("mongoose");
require("dotenv").config();
const bcrypt = require("bcryptjs");
const { error } = require("console");
const MONGO_URL = process.env.MONGO_URL;
const PUBLIC_URL = process.env.PUBLIC_URL;
const PORT = 8080;
const Razorpay = require("razorpay");
const UserModel = require("./Schema/UserModel");
const CartModel = require("./Schema/Cart");
const WishlistModel = require("./Schema/Wishlist");
const OrderModel = require("./Schema/Orders");

const app = express();
app.use(express.json());
app.use(
  cors({
    methods: "GET,POST,PATCH,DELETE,OPTIONS",
    optionsSuccessStatus: 200,
    origin: PUBLIC_URL,
    credentials: true,
  })
);

// Function to hash a password
async function hashPassword(plainTextPassword) {
  const saltRounds = 10; // Cost factor, higher is more secure but slower
  try {
    const salt = await bcrypt.genSalt(saltRounds); // Generate a salt
    const hashedPassword = await bcrypt.hash(plainTextPassword, salt); // Hash the password with the salt
    return hashedPassword;
  } catch (error) {
    console.error("Error hashing password:", error);
    throw error;
  }
}

// Function to verify a password
async function verifyPassword(plainTextPassword, hashedPassword) {
  try {
    const match = await bcrypt.compare(plainTextPassword, hashedPassword); // Compare the passwords
    return match;
  } catch (error) {
    console.error("Error verifying password:", error);
    throw error;
  }
}

mongoose.set("strictQuery", true);

//Define the route
app.get("/", async (req, res) => {
  await mongoose.connect(MONGO_URL);
  console.log("connected");
  res.status(200).json("Hello");
});

app.post("/signup", async (req, res) => {
  await mongoose.connect(MONGO_URL);
  const data = req.body.userData;
  console.log(data);
  if (data) {
    try {
      const existingUser = await UserModel.findOne({ email: data.email });
      if (existingUser) {
        res.status(400).json("User already Exists");
      } else {
        const newUser = await UserModel.create({
          name: data.name,
          mobile: data.mobile,
          email: data.email,
          password: await hashPassword(data.password),
          gender: data.gender,
          address: "",
          dob: "",
        });
        if (newUser) {
          console.log(newUser);
          const sendData = {
            name: newUser.name,
            phone: newUser.mobile,
            email: newUser.email,
            gender: newUser.gender,
            address: newUser.address,
            dob: newUser.dob,
            _id: newUser._id,
          };
          const newCart = await CartModel.create({
            userId: newUser._id,
            items: [],
          });
          if (newCart) {
            const newWishlist = await WishlistModel.create({
              userId: newUser._id,
              items: [],
            });
            if (newWishlist) {
              res
                .status(200)
                .json({ message: "User Created Successfully", data: sendData });
            } else {
              res.status(300).json("Inernal Server Error");
            }
          } else {
            res.status(300).json("Inernal Server Error");
          }
        } else {
          res.status(300).json("Inernal Server Error");
        }
      }
    } catch (err) {
      res.status(300).json("Inernal Server Error");
    }
  } else {
    res.status(500).json({ message: "Data Not Found", successStatus: false });
  }
});

app.post("/login", async (req, res) => {
  await mongoose.connect(MONGO_URL);
  const { email, password } = req.body.sendData;
  if (email.length !== 0 && password.length !== 0) {
    try {
      const user = await UserModel.findOne({ email: email });
      if (user) {
        if (verifyPassword(password, user.password)) {
          const sendData = {
            name: user.name,
            phone: user.mobile,
            email: user.email,
            gender: user.gender,
            address: user.address,
            dob: user.dob,
            _id: user._id,
          };
          res
            .status(200)
            .json({ message: "Signin Successfull", data: sendData });
        } else {
          res.status(400).json("Invalid Password");
        }
      } else {
        res.status(404).json("User not found");
      }
    } catch (err) {
      res.status(500).json("Internal Server Error");
    }
  } else {
    res.status(500).json("Internal Server Error");
  }
});

app.post("/updateProfile", async (req, res) => {
  await mongoose.connect(MONGO_URL);
  const data = req.body;
  if (data) {
    try {
      const user = await UserModel.findByIdAndUpdate(
        data.id,
        {
          name: data.name,
          dob: data.dob,
          mobile: data.mobile,
        },
        { new: true, runValidators: true }
      );

      if (user) {
        res.status(200).json({ message: "Updated Successfully", data: user });
      } else {
        res.status(404).json("User not found");
      }
    } catch (err) {
      console.log(err);
      res.status(500).json("Internal Server Error");
    }
  } else {
    res.status(500).json("Internal Server Error");
  }
});

app.post("/addtocart/:id", async (req, res) => {
  const id = req.params.id;
  const data = req.body.data;
  delete data.id;
  console.log(data);
  console.log(id);
  if (id) {
    try {
      const userCart = await CartModel.findOneAndUpdate(
        { userId: id },
        { $push: { items: data } },
        { new: true }
      );
      if (userCart) {
        res.status(200).json("Item Added to cart");
      } else {
        res.status(500).json("Item cannot be added to cart");
      }
    } catch (err) {
      console.log(err);
      res.status(500).json("Internal Server Error");
    }
  } else {
    res.status(500).json("Internal Server Error");
  }
});

app.post("/cartdata", async (req, res) => {
  await mongoose.connect(MONGO_URL);
  const id = req.body.id;
  console.log(id);
  if (id) {
    try {
      const cart = await CartModel.findOne({ userId: id });
      if (cart) {
        res.status(200).json(cart.items);
      } else {
        res.status(500).json("Internal Server Error");
      }
    } catch (err) {
      res.status(500).json("Internal Server Error");
    }
  } else {
    res.status(500).json("Internal Server Error");
  }
});

app.post("/removeCartItem", async (req, res) => {
  await mongoose.connect(MONGO_URL);
  const { uid, iid } = req.body;
  if (uid && iid) {
    try {
      const result = await CartModel.findOneAndUpdate(
        { userId: uid },
        { $pull: { items: { _id: iid } } },
        { new: true }
      );

      if (result) {
        console.log("removed");
        res.status(200).json({ message: "Item deleted successfully" });
      } else {
        res.status(404).json({ message: "Cart or item not found" });
      }
    } catch (err) {
      res.status(500).json("Internal Server Error");
    }
  } else {
    res.status(500).json("Internal Server Error");
  }
});

app.post("/addtowishlist/:id", async (req, res) => {
  const id = req.params.id;
  const data = req.body.product;
  delete data.id;
  console.log(data);
  console.log(id);
  if (id) {
    try {
      const userCart = await WishlistModel.findOneAndUpdate(
        { userId: id },
        { $push: { items: data } },
        { new: true }
      );
      if (userCart) {
        const result = await CartModel.findOneAndUpdate(
          { userId: id },
          { $pull: { items: { _id: data._id } } },
          { new: true }
        );
        if (result) {
          res.status(200).json("Item Added to Wishlist");
        } else {
          res.status(500).json("Internal Server Error");
        }
      } else {
        res.status(500).json("Item cannot be added to Wishlist");
      }
    } catch (err) {
      console.log(err);
      res.status(500).json("Internal Server Error");
    }
  } else {
    res.status(500).json("Internal Server Error");
  }
});

app.post("/wishlistdata", async (req, res) => {
  await mongoose.connect(MONGO_URL);
  const id = req.body.id;
  console.log(id);
  if (id) {
    try {
      const cart = await WishlistModel.findOne({ userId: id });
      if (cart) {
        res.status(200).json(cart.items);
      } else {
        res.status(500).json("Internal Server Error");
      }
    } catch (err) {
      res.status(500).json("Internal Server Error");
    }
  } else {
    res.status(500).json("Internal Server Error");
  }
});

app.post("/removeWishlistItem", async (req, res) => {
  await mongoose.connect(MONGO_URL);
  const { uid, iid } = req.body;
  if (uid && iid) {
    try {
      const result = await WishlistModel.findOneAndUpdate(
        { userId: uid },
        { $pull: { items: { _id: iid } } },
        { new: true }
      );

      if (result) {
        console.log("removed");
        res.status(200).json({ message: "Item deleted successfully" });
      } else {
        res.status(404).json({ message: "Wishlist or item not found" });
      }
    } catch (err) {
      res.status(500).json("Internal Server Error");
    }
  } else {
    res.status(500).json("Internal Server Error");
  }
});

app.post("/razorpay", async (req, res) => {
  const amt = req.body.amt;
  // console.log("amount", amt);
  let instance = new Razorpay({
    key_id: "rzp_test_pM0vDUp05pvdwo",
    key_secret: "ssogMc4ga1crRhuQdoJPe0wa",
  });

  var options = {
    amount: amt * 100,
    currency: "INR",
    receipt: "order_rcptid_11",
  };

  instance.orders.create(options, function (err, order) {
    if (err) {
      return res.status(500).json("Server Error");
    }
    return res.status(200).json(order);
  });
});

app.post("/completeorder", async (req, res) => {
  await mongoose.connect(MONGO_URL);
  const { id, data } = req.body;
  if (id && data) {
    try {
      const newOrder = await OrderModel.create({
        userId: id,
        items: data,
      });
      if (newOrder) {
        const result = await CartModel.findOneAndUpdate(
          { userId: id },
          { $set: { items: [] } },
          { new: true }
        );
        if (result) {
          res.status(200).json("Order Completed Successfully");
        } else {
          res.status(500).json("Internal Server Error");
        }
      } else {
        res.status(500).json("Internal Server Error");
      }
    } catch (err) {
      console.log(err);
      res.status(500).json("Internal Server Error");
    }
  } else {
    res.status(500).json("Internal Server Error");
  }
});

app.post("/getallorders", async (req, res) => {
  await mongoose.connect(MONGO_URL);
  const id = req.body.id;
  if (id) {
    try {
      const orders = await OrderModel.find({ userId: id });
      if (orders) {
        console.log(orders);
        res
          .status(200)
          .json({ message: "All orders retrieved successfully", data: orders });
      } else {
        res.status(500).json("Internal Server Error");
      }
    } catch (err) {
      res.status(500).json("Internal Server Error");
    }
  } else {
    res.status(500).json("Intenal Server Error");
  }
});

//Start the server
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
});
