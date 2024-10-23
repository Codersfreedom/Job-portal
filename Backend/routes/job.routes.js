import express from 'express'
import { fetchJob, fetchJobs } from '../controller/job/jobController.js';

const router = express.Router();

router.get("/fetchAll",fetchJobs)
router.get("/fetch/:id",fetchJob)

export default router;