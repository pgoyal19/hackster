import React, { useState } from 'react';
import logo from '/logo2.jpg';
import hamburgerIcon from '../assets/hamburger.png'; // Make sure the path is correct
import './Hero.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navbar">
      <div className="logo-wrapper">
        <img src={logo} alt="logo" className="logo" />
      </div>

      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href="#about" className="active">About</a>
        <a href="#tracks">Tracks</a>
        <a href="#prize">Prize</a>
        <a href="#sponsors">Sponsors</a>
        <a href="#team">Team</a>
      </nav>

      {/* Hamburger Icon (mobile only) */}
      <div className="hamburger" onClick={toggleMenu}>
        <img src={hamburgerIcon} alt="Menu" className="hamburger-icon" />
      </div>
    </header>
  );
};

export default Navbar;
