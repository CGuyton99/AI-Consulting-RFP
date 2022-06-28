import React from "react";
import "./index.css";

function Nab() {
  return (
    <body className="nabback">
      <main>
        <div className="nabsection">
          <div className="center">
            <h1>News & Bulletin</h1>
          </div>
          <p>
            <ul>
              <li>Upcoming changes to kiosk systems county-wide!</li>
              <li>
                Milwaukee County Executive David Crowley Marks Two Years in
                Office, Observes Victories in Equity
              </li>
              <li>
                County Supervisors Congratulate José G. Pérez on Election as
                Common Council President
              </li>
              <li>
                Supervisor Martin Praises MCTS Drivers, Calls on Community to
                Act Respectfully on Public Transit
              </li>
              <li>
                Milwaukee Recognized with Nation's Lowest Unsheltered Homeless
                Population
              </li>
              <li>
                County Executive David Crowley Thanks President Biden for
                Lowering Energy Costs for Milwaukee Count
              </li>
            </ul>
            <div className="right"><a href="https://aicmke.gtsb.io/">Load More</a></div>
          </p>
        </div>
      </main>
    </body>
  );
}
export default Nab;
