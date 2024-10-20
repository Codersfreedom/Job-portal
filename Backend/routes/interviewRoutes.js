import express from "express";
import { protectUser } from "../middleware/protectUser.js";
import { createInterview } from "../controller/interviewController.js";

const router = express.Router();

router.post("/create", protectUser, createInterview);

export default router;
