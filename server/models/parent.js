const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const parentSchema = new Schema(
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
    description: {
      type: String,
      required: true,
    },
    numOfKids: {
      type: Number,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

const Parent = mongoose.model("Parent", parentSchema);
module.exports = Parent;
