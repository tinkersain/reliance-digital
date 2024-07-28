require("dotenv").config();

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { mongoose } = require("mongoose");
const UserModel = require("./Schema/UserModel");
const PORT = process.env.PORT || 3000;
const PUBLIC_URL = process.env.PUBLIC_URL;
const MONGO_URL = process.env.MONGO_URL;

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
app.options("*", cors());

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
        });
      }
    } catch (err) {
      res.status(300).json("Inernal Server Error");
    }
  } else {
    res.status(500).json({ message: "Data Not Found", successStatus: false });
  }
});

//Start the server
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
});
