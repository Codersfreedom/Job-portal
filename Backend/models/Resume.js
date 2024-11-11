import mongoose from "mongoose";

const resumeSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
  },
  image: {
    type: String,
  },
  full_name: {
    type: String,
    required: true,
  },
  domain: {
    type: String,
  },
  institute: {
    type: String,
  },
  batch: {
    type: Number,
  },
  education: {
    type: Array,
    default: [],
  },
  projects: [
    {
      name: {
        type: String,
        required: true,
      },
      features: {
        type: Array,
        default: [],
      },
      links: {
        github: {
          type: String,
        },
        deploy_link: {
          type: String,
        },
      },
    },
  ],
  work_experience: [
    {
      name: {
        type: String,
        required: true,
      },
      startDate: {
        type: Date,
      },
      endDate: {
        type: Date,
      },
      work_type: {
        type: String,
      },
      details: {
        type: String,
      },
      links: {
        github: {
          type: String,
        },
      },
    },
  ],
  certificates: [
    {
      name: {
        type: String,
      },
      details: {
        type: Array,
        default: [],
      },
      startDate: {
        type: Date,
      },
      endDate: {
        type: Date,
      },
      links: {
        certificate_link: {
          type: String,
        },
      },
    },
  ],
});

const Resume = mongoose.model("Resume", resumeSchema);

export default Resume;
