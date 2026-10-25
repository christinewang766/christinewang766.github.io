import React from "react";
import "./App.css";
import Home from "./pages";
import Message from "./pages/Message";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Turnips from "./pages/Turnips";
import ScrollUpButton from "./components/ScrollUpButton";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Aos from "aos";

function App() {
  /* animate on scroll */
  Aos.init();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/message" element={<Message />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/turnips" element={<Turnips />} />
      </Routes>
      <ScrollUpButton />
    </Router>
  );
}

export default App;
