import React from "react";
import { Link } from "react-router-dom";
import Poster1 from "../assets/Poster1.png";
import Poster2 from "../assets/Poster2.png";
import Poster3 from "../assets/Poster3.png";
import Poster4 from "../assets/Poster4.png";
import Poster5 from "../assets/Poster5.png";
import Poster6 from "../assets/Poster6.png";
import "../components/image-carousel/Slider.css";
function Idle() {
  return (
    <Link to="/home">
      <body className="idleback">
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <img src={Poster1} />
            </div>
            <div className="slide">
              {" "}
              <img src={Poster2} />
            </div>
            <div className="slide">
              {" "}
              <img src={Poster3} />
            </div>
            <div className="slide">
              {" "}
              <img src={Poster4} />
            </div>
            <div className="slide">
              {" "}
              <img src={Poster5} />
            </div>
            <div className="slide">
              {" "}
              <img src={Poster6} />
            </div>
            {/* //Same images again */}
            <div className="slide">
              <img src={Poster1} />
            </div>
            <div className="slide">
              {" "}
              <img src={Poster2} />
            </div>
            <div className="slide">
              {" "}
              <img src={Poster3} />
            </div>
            <div className="slide">
              {" "}
              <img src={Poster4} />
            </div>
            <div className="slide">
              {" "}
              <img src={Poster5} />
            </div>
            <div className="slide">
              {" "}
              <img src={Poster6} />
            </div>
          </div>
        </div>
        <div className="idletap">
          <h1>TAP TO START</h1>
        </div>
      </body>
    </Link>
  );
}
export default Idle;
