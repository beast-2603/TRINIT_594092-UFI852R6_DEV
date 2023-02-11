import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ currentLoc }) => {
  const LINKS = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
    { to: "/contact", text: "Contact" },
    { to: "/service", text: "Service" },
    { to: "/account", text: "Account" },
  ];

  return (
    <div className="nav_container">
      {/* <div className="nav_menu"> */}
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
      {/* </div> */}
    </div>
  );
};

export default NavBar;
