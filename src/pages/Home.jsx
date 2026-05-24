import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';

const Home = ({ onProjectClick }) => {
  return (
    <>
      <Hero />
      <Projects onProjectClick={onProjectClick} />
      <About />
      <Contact />
    </>
  );
};

export default Home;
