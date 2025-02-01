import React from "react";
import Navbar from "./components/navbar";
import Introduction from "./components/introduction";
import About from "./components/about";
import Projects from "./components/projects";
import Footer from  "./components/footer";
import Contact from "./components/contact";

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
