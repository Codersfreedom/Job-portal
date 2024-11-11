import express from "express";
import {
  checkAuth,
  login,
  logout,
  signup,
} from "../controller/student/authController.js";
import { protectStudent } from "../middleware/protectStudent.js";
import {
  applyJob,
  fetchAppliedInternships,
  fetchAppliedJob,
  fetchJob,
  fetchJobs,
} from "../controller/student/jobController.js";
import {
  applyInternship,
  getAllInternships,
  getInternship,
} from "../controller/student/internshipController.js";
import { addNewEducation, getResume, updateProfile } from "../controller/student/resumeController.js";

const router = express.Router();

router.post("/auth/signup", signup);
router.post("/auth/login", login);
router.post("/auth/logout", logout);
router.get("/auth/checkAuth", protectStudent, checkAuth);

router.get("/job/fetchAll", fetchJobs);
router.get("/job/fetch/:id", fetchJob);
router.get("/job/fetchApplied", protectStudent, fetchAppliedJob);
router.put("/job/apply/:id", protectStudent, applyJob);

router.get("/internship/fetchAll", getAllInternships);
router.get("/internship/fetch/:id", getInternship);
router.get("/internship/fetchApplied", protectStudent, fetchAppliedInternships);
router.put("/internship/apply/:id", protectStudent, applyInternship);

// router.post("/profile/update",protectStudent,updateProfile);

router.post("/education/addNew",protectStudent,addNewEducation);

router.get("/resume",protectStudent,getResume);

export default router;
