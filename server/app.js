const express = require("express");
const mongoose = require("mongoose");
const app = express();

require("dotenv").config();
const uri = process.env.DB_URI;

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to the MongoDB");
  } catch {
    console.error(error);
  }
}

connect();

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
