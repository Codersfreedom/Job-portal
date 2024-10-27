import express from 'express'
import { checkAuth, login, logout, signup } from '../controller/student/authController.js';
import { protectStudent } from '../middleware/protectStudent.js';
import { fetchJob, fetchJobs } from '../controller/student/jobController.js';
import { getAllInternships, getInternship } from '../controller/student/internshipController.js';


const router = express.Router();

router.post("/auth/signup",signup)
router.post("/auth/login",login)
router.post("/auth/logout",logout)
router.get("/auth/checkAuth",protectStudent,checkAuth)

router.get("/job/fetchAll",fetchJobs)
router.get("/job/fetch/:id",fetchJob)

router.get("/internship/fetchAll",getAllInternships);
router.get("/internship/fetch/:id",getInternship);

export default router;