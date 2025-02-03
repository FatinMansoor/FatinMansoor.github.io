import React, { useState } from "react";
//import "./Navbar.css";
import "../styles/global.css";

const Navbar = () => {
    const[darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle ("dark-mode", !darkMode);
    };

    return (
        <nav className="navbar">
            <h1> My Portfolio </h1>
           <ul className="nav-links">
                <li><a href = "#about">About</a></li>
                <li><a href = "#projects">Projects</a></li>
                <li><a href = "#contact">Contact</a></li>
            </ul>
            <button onClick = {toggleDarkMode} className="dark-mode-toggle">
                {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
        </nav>
    );
};

export default Navbar;