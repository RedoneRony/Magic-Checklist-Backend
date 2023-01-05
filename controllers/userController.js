import asyncHandler from "express-async-handler";
import User from "./../models/userModel.js";

const getUserList = asyncHandler(async (req, res) => {
  const userList = await User.find({});
  res.json(userList);
});

const createUserList = asyncHandler(async (req, res) => {
  const userList = await User.findOne({ email: req.body.email }).exec();
  const { email } = req.body;
  if (userList === null) {
    await User.create({
      email,
    });
    res.status(201).json({ message: "User Created" });
  } else {
    res.status(400).json({ message: "User already here" });
  }
});

export { getUserList, createUserList };
