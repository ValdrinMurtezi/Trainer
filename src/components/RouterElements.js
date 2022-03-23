import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import Services from "./Services";
import About from "./About";
import Nav from "./Nav";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Routers() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routers;
