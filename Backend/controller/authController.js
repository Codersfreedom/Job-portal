import Otp from "../models/Otp.js";
import User from "../models/User.js";
import generateOtp from "../services/generateOtp.js";
import sendMailToUsers from "../services/nodemailer.js";
import generateTokenAndSetCookie from "../utils/generateTokenAndSetCookie.js";

export const signup = async (req, res) => {
  try {
    const { name, phone, company, companyEmail, employeeSize } = req.body;

    const isExisting = await User.findOne({ companyEmail });

    if (isExisting) {
      return res
        .status(400)
        .json({ status: false, message: "Email is already exists" });
    }

    const newUser = await User.create({
      name,
      phone,
      company,
      companyEmail,
      employeeSize,
    });

    generateTokenAndSetCookie(res, newUser._id);

    res
      .status(201)
      .json({ status: true, message: "Account created", user: newUser });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ status: false, message: "Internal server error" });
  }
};

export const sendOTP = async (req, res) => {
  try {
    const { email } = req.body;
    console.log(email)
    if (!email) {
      return res
        .status(500)
        .json({ status: false, message: "Enter email to continue" });
    }
    const isExistingUser = await User.findOne({ companyEmail: email });
console.log(isExistingUser)
    if (!isExistingUser) {
      return res
        .status(400)
        .json({ status: false, message: "Email Id doesn't exist" });
    }

    const mailOtp = generateOtp();
    // await sendMailToUsers(email, mailOtp);

    const isOtpGenerated = await Otp.findOne({ user: isExistingUser._id });
    if (!isOtpGenerated) {
      await Otp.create({
        user: isExistingUser._id,
        emailOtp: parseInt(mailOtp),
      });
    } else {
      await Otp.findOneAndUpdate(
        { user: isExistingUser._id },
        {
          emailOtp: parseInt(mailOtp),
        }
      );
    }

    res.status(200).json({ status: true,message:"Otp send", userId: isExistingUser._id });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ status: false,message:"Internal server error" });
  }
};

export const verifyOtp = async (req, res) => {
  try {
    const { emailOtp, userId } = req.body;

    if (!emailOtp) {
      return res
        .status(500)
        .json({ status: false, message: "Enter both otps to continue" });
    }

    const savedOtp = await Otp.findOne({ user: userId });

    if (!savedOtp) {
      return res
        .status(404)
        .json({ status: false, message: "No otp found at database" });
    }

    if (emailOtp != savedOtp.emailOtp) {
      return res.status(400).json({ status: false, message: "Invalid otp" });
    }
    const user = await User.findOneAndUpdate(
      { _id: userId },
      {
        isVerified: true,
      },
      { new: true }
    );
    await Otp.findOneAndUpdate(
      { user: userId },
      {
        emailOtp: null,
      }
    );
    res.status(200).json({ status: true, user });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ status: false, message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { userId } = req.body;

    const isExistingUser = await User.findOne({
      _id: userId,
      isVerified: true,
    });

    if (!isExistingUser)
      return res
        .status(404)
        .json({ status: false, message: "User is not verified" });

    const user = await User.findOneAndUpdate(
      { _id: userId },
      {
        isVerified: false,
      },
      { new: true }
    );

    generateTokenAndSetCookie(res, userId);

    res.status(200).json({ status: true, message: "Login success", user });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ status: false, message: "Internal server error" });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("cuvette");
    res.status(200).json({ status: true, message: "User logged out!" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ status: false, message: "Internal server error" });
  }
};
