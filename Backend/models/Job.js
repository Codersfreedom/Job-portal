import mongoose from "mongoose";

const jobSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    jobType: {
      type: String,
      required: true,
    },
    offer: {
      low: {
        type: Number,
      },
      high: {
        type: Number,
      },
    },
    openings: {
      type: Number,
      required: true,
    },
    applied: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    location: {
      type: String,
    },
    experience: {
      low: {
        type: Number,
      },
      high: {
        type: Number,
      },
    },
    skills: {
      type: Array,
      default: [],
    },
    about: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", jobSchema);

export default Job;
