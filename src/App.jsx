import React from "react";
import "@fontsource-variable/roboto";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <About />
      <Project />
      <Skills />
      <Education />
      {/* <Contact /> */}
    </>
  );
}

export default App;
