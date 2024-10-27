import Internship from "../../models/Internship.js";

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
    const {id} = req.params;
  try {
    const internship = await Internship.findById(id);
    res.status(200).json({ status: true, internship });
  } catch (error) {
    console.log("Error in internship controller", error.message);
    res.status(500).json({ status: false, message: "Internal server error" });
  }
};


