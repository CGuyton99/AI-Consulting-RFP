import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./style.css";
import { IconContext } from "react-icons";
import MilwaukeeCountyLogo from "./MilwaukeeCountyLogo.png";
import Weather from "./api-data";
import DateTime from "./dateTime";
import Home from "../../pages/home";

function weatherBalloon(cityID) {
  var key = "9f38a7c7b67613bc2db781cf36be458f";
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?id=" +
      cityID +
      "&appid=" +
      key
  )
    .then(function (resp) {
      return resp.json();
    }) // Convert data to json
    .then(function (data) {
      drawWeather(data);
    })
    .catch(function () {
      // catch any errors
    });
}

window.onload = function () {
  weatherBalloon(5263058);
};

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="overlay">
      <div className="centeralign">
        <Link to="/home">
          <img src={MilwaukeeCountyLogo} className="resize"></img>
        </Link>
      </div>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div className="text-right">
            <DateTime />
            <div id="weather">
              <p id="temp"></p>
            </div>{" "}
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

function drawWeather(d) {
  var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
  var fahrenheit = Math.round((parseFloat(d.main.temp) - 273.15) * 1.8 + 32);

  document.getElementById("temp").innerHTML = fahrenheit + "&deg;" + "F";
}

export default Navbar;
