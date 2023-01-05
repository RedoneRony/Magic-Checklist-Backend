import asyncHandler from "express-async-handler";
import UserOtherInformation from "../models/userOtherInformationModel.js";

const getUserOtherInformation = asyncHandler(async (req, res) => {
  const userOtherInfo = await UserOtherInformation.find({});
  res.json(userOtherInfo);
});

const createUserOtherInformation = asyncHandler(async (req, res) => {
  const userOtherInformation = await UserOtherInformation.findOne({
    email: req.body.email,
  }).exec();
  const { email, agencyName, agencySize, location } = req.body;
  if (userOtherInformation === null) {
    await UserOtherInformation.create({
      email,
      agencyName,
      agencySize,
      location,
    });
    res.status(201).json({ message: "User Other Information Created" });
  } else {
    res.status(400).json({ message: "User Other Information already here" });
  }
});

export { getUserOtherInformation, createUserOtherInformation };
