import Job from "../../models/Job.js";
import Student from "../../models/Student.js";

export const postJob = async (req, res) => {
  const {
    title,
    jobType,
    offer,
    openings,
    startDate,
    endDate,
    location,
    experience,
    skills,
    about,
  } = req.body;

  try {
    const newJob = await Job.create({
      title,
      company: req.user._id,
      jobType,
      offer,
      openings,
      startDate,
      endDate,
      location,
      experience,
      skills,
      about,
    });
    res.status(201).json({ status: true, message: "Job posted", job: newJob });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: "Internal server error" });
  }
};
export const getAppliedUsers = async (req, res) => {
  try {
    let students = null;
    const job = await Job.find({ company: req.user._id });

    if (job.length > 0) {
      students = await Student.find({ _id: { $in: job[0].applied } });
    }
    
    res.status(200).json({ status: true, students });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ status: false, message: "Internal server error" });
  }
};
