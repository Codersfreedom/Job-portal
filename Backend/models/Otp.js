import mongoose from "mongoose";

const otpSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  emailOtp: {
    type: Number,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    index: { expires: 120 },
  },
});

const Otp = mongoose.model("Otp", otpSchema);

export default Otp;
