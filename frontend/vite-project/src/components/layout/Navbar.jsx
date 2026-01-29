import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          Login
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
