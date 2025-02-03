import React from "react";
import "../styles/global.css";

const Introduction = () => {
    return(
        <section className="introduction">
            <img src = "/profile_pic.jpg" alt = "Fatin Sadab Mansoor" className="profile-pic" />
            <h1 className="animated-text">Hi, I am Fatin Sadab Mansoor 👋</h1>
            <p className="animated-text">Second Year Computer Science student at Simon Fraser University || Mathematics Enthusiast</p>
            <a href = "#projects" className="button animated-text">View Projects</a>
        </section>
    );
};

export default Introduction;