import React from "react";
import "./index.css";
function Home() {
  return (
    <body className="homeback">
      <main>
        <div className="homesection">
          <div className="center">
            <h1>Quick Links/Map</h1>
          </div>
        </div>
        <div className="homesection">
          <div className="center">
            <h1>Our Vision</h1>
            <p className="linespacing">
              In Milwaukee County, we are taking an all-hands approach to
              realizing our vision that by achieving racial equity, Milwaukee is
              the healthiest county in Wisconsin. Together we will dismantle
              institutional racism in our organization and build up policies,
              practices and a culture that ensures race no longer predicts
              health outcomes, and outcomes for everyone improve.
            </p>
          </div>
        </div>
        <div className="homesection">
          <div className="center">
            <h1>News & Bulletin</h1>
          </div>
          <p className="linespacing">
            <ul>
              <li>test</li>
              <li>test2</li>
              <li>test3</li>
              <li>Longer headline goes here</li>
              <li>
                Long headline that is very big and will wrap in the div goes
                here, is this working? Please let this work
              </li>
              <li>Okay it worked, I'm relieved</li>
              <li>Talking to myself</li>
            </ul>
          </p>
          <div className="right">
            <p><a href="https://aicmke.gtsb.io/">See More</a></p>
          </div>
        </div>
      </main>
    </body>
  );
}
export default Home;
