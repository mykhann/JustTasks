import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Base_Url from "../../apiUrl";
import TaskCard from "./TaskCard";
import TasksContext from "../../context/TasksContext";

const MyTasksPage = () => {
  const { tasks, setTasks } = useContext(TasksContext);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    const fetchedTasks = async () => {
      try {
        const res = await axios.get(`${Base_Url}/tasks/get`, {
          withCredentials: true,
        });
        setTasks(res.data.loggedInUserTasks);
        console.log(res.data)
      } catch (error) {
        setError(error.response.data.message)

      }
    };
     fetchedTasks();
  },[]);

 const updateStatus=async(taskId,completed)=>{
  try {
      setTasks(prev =>
    prev.map(task =>
      task._id === taskId ? { ...task, completed: !completed } : task
    )
  );
    const res= await axios.patch(`${Base_Url}/tasks/update/${taskId}`,{completed:!completed},{withCredentials:true})
  
    
  } catch (error) {
    console.log(error.response.data.message)
    
  }
 }

  return <>{
    tasks.map((item)=>{
      return <TaskCard index={item._id} onStatusToggle={()=>updateStatus(item._id,item.completed)}  title={item.title} completed={item.completed} description={item.description} priority={item.priority}/>
    })
  }</>;
};

export default MyTasksPage;
