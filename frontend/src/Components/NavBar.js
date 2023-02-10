import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav_container">
      <div className="nav_menu">
        <ul>
          <li className="nav_menu_item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav_menu_item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav_menu_item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav_menu_item">
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
