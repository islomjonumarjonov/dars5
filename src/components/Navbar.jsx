import React from "react";
import { NavLink } from "react-router-dom";
import App from "../App";
import Signup from "../pages/Signup";

function Navbar() {
  return (
    <div className="navbar container">
      <h1>Logo</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
