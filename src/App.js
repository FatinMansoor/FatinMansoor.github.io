//import React from "react";
import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Introduction from "./components/introduction";
import About from "./components/about";
import Projects from "./components/projects";
import Footer from  "./components/footer";
import Contact from "./components/contact";
import "./styles/global.css";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme")==="dark";
  });

  const toggleDarkMode = () =>{
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  useEffect (() => {
    if(darkMode){
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else{
      document.body.classList.add("light-mode");
      document.body.classList.add("dark-mode");
    }
  }, [darkMode]);

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
