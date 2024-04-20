import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/admin">Admin</NavLink>
      <NavLink to="/parents">Parents</NavLink>
    </div>
  );
}

export default Navbar;
