import React from "react";
import "./root.scss";
import { Routes, Route } from "react-router-dom";
import Cart from "./Pages/Cart";
import Menu from "./Pages/Menu";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import Profile from "./Pages/Profile";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Service" element={<Service />} />
      <Route path="/Profile" element={<Profile />} />
    </Routes>
  );
};

export default App;
