import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LightRays from './components/LightRays';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Background */}


      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;