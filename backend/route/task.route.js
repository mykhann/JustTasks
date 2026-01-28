import express from "express"
const router = express.Router()
import { getLoggedInUserTasks, postTask, updageteTaskStatus } from "../controller/task.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";


router.get("/get", isAuthenticated, getLoggedInUserTasks)
router.post("/create/:userId", isAuthenticated, postTask)
router.patch("/update/:taskId", isAuthenticated, updageteTaskStatus)
export default router;