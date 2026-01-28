import mongoose from "mongoose";
const schema = mongoose.Schema;


const taskSchema = new schema({
    title: {
        type: String,
        required: true,
        trim:true
    },
    description: {
        type: String,
        trim:true
    },
       assignedTo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    postedBy: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    completed: {
        type: Boolean,
        default: false
    },
    priority: {
        type: String,
        enum: ["low", "medium", "high"]
    },
    dueDate: Date

}, { timestamps: true })


export default mongoose.model("Task", taskSchema)