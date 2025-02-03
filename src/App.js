//import React from "react";
import React, { useState } from "react";
import Navbar from "./components/navbar";
import Introduction from "./components/introduction";
import About from "./components/about";
import Projects from "./components/projects";
import Footer from  "./components/footer";
import Contact from "./components/contact";
import "./styles/global.css";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Navbar toggleDarkMode = {toggleDarkMode} />
      <Introduction />
      <About />
      <Projects />
      <Footer />
      <Contact />
    </div>
  );
}

export default App;
