import asyncHandler from "express-async-handler";
import Marketing from "../models/marketingModel.js";

const getAllMarketingList = asyncHandler(async (req, res) => {
  const marketing = await Marketing.find({ email: req.headers.email });
  res.send(marketing);
});
const createMarketingList = asyncHandler(async (req, res) => {
  const {
    email,
    marketingCheckListTitle,
    marketingCheckList,
    webDirectoriesTitle,
    webDirectories,
    contentPlanTitle,
    contentPlan,
    seoTitle1,
    basicChecklist,
    seoTitle2,
    keywordResearch,
    seoTitle3,
    technicalSEO,
    seoTitle4,
    onPage,
    seoTitle5,
    offPage,
  } = req.body;

  const marketing = await Marketing.create({
    email,

    marketingCheckListTitle,
    marketingCheckList,

    webDirectoriesTitle,
    webDirectories,

    contentPlanTitle,
    contentPlan,

    seoTitle1,
    basicChecklist,

    seoTitle2,
    keywordResearch,

    seoTitle3,
    technicalSEO,

    seoTitle4,
    onPage,

    seoTitle5,
    offPage,
  });

  if (marketing) {
    res.status(201).json({ message: "Record Created" });
  } else {
    res.status(400);
    throw new Error("Something went wrong");
  }
  res.send(marketing);
});

//Update Marketing List

const updateMarketingList = asyncHandler(async (req, res) => {
  const marketingList = await Marketing.findById(req.headers.id);
  if (marketingList) {
    marketingList.marketingCheckList =
      req.body.marketingCheckList || marketingList.marketingCheckList;
    marketingList.webDirectories =
      req.body.webDirectories || marketingList.webDirectories;
    marketingList.contentPlan =
      req.body.contentPlan || marketingList.contentPlan;

    const updatedList = await Marketing.save();

    res.send({ msg: "Updated Successfully", updatedList });
  } else {
    res.status(404);
    throw new Error("Invalid user data");
  }
});

// marketing Delete

const deleteMarketingList = asyncHandler(async (req, res) => {
  const query = req.headers.id;

  if (query) {
    await Marketing.findOneAndRemove({ _id: query });
    res.send({ message: "Marketing Removed" });
  } else {
    res.status(404);
    res.json({ message: "Not Found" });
  }
});

export {
  getAllMarketingList,
  createMarketingList,
  updateMarketingList,
  deleteMarketingList,
};
