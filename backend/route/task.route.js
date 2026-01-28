import express from "express"
const router = express.Router()
import { postTask } from "../controller/task.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

router.post("/create/:userId",isAuthenticated, postTask)
export default router;