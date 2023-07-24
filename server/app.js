const express = require("express");
const mongoose = require("mongoose");
//IMPORTING ROUTES
const jobRoutes = require("./routes/jobs");
const userRoutes = require("./routes/users");
// EXPRESS APP
const app = express();

require("dotenv").config();
const uri = process.env.DB_URI;

// MIDDLEWARE
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/jobs-board", jobRoutes);
app.use("/api/user", userRoutes);

//CONNECT TO DB
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
