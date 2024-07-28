require("dotenv").config();

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const PORT = process.env.PORT || 3000;
const PUBLIC_URL = process.env.PUBLIC_URL;
console.log(PUBLIC_URL);

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
app.post("/getname", async (req, res) => {
  res.status(200).json("Tanisha");
});

//Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
