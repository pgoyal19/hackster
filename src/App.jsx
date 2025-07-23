import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tracks from './components/Tracks';
import PrizePool from './components/PrizePool';
import Sponsors from './components/Sponsors';
import Events from './components/Events';
import Team from './components/Team';
import Judges from './components/Judges';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Tracks />
      <PrizePool />
      <Sponsors />
      <Events />
      <Judges />
      <Team />
      <FAQ />
      <Footer />
    </>
  );
};

export default App;
