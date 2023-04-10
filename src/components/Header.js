import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header_container">
      <h3 className="logo"> Tech.at.Core</h3>

      <ul>
        <li>
          <NavLink to="/" className="nav">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/meeting" className="nav">
            Meeting
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
