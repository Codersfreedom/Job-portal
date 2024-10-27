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
import { postJob } from "../controller/company/jobController.js";
import { postInternship } from "../controller/company/internshipController.js";


const router = express.Router();



router.post("/auth/signup", signup);
router.get("/auth/checkAuth",protectCompany, checkAuth);
router.post("/auth/logout", logout);
router.post("/auth/sendOtp", sendOTP);
router.post("/auth/verifyOtp", verifyOtp);

router.post("/interview/create",protectCompany, createInterview);
router.post("/job/post",protectCompany,postJob);
router.post("/internship/post",protectCompany,postInternship);
export default router;
