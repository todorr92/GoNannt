const User = require("../models/user");

// login a user
const loginUser = async (req, res) => {
  res.json({ mssg: "login user" });
};

// signup a user
const signupUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.signup(name, email, password);

    res.status(200).json({ name, email, user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { signupUser, loginUser };
