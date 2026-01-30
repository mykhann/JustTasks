import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Base_Url from "../../apiUrl";
import UserContext from "../../context/UserContext";

export const Login = () => {
  const {login,error,loading,setError}=useContext(UserContext)
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
 
  const navigate=useNavigate()
  const onSubmitHandler = async (e) => {
     e.preventDefault()
     try {
          const success = await login(input);
    if (success) navigate("/");
      
     } catch (error) {
      console.log(error)
     }
     
 
  };
  const onChangeHandler = (e) => {

    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <>
      <h2 style={{ display: "flex", justifyContent: "center" }}>Login</h2>

      <div style={{display:"flex", justifyContent:"center"}}>
        <span style={{color:"red"}}>{error}</span>
     
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
