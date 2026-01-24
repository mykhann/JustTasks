import express from "express"
const router= new express.Router();
import {registerAccount} from "../controller/user.controller.js"


router.post("/register",registerAccount)









export default router;