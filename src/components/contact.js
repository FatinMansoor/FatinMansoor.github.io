const Contact = () => {
    return (
        <section id = "Contact">
            <h2>Contact Me</h2>
            <p> Email: <a href ="mailto: aaraf2001@gmail.com"> aaraf2001@gmail.com</a> / <a href= "mailto:fsm3@sfu.ca">fsm3@sfu.ca</a></p>
            <p> LinkedIn: <a href= "https://www.linkedin.com/in/fatin-mansoor-09001b161/" target = "_blank" rel ="noopener noreferrer">https://www.linkedin.com/in/fatin-mansoor-09001b161/</a></p>
            <p> GitHub: <a href = "https://github.com/FatinMansoor" target="_blank" rel = "noopener noreferrer">https://github.com/FatinMansoor</a></p>

            <div className="cv-container">
                <a href ="/my_cv.pdf" download = "FatinMansoor_CV.pdf" className="cv-button">
                    Download CV
                </a>
            </div>
        </section>
    );
};

export default Contact;