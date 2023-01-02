import express from "express";
import {
  createBdList,
  deleteBdList,
  getAllBdList,
  updateBdList,
} from "../controllers/bdController.js";

const router = express.Router();

router.route("/getAll").get(getAllBdList);
router.route("/createBdList").post(createBdList);
router.route("/update/:id").put(updateBdList);
router.route("/delete").delete(deleteBdList);

export default router;
