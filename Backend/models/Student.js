import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const studentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique:true
    },
    password: {
      type: String,
      required: true,
    },
    contact: {
      phone: {
        type: Number,
      },
      isWhatsapp: {
        type: Boolean,
        default: false,
      },
    },
    applied:{
      jobs:{
        type:Array,
        default:[]
      },
      internships:{
        type:Array,
        default:[]

      }
    }
  },
  { timestamps: true }
);

studentSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

studentSchema.methods.comparePassword = async function (password) {
 
  return bcrypt.compare(password, this.password);
};

const Student = mongoose.model("Student", studentSchema);

export default Student;
