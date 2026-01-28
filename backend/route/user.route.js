import express from "express"
const router= new express.Router();
import {getUsers, LoginUser, registerAccount} from "../controller/user.controller.js"
import isAuthenticated from "../middleware/isAuthenticated.js";

router.post("/register",registerAccount)
router.post("/login",LoginUser)
// router.post("/users",getUsers)
router.get("/users",isAuthenticated,getUsers)









export default router;