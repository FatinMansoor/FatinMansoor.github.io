import React from "react";
//import "./Navbar.css";
import "../styles/global.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2>My Portfolio</h2>
            <ul>
                <li><a href = "#about">About</a></li>
                <li><a href = "#projects">Project</a></li>
                <li><a href = "#contact">Contact</a></li>
            </ul>
        </nav>
    );

};

export default Navbar;