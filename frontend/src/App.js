import React from "react";
import "./Styles/root.scss";

import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Profile from "./pages/Profile";

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
