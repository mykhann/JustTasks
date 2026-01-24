import express from "express"
const router= new express.Router();
import {LoginUser, registerAccount} from "../controller/user.controller.js"


router.post("/register",registerAccount)
router.post("/login",LoginUser)









export default router;