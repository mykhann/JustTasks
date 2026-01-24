
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
import User from "../model/user.model.js"

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

        const jwtExpiry = process.env.ACCESS_TOKEN_EXPIRY
        const jwtSecret = process.env.ACCESS_TOKEN_SECRET
        const token = jwt.sign(
            { id: user._id, username: user.username },
            jwtSecret,
            {expiresIn:jwtExpiry}
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



