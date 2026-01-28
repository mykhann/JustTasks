import "dotenv/config"
import express from "express"
import connectToDatabase from "./db/index.js"
import userRoutes from "./route/user.route.js"
import taskRoutes from  "./route/task.route.js"
import cors from "cors"
import cookieParser from "cookie-parser"
const app = express()

const PORT= process.env.PORT

app.use(express.json());
app.use(cookieParser());

// database connection 
connectToDatabase()
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))


// routers 
app.use("/api/v1/",userRoutes)
app.use("/api/v1/tasks",taskRoutes)


app.listen(PORT,()=>{
    console.log(`Backend server started listening on ${PORT}`)
})