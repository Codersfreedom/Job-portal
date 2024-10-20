import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (res, userId) => {
  try {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: "15d",
    });

    res.cookie("cuvette", token, {
      maxAge: 15 * 24* 60 * 60 * 1000,
      secure:process.env.NODE_ENV !== 'development',
      httpOnly:true,
      sameSite:"strict",
    });
  } catch (error) {
    console.log("Error in setting cookie",error.message);
  }
};

export default generateTokenAndSetCookie;