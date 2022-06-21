import React from 'react';
import Home from './pages/home';
import Calendar from './pages/calendar';
import Careers from './pages/careers';
import FNA from './pages/fna';
import directories from './pages/directories';
import Idle from './pages/Idle';
import nab from './pages/newsAndbulletin';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import navbar from './components/nav-bar/navbar';

function App() {
  return (
    <div id='App'>
      <navbar />
      <Router>
        <link to= '/'>Home</link>
        <link to= '/calendar'>Calendar</link>
        <link to= '/careers'>Careers</link>
        <link to= '/directories'>Directories</link>
        <link to= '/fna'>Food and Amenities</link>
          <Routes>
              <Route path='/' element={<home/>}/>
              <Route path='Calendar' element={<calendar/>}/>
              <Route path='Careers' element={<careers/>}/>
              <Route path='Directories' element={<directories/>}/>
              <Route path= 'Food and Amenities' element={<fna/>}/>
          </Routes>
      </Router>
      <Home/>
    </div>  
  )
};

export default App;