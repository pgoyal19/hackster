import React from 'react';
import './About.css';
import AOS from 'aos';
import logo from '/logo2.jpg'; 
import 'aos/dist/aos.css';

const About = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in ms
      once: true,    // Only animate once per element
    });
  }, []);

  return (
    <section id="about" className="about-section">
      {/* Floating smoky shapes */}
      <div className="about-shape shape1"></div>
      <div className="about-shape shape2"></div>
      <div className="about-shape shape3"></div>
      <div className="about-shape shape4"></div>
      <div className="about-shape shape5"></div>
      <div className="about-container" data-aos="fade-up">
        <div className="about-image">
          <img src={logo} alt="logo" />
        </div>
        <div className="about-content">
          <p className="description">
            The Gangster of Hackathons.

Hackster is not your average coding marathon. It's a 9-hour wild ride into the world of creative chaos, problem-solving, and team hustle — all under the code of the gang.
          </p>

          <div className="quote-box">
            <em>You scheme. You plan. You execute.</em>
          </div>

          <div className="info-grid">
            <div className="info-box">
              <h4>📅 Dates</h4>
              <p>September 20, 2025</p>
            </div>
            <div className="info-box">
              <h4>📍 Venue</h4>
              <p>HMRITM, DELHI</p>
            </div>
            <div className="info-box">
              <h4>⏰ Duration</h4>
              <p>9:00 AM to 6:00 PM</p>
            </div>
            <div className="info-box">
              <h4>👥 Participants</h4>
              <p>Open to all</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
