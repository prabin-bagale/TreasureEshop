/** @format */

const User = require("../models/models");
const { validationResult } = require("express-validator");

exports.signup = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }
  try {
    const user = new User(req.body);
    const createdUser = await user.save();
    res.json({ message: "signup success", _id: createdUser._id });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ error: err.message || "Not Able to Save in Dataabse" });
  }
};

exports.login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }
  try {
    const { email, password } = req.body;
    const user = await user.findOne({ email }).exe();
    if (!User) {
      return res.status(400).json({ error: "User Not Found" });
    }
    if (!User.authenticate(password)) {
      return res.status(400).json({ error: "Email or Password Invalid" });
    }
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ error: err.message || "Not Able to Save in Dataabse" });
  }
};
