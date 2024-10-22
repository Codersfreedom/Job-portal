import Student from "../../models/Student.js";
import generateTokenAndSetCookie from "../../utils/generateTokenAndSetCookie.js";

export const signup = async (req, res) => {
  const { name, email, password, contact } = req.body;

  try {
    if (!name || !email || !password || !contact)
      return res
        .status(400)
        .json({ status: false, message: "Please provide all fields" });

    const isExistingUser = await Student.findOne({ email });
    if (isExistingUser)
      return res.status(400).json({
        status: false,
        message: "User is already exists with this email id",
      });

    const newStudent = await Student.create({
      name,
      email,
      password,
      contact: {
        ...contact,
      },
    });

    generateTokenAndSetCookie(res, newStudent._id);
    return res
      .status(201)
      .json({ status: true, message: "Account created", student: newStudent });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: "Internal server error" });
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password)
      return res
        .status(400)
        .json({ status: false, message: "Please enter all fields to login" });

    const existingUser = await Student.findOne({ email });

    if (!existingUser)
      return res
        .status(404)
        .json({ status: false, message: "User not found at database" });

    if (await existingUser.comparePassword(password)) {
      generateTokenAndSetCookie(res, existingUser._id);
      res.status(200).json({
        status: true,
        message: "Login success",
        student: existingUser,
      });
    } else {
      res.status(400).json({ status: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: "Internal server error" });
  }
};
export const logout = async (req, res) => {
  try {
    res.clearCookie("cuvette");
    res.status(200).json({ status: true, message: "Logout success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: "Internal server error" });
  }
};
