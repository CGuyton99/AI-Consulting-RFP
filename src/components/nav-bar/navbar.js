import React from 'react'
import "./style.css";

/*function navbar() {
  return (
	<nav>
    <h3>
      Logo
    </h3>
        <ul>
          <li>Home</li>
          <li>Calendar</li>
          <li>Careers</li>
          <li>Directories</li>
          <li>News and Bulletin</li>
          <li>Food and Amenities</li>
        </ul>
  </nav>
  )
}

export default navbar*/

import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/calendar">
        Calendar
      </a>

      <a className="menu-item" href="/careers">
        Careers
      </a>

      <a className="menu-item" href="/directories">
        Directory
      </a>

      <a className="menu-item" href="/fna">
        Food & Amenities
      </a>

      <a className="menu-item" href="/newsAndbulletin">
        News & Bulletin
      </a>
    </Menu>
  );
};