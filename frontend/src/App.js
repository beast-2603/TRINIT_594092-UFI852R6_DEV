import React, { useEffect, useState } from "react";
import "./root.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import NavBar from "./Components/NavBar";
import logo from "./Images/logo-removebg-preview.png";
import Account from "./Pages/Account";

const App = () => {
  const location = useLocation();
  const [currentLoc, setCurrentLoc] = useState("");
  useEffect(() => {
    setCurrentLoc(location.pathname);
  }, [location]);
  return (
    <>
      <div className="main_logo">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <NavBar currentLoc={currentLoc} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/account/*" element={<Account />} />
      </Routes>
    </>
  );
};

export default App;
