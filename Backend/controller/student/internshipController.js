import Internship from "../../models/Internship.js";
import Student from "../../models/Student.js";

export const getAllInternships = async (req, res) => {
  try {
    const internships = await Internship.find();
    res.status(200).json({ status: true, internships });
  } catch (error) {
    console.log("Error in internship controller", error.message);
    res.status(500).json({ status: false, message: "Internal server error" });
  }
};

export const getInternship = async (req, res) => {
  const { id } = req.params;
  try {
    const internship = await Internship.findById(id);
    res.status(200).json({ status: true, internship });
  } catch (error) {
    console.log("Error in internship controller", error.message);
    res.status(500).json({ status: false, message: "Internal server error" });
  }
};

export const applyInternship = async (req, res) => {
  const { id } = req.params;
  try {
    const internship = await Internship.findById(id);

    const isApplied = internship.applied.includes(id);
    if (isApplied) {
      return res.status(400).json({
        status: false,
        message: "You have already applied for this job",
      });
    }
    internship.applied.push(id);
    await Student.findOneAndUpdate(
      { _id: req.userId },
      {
        applied: {
          internship: {
            $push: {
              id,
            },
          },
        },
      }
    );
    await internship.save();
    res
      .status(200)
      .json({ status: true, message: "Applied for the internship" });
  } catch (error) {
    console.log("Error in applyinternship controller", error.message);
    res.status(500).json({ status: false, message: "Internal server error" });
  }
};
