import React from "react";
//import "./Introduction.css";
import "../styles/global.css";

const Introduction = () => {
    return(
        <section className="introduction">
            <h1>Hi, I am Fatin Sadab Mansoor 👋</h1>
            <p>Second Year Computer Science student at Simon Fraser University || Mathematics Enthusiast</p>
            <a href = "#projects" className="button">View Projects</a>
        </section>
    );
};

export default Introduction;