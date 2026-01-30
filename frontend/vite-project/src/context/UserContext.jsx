import axios from "axios";
import { Children, createContext, useContext, useState } from "react";
import Base_Url from "../apiUrl";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const login = async (input) => {

    try {
      setLoading(true);
      const res = await axios.post(`${Base_Url}/login`,input );
      setUser(res.data)
      setError(null)
      return true;
     
    } catch (error) {
      console.log(error.response.data.message);
      setError(error.response.data.message)
    } finally {
      setLoading(false);
    }
  };

  const signup=async(input)=>{
    try {
        setLoading(true)
        const res=await axios.post(`${Base_Url}/register`,input)
        setError(null)
        return true


    } catch (error) {
        setError(error.response.data.message)
    }finally{
        setLoading(false)
    }
  }

  return(
    <UserContext.Provider value={{user,setUser,error,loading,login,signup}}>{children}</UserContext.Provider>
  )
};

export default UserContext;
