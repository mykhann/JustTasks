import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import UserContext from "../../context/UserContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const onclickHandler =async(e)=>{
    e.preventDefault();
    const success = await logout()
    if (success) navigate("/login");
  };
  return (
    <header className="navbar-header">
      <div className="logo">Just Tasks</div>

      <div
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`nav-links ${isOpen ? "open" : ""}`}>
        <NavLink to="/" className="nav-link" onClick={() => setIsOpen(false)}>
          My Tasks
        </NavLink>
        <NavLink
          to="/Tasks-Assigned"
          className="nav-link"
          onClick={() => setIsOpen(false)}
        >
          Tasks I Assigned
        </NavLink>
        <NavLink
          to="/login"
          className="nav-link"
          onClick={() => setIsOpen(false)}
        >
          {user ? "" : "login"}
        </NavLink>
        <p onClick={onclickHandler}>{user ? "Logout" : ""}</p>
      </nav>
    </header>
  );
};

export default Navbar;
