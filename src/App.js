import React from 'react';
import Home from './pages/home';
import Calendar from './pages/calendar';
import Careers from './pages/careers';
import FNA from './pages/fna';
import directories from './pages/directories';
import Idle from './pages/Idle';
import Nab from './pages/newsAndbulletin';
import { Outlet, Link,BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/nav-bar/navbar';

function App() {
  return (
   <div>
     {/* <Navbar/> */}
     <body>
       <Home/>
     </body>
   </div>
  )
};

export default App;