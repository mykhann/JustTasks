import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Base_Url from "../../apiUrl";
import TaskCard from "./TaskCard";
import TasksContext from "../../context/TasksContext";
import UserContext from "../../context/UserContext";

const MyTasksPage = () => {
  const { tasks, setTasks,fetchTasks,loading ,updateStatus} = useContext(TasksContext);
  const [ error, setError ] = useState(null);
  const {user}=useContext(UserContext)

  useEffect(() => {
   if (user){
     fetchTasks()
   }else{
    setTasks([])
   }
  },[]);



  return <>{
    tasks.map((item)=>{
      return <TaskCard key={item._id} onStatusToggle={()=>updateStatus(item._id,item.completed)}  title={item.title} completed={item.completed} description={item.description} priority={item.priority}/>
    })
  }</>;
};

export default MyTasksPage;
