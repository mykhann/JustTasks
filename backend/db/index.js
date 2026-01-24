import mongoose from "mongoose";

const mongoUri=process.env.MONGO_URI
const  connectToDatabase=async()=>{
    try {
        const connect=await mongoose.connect(mongoUri)
        console.log(`Database connection Successful!! ${connect.connection}`)
        
    } catch (error) {
        console.log(error)
    }

}

export default connectToDatabase