//  DOT ENV
require("dotenv").config();
// EXPRESS
const express = require("express");
const app = express();
// MIDDEWARE JSON
app.use(express.json());
// PORT
const port = process.env.PORT || 5000;
// BD CONNETION
const mongoose = require("mongoose");

async function dbconnection() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("connected!");
  } catch (error) {
    console.log(error);
  }
};

dbconnection();
// RUN SERVER
app.listen(port, () => {
  console.log(`server Is Running At Port ${port}`);
});