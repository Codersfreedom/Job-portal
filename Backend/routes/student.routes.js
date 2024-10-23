import express from 'express'
import { checkAuth, login, logout, signup } from '../controller/student/authController.js';
import { protectStudent } from '../middleware/protectStudent.js';


const router = express.Router();

router.post("/auth/signup",signup)
router.post("/auth/login",login)
router.post("/auth/logout",logout)
router.get("/auth/checkAuth",protectStudent,checkAuth)

export default router;