import "dotenv/config"
import express from "express"
const app = express()

const PORT= process.env.PORT

app.use(express.json());



app.listen(PORT,()=>{
    console.log(`Backend server started listening on ${PORT}`)
})