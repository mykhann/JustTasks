import express from "express"
const router = express.Router()
import { getLoggedInUserTasks, postTask } from "../controller/task.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

router.post("/create/:userId", isAuthenticated, postTask)
router.get("/get", isAuthenticated, getLoggedInUserTasks)
export default router;