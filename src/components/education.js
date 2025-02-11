import React from "react";

const Education = () => {
    return(
        <section id = "education">
            <h2>Education</h2>
            <div className="education-entry">
                <h3>
                    <a href = "https://www.sfu.ca/" target = "_blank" rel = "noopener noreferrer" style = {{textDecoration: "none", color: "#ffa500"}}>
                    Simon Fraser University
                    </a>
                </h3>
                <p>2022 - Present</p>
                <p>Bachelor of Applied Science in Computer Science</p>
            </div>

            <div className="education-entry">
                <h3> 
                    <a href = "https://southbreezeschoolbd.com/" target="_blank" rel = "noopener noreferrer" style = {{textDecoration: "none", color: "#ffa500"}}>
                    South Breeze School
                    </a>
                </h3>
                <p> 2006-2019</p>
                <p> High School Diploma</p>
            </div>
        </section>
    );
};

export default Education;