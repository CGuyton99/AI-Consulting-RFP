import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import "./index.css";

function Calendar() {
  return (
    <body className="calendarback">
      <main>
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
            </div>
          </ul>
          <div className="right">
            <p>See More</p>
          </div>
        </div>
      </main>
    </body>
  );
}
export default Calendar;
