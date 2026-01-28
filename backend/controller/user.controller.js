
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
import User from "../model/user.model.js"
import { redisClient } from "../cache.js";

const jwtExpiry = process.env.ACCESS_TOKEN_EXPIRY
const jwtSecret = process.env.ACCESS_TOKEN_SECRET
export const registerAccount = async (req, res) => {
    try {
        const { name, username, password } = req.body
        if (!name || !username || !password) {
            return res.status(400).json({
                message: "Please enter all the fields",
                success: false
            })
        }
        const userExists = await User.findOne({ username })
        console.log(userExists)
        if (userExists) {
            return res.status(400).json({
                message: "User already exists ",
                success: false
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            name: name,
            username: username,
            password: hashedPassword

        })


        const token = jwt.sign(
            { id: user._id, username: user.username },
            jwtSecret,
            { expiresIn: jwtExpiry }
        )

        res.status(200).json({
            message: "User created successfully",
            user, token,
            success: true
        })


    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false
        })

    }


}

export const LoginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            res.status(400).json({
                message: "Please enter the required credentials",
                success: false
            })
        }
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({
                returnmessage: "User not found",
                success: false
            })
        }
        const comparePassowrd = await bcrypt.compare(password, user.password)
        if (!comparePassowrd) {
            return res.status(400).json({
                message: "Credentials are wrong",
                success: false
            })
        }
        const token = jwt.sign(
            { id: user._id, username: user.username },
            jwtSecret,
            { expiresIn: jwtExpiry }
        )

        res.status(200).json({
            message: `Welcome Back ${user.name}`,
            user, token,
            success: true
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


export const getUsers = async (req, res) => {
    try {
        const cachedUsers = await redisClient.get("users")
        if (cachedUsers) {
            return res.json(JSON.parse(cachedUsers))
        }
        const users = await User.find().select("name,email").lean()
        if(users.length===0){
            return res.status(404).json({
                messgae:"No users found",
                success:false
            })
        }
        redisClient.setEx("users",3600, JSON.stringify(users))
        console.log("users",users)

        res.status(200).json({
            message:"Users fetched",
            success:true,
            users
        })
    
} catch (error) {

    console.log(error)

    }
}
