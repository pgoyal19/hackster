import React from 'react';
import './Hero.css';

const Hero = () => {
  const handleJoinClick = (e) => {
    e.preventDefault();
    window.open('https://chat.whatsapp.com/If4uCxRimEO5kEjB69nPcC?mode=r_t', '_blank', 'noopener,noreferrer');
  };


  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>Hack<span>ster</span></h1>
        <p className="subtitle">The Gangster of Hackathons — where tech meets the thrill of the heist.</p>
        <button onClick={handleJoinClick} className="join-btn">💬 Join WhatsApp Group</button>

        <div className="cta-buttons">
             <a 
                href="https://unstop.com/o/H6oD3XT?lb=9uWnCZQk&utm_medium=Share&utm_source=shortUrl" 
                target="_blank" 
                rel="noopener noreferrer"
              >
              <button className="register"><b>Register on Unstop</b></button>
            </a>

          <a href="https://drive.google.com/file/d/1d47-6tdsVg8i56LOtFD5G0wQVsuOtrXH/view?usp=drive_link"  target="_blank" rel="noopener noreferrer">
            <button className="conduct"><b>Code of Conduct</b></button>
          </a>
        </div>

      </div>

      <div className="floating-shapes">
        <div className="triangle"></div>
        <div className="square"></div>
        <div className="circle"></div>
      </div>
    </section>
  );
};

export default Hero;
