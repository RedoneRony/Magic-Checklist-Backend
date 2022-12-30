import express from "express";
import {
  createBdList,
  getAllBdList,
  updateBdList,
} from "../controllers/bdController.js";

const router = express.Router();

router.route("/getAll").get(getAllBdList);
router.route("/createBdList").post(createBdList);
router.route("/update/:id").put(updateBdList);

export default router;
