import mongoose from "mongoose";

const internshipSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    mode: {
      type: String,
      required: true,
    },
    level: {
      type: String,
    },
    skills: {
      type: Array,
      default: [],
    },
    stipend: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    workTime: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      requied: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    applied: {
      type: Array,
      default: [],
    },
    openings: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Internship = mongoose.model("internship", internshipSchema);

export default Internship;
