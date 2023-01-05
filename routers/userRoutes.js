import express from "express";
import { getUserList, createUserList } from "../controllers/userController.js";

const router = express.Router();

router.route("/getAll").get(getUserList);
router.route("/createList").post(createUserList);

export default router;
