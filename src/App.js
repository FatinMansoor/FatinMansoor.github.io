import React from "react";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Introduction />
      <About />
      <Projects />
      <Footer />
      <Contact />
    </>
  );
}

export default App;
