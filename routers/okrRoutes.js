import express from "express";
import {
  createOkrList,
  deleteOkrList,
  getOkrList,
  updateOkrList,
} from "../controllers/okrController.js";

const router = express.Router();

router.route("/getAll").get(getOkrList);
router.route("/createList").post(createOkrList);
router.route("/update").put(updateOkrList);
router.route("/delete").delete(deleteOkrList);

export default router;
