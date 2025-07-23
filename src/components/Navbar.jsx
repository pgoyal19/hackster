import React from 'react';
import './Hero.css'; // Reuse the navbar styles from Hero.css

const Navbar = () => {
  return (
    <header className="navbar">
      <a href="#hero" className="brand">Hackster</a>
      <nav>
        <a href="#about" className="active">About</a>
        <a href="#tracks">Tracks</a>
        <a href="#prize">Prize</a>
        <a href="#sponsors">Sponsors</a>
        <a href="#team">Team</a>
      </nav>
    </header>
  );
};

export default Navbar;
