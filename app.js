require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());

const port = process.env.PORT || 5000;

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

app.listen(port, () => {
  console.log(`server Is Running At Port ${port}`);
});