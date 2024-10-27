import Internship from "../../models/Internship.js";

export const postInternship = async (req, res) => {
  const {
    title,
    company,
    mode,
    level,
    skills,
    stipend,
    duration,
    workTime,
    startDate,
    endDate,
    applied,
    openings,
  } = req.body;

  try {
    if (
      !title ||
      !company ||
      !mode ||
      !stipend ||
      !duration ||
      !workTime ||
      !startDate ||
      !endDate ||
      !openings
    ) {
      return res
        .status(400)
        .json({ status: false, message: "Please enter all fields" });
    }

    const internship = await Internship.create({
      title,
      company,
      mode,
      level,
      skills,
      stipend,
      duration,
      workTime,
      startDate,
      endDate,
      applied,
      openings,
    });
    res
      .status(201)
      .json({ status: true, internship, message: "Internship posted" });
  } catch (error) {
    console.log("Error in postInternship controller", error.message);
    res.status(500).json({ status: false, message: "Internal server error" });
  }
};
