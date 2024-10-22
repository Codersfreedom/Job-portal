import express from "express";
import {
  checkAuth,
  logout,
  sendOTP,
  signup,
  verifyOtp,
} from "../controller/company/authController.js";
import { protectCompany } from "../middleware/protectCompany.js";
import { createInterview } from "../controller/company/interviewController.js";

const router = express.Router();

router.post("/auth/signup", signup);
router.get("/auth/checkAuth", protectCompany, checkAuth);
router.post("/auth/logout", logout);
router.post("/auth/sendOtp", sendOTP);
router.post("/auth/verifyOtp", verifyOtp);

router.post("/interview/create",protectCompany, createInterview)

export default router;
