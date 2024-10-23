import Job from "../../models/Job.js";

export const postJob = async (req, res) => {
  const {
    title,
    company,
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
      company,
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
