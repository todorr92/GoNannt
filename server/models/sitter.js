const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sitterSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    DOB: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

const Sitter = mongoose.model("Sitter", sitterSchema);
module.exports = Sitter;
