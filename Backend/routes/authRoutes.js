import express from 'express'
import {  checkAuth, logout, sendOTP, signup, verifyOtp } from '../controller/authController.js';
import { protectUser } from '../middleware/protectUser.js';


const router = express.Router();

router.post("/signup",signup);
router.get("/checkAuth",protectUser,checkAuth);
router.post("/logout",logout);
router.post("/sendOtp",sendOTP);
router.post("/verifyOtp",verifyOtp);

export default router;