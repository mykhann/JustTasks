import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Base_Url from "../../apiUrl";
import UserContext from "../../context/UserContext";

export const Login = () => {
  const {setUser,user}=useContext(UserContext)
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [success,setSuccess]=useState(null)
  const [loading,setLoading]=useState(false)
  const navigate=useNavigate()
  const onSubmitHandler = async (e) => {
     e.preventDefault()
    try {
          setLoading(true)
          const res = await axios.post(
        `${Base_Url}/login`,
      input ,
        { withCredentials: true },
      );
   
      setError(null);
      setUser(res.data);
      setSuccess(res.data.message)
      navigate("/")
     
    } catch (error) {
     
      setError(error?.response?.data?.message)
      setSuccess(null)
      console.log("something went wrong", error);
    } finally{
      setLoading(false)
      console.log(user)
    }
  };
  const onChangeHandler = (e) => {
    setError(null)
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <>
      <h2 style={{ display: "flex", justifyContent: "center" }}>Login</h2>

      <div style={{display:"flex", justifyContent:"center"}}>
        <span style={{color:"red"}}>{error}</span>
      <span style={{color:"green"}}>{success}</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "300px",
            marginTop: "10px",
            alignItems: "center",
            justifyContent: "center",
          }}
          onSubmit={onSubmitHandler}
          action="submit"
        >
          <input
            style={{ padding: "10px", width: "300px" }}
            onChange={onChangeHandler}
            placeholder="Enter your username"
            name="username"
            value={input.username}
            type="text"
          />

          <input
            style={{ padding: "10px", width: "300px" }}
            onChange={onChangeHandler}
            name="password"
            placeholder="enter your password"
            type="password"
            value={input.password}
          />
          <Link to="/signup">
            <span></span>Register
          </Link>

          <button type="submit">{loading?"Loading..":"Login"}</button>
        </form>
      </div>
    </>
  );
};
