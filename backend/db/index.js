import mongoose from "mongoose";
import "dotenv/config"

const mongoUri=process.env.MONGO_URI
const  connectToDatabase=async()=>{
    try {
        const connect=await mongoose.connect(mongoUri)
        console.log(`Database connection Successful!! ${connect.connection.name}`)
        
    } catch (error) {
        console.log(error)
    }

}

export default connectToDatabase