import Internship from "../../models/Internship.js";
import Job from "../../models/Job.js";
import Student from "../../models/Student.js";

export const fetchJobs = async (req, res) => {
  try {
    const jobs = await Job.find();

    res.status(200).json({ status: true, jobs });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: "Internal server error" });
  }
};
export const fetchJob = async (req, res) => {
  const { id } = req.params;

  try {
    const job = await Job.findById(id);
    if (job) {
      return res.status(200).json({ status: true, job });
    } else {
      return res.status(404).json({ status: false, message: " job not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: "Internal server error" });
  }
};
export const applyJob = async (req, res) => {
  const { id } = req.params;
  try {
    const job = await Job.findById(id);

    const isApplied = job.applied.includes(req.user.id);

    if (isApplied) {
      return res.status(400).json({
        status: false,
        message: "You have already applied for this job",
      });
    }
    job.applied.push(req.user.id);
    await Student.findOneAndUpdate(
      { _id: req.user._id },
      { $push: { "applied.jobs": id } }
    );
    await job.save();
    res.status(200).json({ status: true, message: "Applied for the job!" });
  } catch (error) {
    console.log("Error in apply job Controller", error.message);
    res.status(500).json({ status: false, message: "Internal server error" });
  }
};

export const fetchAppliedJob = async (req, res) => {
  try {
    const user = req.user;
    const jobs = await Job.find({ _id: { $in: user.applied.jobs } });

    res.status(200).json({ status: true, jobs });
  } catch (error) {
    console.log("Error in fetchAPplied job controller", error.message);
    res.status(500).json({ status: false, message: "Internal server error" });
  }
};

export const fetchAppliedInternships = async (req, res) => {
  try {
    const internships = await Internship.find({
      _id: { $in: req.user.applied.internships },
    });
    res.status(200).json({ status: true, internships });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ status: false, message: "Internal server error" });
  }
};
