import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.MAIL_USERNAME);
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for port 465, false for other ports
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.APP_PASSWORD,
  },
});

async function sendMailToUsers(email, content) {
  try {
    const info = await transporter.sendMail({
      from: process.env.MAIL_USERNAME, // sender address
      to: email, // list of receivers
      subject: typeof(content) =="number" ? "Email Otp verification":"Interview call", // Subject line
      text:
        typeof(content) == "number"
          ? `Hello there welcome to cuvette, here is your 5 digit OTP: ${otp}`
          : content,
    });
    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.log(error);
  }
}

export default sendMailToUsers;
