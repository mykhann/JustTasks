import mongoose from "mongoose"
const schema= mongoose.Schema;

const userSchema= new schema ({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true 
    },
    tasks:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Task"
    },
 


},{timestamps:true})

export default mongoose.model("User",userSchema)