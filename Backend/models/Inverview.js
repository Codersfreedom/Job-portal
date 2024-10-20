import mongoose from "mongoose";

const interViewSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    experience:{
        type:Number,
    },
    candidate:{
        type:Array,
        default:[]
    },
    endDate:{
        type:Date,

    }
    
},{timestamps:true});

const Interview = mongoose.model("Interview",interViewSchema);

export default  Interview;