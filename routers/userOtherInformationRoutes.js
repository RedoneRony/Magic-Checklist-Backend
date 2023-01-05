import express from "express";
import {
  getUserOtherInformation,
  createUserOtherInformation,
} from "../controllers/userOtherInformationController.js";

const router = express.Router();

router.route("/getAll").get(getUserOtherInformation);
router.route("/createList").post(createUserOtherInformation);

export default router;
