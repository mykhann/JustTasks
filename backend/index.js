import "dotenv/config"
import express from "express"
import connectToDatabase from "./db/index.js"
import userRoutes from "./route/user.route.js"
const app = express()

const PORT= process.env.PORT

app.use(express.json());

// database connection 
connectToDatabase()

// routers 
app.use("/api/v1/",userRoutes)



app.listen(PORT,()=>{
    console.log(`Backend server started listening on ${PORT}`)
})