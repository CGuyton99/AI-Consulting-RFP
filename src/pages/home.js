import React from "react";
import "./index.css";
import Map from "../assets/Map.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <body className="homeback">
      <main>
        <div className="sectiongrids">
          <div className="homesection">
            <div className="center">
              <h1>Quick Links/Map</h1>
            </div>
            <div className="imageContainer">
              <img tabindex="1" src={Map} className="map"></img>
            </div>
            <p className="linespacing">
              <ul>
                <li>
                  <Link to="/careers">Careers</Link>
                </li>
                <li>
                  <Link to="/calendar">Calendar & Events</Link>
                </li>
                <li>
                  <Link to="/directories">Directories</Link>
                </li>
              </ul>
            </p>
          </div>
          <div className="homesection">
            <div className="center">
              <h1>Our Vision</h1>
              <p className="linespacing">
                In Milwaukee County, we are taking an all-hands approach to
                realizing our vision that by achieving racial equity, Milwaukee
                is the healthiest county in Wisconsin. Together we will
                dismantle institutional racism in our organization and build up
                policies, practices and a culture that ensures race no longer
                predicts health outcomes, and outcomes for everyone improve.
              </p>
            </div>
          </div>
          <div className="homesection">
            <div className="center">
              <h1>News & Bulletin</h1>
            </div>
            <p className="linespacing">
              <ul>
                <li>
                  County Supervisors Denounce Supreme Court Decision to Overturn
                  Roe v. Wade
                </li>
                <li>
                  Chairwoman Nicholson Proposal to Reimagine County Board
                  Committees Adopted by County Board
                </li>
                <li>
                  County Board Unanimously Adopts Resolution Repudiating
                  Discriminatory Covenants
                </li>
              </ul>
            </p>
            <div className="right">
              <p>
                <a href="https://aicmke.gtsb.io/blog/news">See More</a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
}

export default Home;
