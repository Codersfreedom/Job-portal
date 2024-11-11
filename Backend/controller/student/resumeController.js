import Resume from "../../models/Resume.js";
import Student from "../../models/Student.js";
import cloudinary from "../../services/cloudinary.js";

export const updateProfile = async (req, res) => {
  const { full_name, domain, institute, batch, image } = req.body;

  try {
    let cloudinary_response = null;
    if (image) {
      cloudinary_response = await cloudinary.uploader.upload(image, {
        folder: "job-portal",
      });
    }
    console.log(cloudinary_response);

    if (cloudinary_response) {
      await Student.findByIdAndUpdate(req.user._id, {
        image: cloudinary_response?.secure_url,
      });
    }

    const updatedResume = await Resume.findOneAndUpdate(
      { userId: req.user._id },
      {
        full_name,
        domain,
        institute,
        batch,
        image: cloudinary_response?.secure_url,
      },
      { new: true }
    );
    res.status(200).json({
      status: true,
      message: "Updated successfully",
      resume: updatedResume,
    });
  } catch (error) {
    console.log("Error in update profile", error.message);
    res.status(500).json({ status: false, message: "Internal server error" });
  }
};

export const getResume = async (req, res) => {
  try {
    const resume = await Resume.findOne({ userId: req.user._id });
    return res.status(200).json({ status: true, resume });
  } catch (error) {
    console.log("Error in fetch resume controller", error.message);
    res.status(500).json({ status: false, message: "Internal server error" });
  }
};

export const addNewEducation = async (req, res) => {
  try {
    const { data } = req.body;
    if (!type) {
      return res
        .status(400)
        .json({ status: false, message: "Please provide all fields" });
    }
    const resume = await Resume.findOneAndUpdate(
      { userId: req.user._id },
      {
        $push: {
          ...data,
        },
      }
    );
    res.status(201).json({ status: true, message: "Educataion details added",resume });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: "Internal server error" });
  }
};
