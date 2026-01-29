import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Base_Url from "../../apiUrl";
import UserContext from "../../context/UserContext";
import axios from "axios";
const Signup = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    username: "",
    name: "",
    password: "",
  });

  const { setUser } = useContext(UserContext);
  const navigate = useNavigate()
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const res = await axios.post(`${Base_Url}/register`, input);
      setSuccess(res.data.message);
      setError(null)
      navigate("/login")

    } catch (error) {
      setError(error?.response?.data?.message);
      setSuccess(false)
    } finally{
      setLoading(false)
    }
  };

  const onChangeHandler = (e) => {
    setError(null);
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h2 style={{ display: "flex", justifyContent: "center" }}>Register</h2>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <span style={{ color: "red" }}>{error}</span>
        <span style={{ color: "green" }}>{success}</span>
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
