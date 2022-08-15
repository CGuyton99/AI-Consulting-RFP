import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import "./index.css";

function Calendar() {
  return (
    <body className="calendarback">
      <main>
        <div className="sectiongridscareers">
        <div className="calendarsection">
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            aspectRatio={1.35}
          />
        </div>
        <div className="calendarsection">
          <ul>
            <h1 className="center">Upcoming Events</h1>
            <div className="linespacing">
              <div className="textsize">
              <li>MPS Summer Playground Program, at Select Parks</li>
              <li>The Vine Humboldt Beer Garden</li>
              <li>Whitnall Beer Garden</li>
              <li>Traveling Beer Garden at Grant Park</li>
              <li>
                Traveling Beer Garden at Juneau Park - 100th Stop on the Tour!
              </li>
              <li>Chill on the Hill, at Humboldt Park</li>
            </div>
            </div>
          </ul>
          <div className="right">
            <p>See More</p>
          </div>
        </div>
        </div>
      </main>
    </body>
  );
}
export default Calendar;
