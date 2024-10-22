import mongoose from "mongoose";

const companySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
    },
    overview: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required:true
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    companyName: {
      type: String,
      required: true,
    },
    companyEmail: {
      type: String,
      required: true,
      unique: true,
    },
    employeeSize: {
      type: Number,
    },
    links: {
      website: {
        type: String,
      },
      linkedIn: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

const Company = mongoose.model("Company", companySchema);

export default Company;
