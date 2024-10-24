import jwt from "jsonwebtoken";
import Company from "../models/Company.js";

export const protectCompany = async (req, res, next) => {

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

    const user = await Company.findById(decoded.userId);

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
