import React from "react";
import Home from "./pages/home";
import Calendar from "./pages/calendar";
import Careers from "./pages/careers";
import FNA from "./pages/fna";
import Directories from "./pages/directories";
import Idle from "./pages/Idle";
import Nab from "./pages/newsAndbulletin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/nav-bar/navbar";
import IdleSet from "./components/IdleTimer/IdleTimerContainer"


function App() {
  return (
    <>
    <IdleSet />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/directories" element={<About />} />
          <Route path="/news" element={<Nab />} />
          <Route path="/" element={<Idle />} />
        </Routes>
      </Router>
    </>
  );
}

function About() {
  // 👇️ redirect to external URL
  window.location.replace('http://localhost:3000/idle');

  return null;
}
export default App;
