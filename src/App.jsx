import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./global.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Sell from "./pages/Sell";

function App() {
  return (
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
          <Footer />
        </Router>
  );
}

export default App;
