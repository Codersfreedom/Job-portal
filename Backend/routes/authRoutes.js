import express from 'express'
import {  login, logout, sendOTP, signup, verifyOtp } from '../controller/authController.js';


const router = express.Router();

router.post("/signup",signup);
router.post("/login",login);
router.post("/logout",logout);
router.post("/sendOtp",sendOTP);
router.post("/verifyOtp",verifyOtp);

export default router;