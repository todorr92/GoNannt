const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bcrypt = require("bcrypt");

const userSchema = new Schema(
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
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

//static signup method
userSchema.statics.signup = async function (name, email, password) {
  // extra layer of check that email is unique
  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email already in use");
  }
  // creating hash for added security on passwords
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ name, email, password: hash });

  return user;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
