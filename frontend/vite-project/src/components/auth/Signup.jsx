import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Base_Url from "../../apiUrl";
import UserContext from "../../context/UserContext";
import axios from "axios";
const Signup = () => {
  const [input, setInput] = useState({
    username: "",
    name: "",
    password: "",
  });
  const { signup, loading, error } = useContext(UserContext);
  const navigate = useNavigate();
  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const success = signup(input);
      if (success) navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h2 style={{ display: "flex", justifyContent: "center" }}>Register</h2>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <span style={{ color: "red" }}>{error}</span>
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
            type="text"
            style={{ padding: "10px", width: "300px" }}
            placeholder="Enter Your Name"
            name="name"
            value={input.name}
            onChange={onChangeHandler}
          />

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
          <Link to="/login">
            <span></span>Login
          </Link>

          <button type="submit">{loading ? "Loading.." : "Register"}</button>
        </form>
      </div>
    </>
  );
};

export default Signup;
