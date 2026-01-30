import axios from "axios";
import { createContext, useState } from "react";
import Base_Url from "../apiUrl";
const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${Base_Url}/tasks/get`, {
        withCredentials: true,
      });
      setError(null);
      setTasks(res.data.loggedInUserTasks);
      console.log("fetched tasks", tasks);
    } catch (error) {
      console.log(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus=async(taskId,completed)=>{
    try {
        setTasks(prev=>prev.map((task)=>{
            return task._id === taskId ? {...task ,completed:!completed}:task
        }))
        const res= await axios.patch(`${Base_Url}/tasks/update/${taskId}`,{
            completed:!completed
        },{withCredentials:true})
        
    } catch (error) {
        console.log(error?.response?.data?.message)
    }
  }
  return (
    <TasksContext.Provider
      value={{ tasks, setTasks, loading, fetchTasks, error ,updateStatus }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksContext;
