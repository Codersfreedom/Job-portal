import jwt from "jsonwebtoken";
import Student from "../models/Student.js";

export const protectStudent = async (req, res, next) => {
 
  try {
    
    const token = req.cookies["cuvette"];
    if (!token) {
      return res
        .status(401)
        .json({ status: false, message: "Unauthorized! no token provided" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({
        status: false,
        message: "Unauthorized! token is not verified",
      });
    }

    const user = await Student.findById(decoded.userId).select("-password");

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log("Error in middleware", error.message);
    res.status(500).json({ status: false, message: "Internal server error" });
  }
};
