import React from "react";
import Slider from "../components/image-carousel/Slider";
import {Link} from "react-router-dom"
function Idle() {
  return (
    <Link to="/">
    <body className="idleback">
      <main>
          <div>
            <Slider />
          </div>
          <div className="idletap">
            <h1>TAP TO START</h1>
          </div>
      </main>
    </body>
    </Link>
  );
}
export default Idle;
