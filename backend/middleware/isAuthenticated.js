    import User from "../model/user.model.js"
    import AsyncHandler from "./AsyncHandler.js"
    import jwt from "jsonwebtoken"

    const isAuthenticated=AsyncHandler(async(req,res,next)=>{
        const tokenSecret=process.env.ACCESS_TOKEN_SECRET

        const token= req.cookies?.token
        console.log(token)
        if (!token){
            return res.status(404).json({
                message:"Token not present",
                success:false
            })
        }

        // decoding the token 

        const decodedToken=  jwt.verify(token,tokenSecret)
        const userId=decodedToken.id;
        
        // finding the user 

        const user =await User.findById(userId);
        if (!user){
            return res.status(404).json({
                message:"User not found",
                success:false
            })
        }

        req.user=user
        next()
    })

    export default isAuthenticated