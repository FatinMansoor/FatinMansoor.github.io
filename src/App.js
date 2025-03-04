//import React from "react";
import Navbar from "./components/navbar";
import Introduction from "./components/introduction";
import About from "./components/about";
import Projects from "./components/projects";
import Footer from  "./components/footer";
import Contact from "./components/contact";
import Education from "./components/education";
import "./styles/global.css";

function App() {
  return (
    <div>
      <Navbar />
      <div>
          <Introduction />
          <About />
          <Projects />
          <Education />
          <Contact />
          <Footer />
      </div>
    </div>
  );
}

export default App;
