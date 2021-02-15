import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar1 = () => {
  return (
    <nav className="Navbar">
      <NavLink exact to="/jelly">
        Jelly
      </NavLink>
      <NavLink exact to="/beer">
        Beer
      </NavLink>
      <NavLink exact to="/nougat">
        Nougat
      </NavLink>
    </nav>
  );
};

export default Navbar1;
