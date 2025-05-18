import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-950 text-white font-sans scroll-smooth">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
