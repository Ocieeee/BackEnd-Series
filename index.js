require("dotenv").config();
const express = require("express");
const app = express();

const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/face", (req, res) => {
  res.send("Omcc");
});

app.get("/login", (req, res) => {
  res.send("<h1> Please Login </h1>");
});

app.get("/signup", (req, res) => {
  res.send("<h1> Please Signup </h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
