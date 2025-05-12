import React from "react";
import "../styles/global.css";

const Introduction = () => {
    return(
        <section className="introduction">
            <img src = "/profile_pic.jpg" alt = "Fatin Sadab Mansoor" className="profile-pic" />
            <div className="introduction-content">
                <h1 className="animated-text">Hi, I am Fatin Sadab Mansoor 👋</h1>
                <p className="animated-text">Third Year Data Science student at Simon Fraser University || Mathematics Enthusiast</p>
                <a href = "#projects" className="button animated-text">View Projects</a>
            </div>
        </section>
    );
};

export default Introduction;