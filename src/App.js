import React from 'react';
import Home from './pages/home';
import Calendar from './pages/calendar';
import Careers from './pages/careers';
import FNA from './pages/fna';
import Directories from './pages/directories';
import Idle from './pages/Idle';
import Nab from './pages/newsAndbulletin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/nav-bar/navbar';

function App() {
  return (
       <>
      <Router>
      <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />}/>
        <Route path="/calendar" element={<Calendar />}/>
        <Route path="/directories" element={<Directories />}/>
        <Route path="/news" element={<Nab />} />
        </Routes>
        </Router>
    </>
  )
};

export default App;