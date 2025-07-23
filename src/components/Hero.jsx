import React from 'react';
import './Hero.css';
// import cocDoc from './Hackster COC.docx'; // Not used for public serving

const Hero = () => {
  // Handler for join button
  const handleJoinClick = (e) => {
    e.preventDefault();
    window.open('https://chat.whatsapp.com/If4uCxRimEO5kEjB69nPcC?mode=r_t', '_blank', 'noopener,noreferrer');
  };

  // For best practice, the docx should be in public/assets. If not, instruct user to move it.
  // If you want to force download, use an <a> tag with download attribute.

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
              <button className="register">Register Now</button>
            </a>

          <a href="/assets/Hackster COC.docx" download target="_blank" rel="noopener noreferrer">
            <button className="conduct">Code of Conduct</button>
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
