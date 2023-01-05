import asyncHandler from "express-async-handler";
import Okr from "./../models/okrModel.js";

const getOkrList = asyncHandler(async (req, res) => {
  const bd = await Okr.find({ email: req.headers.email });
  res.send(bd);
  res.send("retool");
});
const createOkrList = asyncHandler(async (req, res) => {
  const { email, okr1Title, okrQ1,okrYearTitle, okrYear } = req.body;

  const okr = await Okr.create({
    email,
    okr1Title,
    okrQ1,
    okrYearTitle,
    okrYear,
  });

  if (okr) {
    res.status(201).json({ message: "Record Created" });
  } else {
    res.status(400);
    throw new Error("Something went wrong");
  }
  res.send(okr);
});

//Update Bd List

const updateOkrList = asyncHandler(async (req, res) => {
  const okrList = await Okr.findById(req.headers.id);
  if (okrList) {
    okrList.okrQ1 = req.body.okrQ1 || okrList.okrQ1;
    okrList.okrYear = req.body.okrYear || okrList.okrYear;

    const updatedOkrList = await Okr.save();

    res.send({ msg: "Updated Successfully", updatedOkrList });
  } else {
    res.status(404);
    throw new Error("Invalid user data");
  }
});

// marketing Delete

const deleteOkrList = asyncHandler(async (req, res) => {
  const query = req.headers.id;

  if (query) {
    await Okr.findOneAndRemove({ _id: query });
    res.send({ message: "Okr Removed" });
  } else {
    res.status(404);
    res.json({ message: "Not Found" });
  }
});

export { getOkrList, createOkrList, updateOkrList, deleteOkrList };
