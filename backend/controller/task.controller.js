import AsyncHandler from "../middleware/AsyncHandler.js"
import Task from "../model/task.model.js"

export const postTask = AsyncHandler(async (req, res) => {
    const { title, description, priority } = req.body;
    const {userId}=req.params

    if (!title) {
        return res.status(400).json({
            success: false,
            message: "please enter the title"
        })
    }
    const task = await Task.create({
        title: title,
        description: description,
        priority: priority,
        completed:false,
        postedBy:req.user._id,
        priority:priority,
        assignedTo:userId
    })

    res.status(200).json({
        message:"Task created successfully",
        success:true,
        task
    })


})

export const getLoggedInUserTasks=AsyncHandler(async(req,res)=>{
    const loggedInUserId=req.user._id;
    const loggedInUserTasks=await Task.find({assignedTo:loggedInUserId}).populate("postedBy" ,"name")
    if (loggedInUserTasks.length === 0){
        return res.status(404).json({
            success:false,
            message:"No Task found"
        })
    }
    res.status(200).json({
        success:true,
        message:"All tasks found",
        loggedInUserTasks

    })
   
    
})