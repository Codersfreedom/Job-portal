import mongoose from "mongoose";

const resumeSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
  },
  full_name: {
    type: String,
    required: true,
  },
  domain: {
    type: String,
  },
  instituite: {
    type: String,
  },
  batch: {
    type: Number,
  },
  education: [
    {
      secondary: {
        school: {
          type: String,
        },
        location: {
          type: String,
        },
        year: {
          type: Number,
        },
        marks: {
          mark: {
            type: Number,
          },
          unit: {
            type: String,
          },
        },
      },
      higher: {
        school: {
          type: String,
        },
        location: {
          type: String,
        },
        year: {
          type: Number,
        },
        marks: {
          mark: {
            type: Number,
          },
          unit: {
            type: String,
          },
        },
      },
      graduation: {
        college: {
          type: String,
        },
        university: {
          type: String,
        },
        batch: {
          start: {
            type: Number,
          },
          end: {
            type: Number,
          },
        },
        location: {
          type: String,
        },
        degree: {
          type: String,
        },
        stream: {
          type: String,
        },
        marks: {
          mark: {
            type: Number,
          },
          unit: {
            type: String,
          },
        },
      },
      post_graduation: {
        college: {
          type: String,
        },
        university: {
          type: String,
        },
        batch: {
          start: {
            type: Number,
          },
          end: {
            type: Number,
          },
        },
        location: {
          type: String,
        },
        degree: {
          type: String,
        },
        stream: {
          type: String,
        },
        marks: {
          mark: {
            type: Number,
          },
          unit: {
            type: String,
          },
        },
      },
    },
  ],

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
      features: {
        type: Array,
        default: [],
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
      features: {
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
