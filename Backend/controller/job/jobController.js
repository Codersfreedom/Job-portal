import Job from "../../models/Job.js";

export const fetchJobs = async (req, res) => {
  try {
    const jobs = await Job.find();

    res.status(200).json({ status: false, jobs });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: "Internal server error" });
  }
};
export const fetchJob = async (req, res) => {
  const { id } = req.params;

  try {
    const job = await Job.findById({ id });
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
