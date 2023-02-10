import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = ({ currentLoc }) => {
  const LINKS = [
    { to: "/", text: "Home" },
    { to: "/About", text: "About" },
    { to: "/Contact", text: "Contact" },
    { to: "/Service", text: "Service" },
    { to: "/Profile", text: "Profile" },
  ];

  return (
    <div className="nav_container">
      <div className="nav_menu">
        <ul>
          {LINKS.map(
            (item) =>
              !(item.text === "Home" && currentLoc === "/") && (
                <li key={item.to} className="nav_menu_item">
                  <Link to={item.to}>{item.text}</Link>
                </li>
              )
          )}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
