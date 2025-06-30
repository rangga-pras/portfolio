import React from 'react';
import { Navbar } from './components/Navbar';
import { ScrollToTop } from "./components/ui/ScrollToTop";
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import Projects from './components/Projects';
import { Blogs } from "./components/Blogs";
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';



function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop/>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Blogs />
      <Education />
      <Contact/>
      <Footer />
    </>
  );
}

export default App;
