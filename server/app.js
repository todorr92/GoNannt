const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Parent = require("./models/parent");

require("dotenv").config();
const uri = process.env.DB_URI;

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to the MongoDB");
    app.listen(8000, () => {
      console.log("Server started on port 8000");
    });
  } catch {
    console.error(error);
  }
}
connect();
