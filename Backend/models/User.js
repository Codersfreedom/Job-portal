import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
    unique:true
  },
  isVerified:{
    type:Boolean,
    default:false
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
},{timestamps:true});


const User = mongoose.model("User", userSchema);

export default User;
