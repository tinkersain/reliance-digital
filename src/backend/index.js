require("dotenv").config();

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { mongoose } = require("mongoose");
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

//Start the server
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
});
