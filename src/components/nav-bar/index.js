import React from "react";
import { Nav, NavLink, NavMenu }
from "./nav-bar";

const Navbar = () => {
    return (
        <>
        <Nav>
            <NavMenu>
                <NavLink to ="../pages/home.js" activeStyle>
                    Home
                    </NavLink>
                    <NavLink to="../pages/calendar.js">
                        Calendars/Events
                        </NavLink>
                        <NavLink to = "../pages/careers.js">
                            Careers
                            </NavLink>
                             </NavMenu></Nav></>
    );
};