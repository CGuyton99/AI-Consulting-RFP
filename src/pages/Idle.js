import React from "react";
import "./index.css";
import Slider from "../components/image-carousel/Slider";

function Idle() {
  return (
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
  );
}
export default Idle;
