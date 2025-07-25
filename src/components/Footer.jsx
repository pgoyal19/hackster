import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>Hackster</h2>
          <p>Yahan code ki duniya mein sachchai aur wafadari ka raaj hai, aur har bug ka anjaam sirf ek hi—'game over.'</p>
          <div className="social-icons">
            <a href="https://discord.gg/TTRmcggG"><i className="fab fa-discord"></i></a>
            <a href="https://www.instagram.com/hackster_hmritm?igsh=ODN1MmJzdDN1MjZm"><i className="fab fa-instagram"></i></a>
            <a href="https://chat.whatsapp.com/If4uCxRimEO5kEjB69nPcC?mode=r_t"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p><i className="fas fa-envelope"></i>Hackathon@hmritm.ac.in</p>
          <p><i className="fas fa-phone"></i> +91-8076407469</p>
          <p><i className="fas fa-map-marker-alt"></i> Plot No, 326, Bakoli HMRITM Rd, Hamidpur, New Delhi, Delhi, 110036 </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Tracks</a></li>
            <li><a href="#">Prize Pool</a></li>
            <li><a href="#">Sponsors</a></li>
            <li><a href="#">Participation</a></li>
            <li><a href="#">Code of Conduct</a></li>
          </ul>
        </div>

        <div className="footer-section map-section">
          <h3>Find Us</h3>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.7642934087633!2d77.0936!3d28.5562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b85fc2a2d49%3A0x8b4b4b4b4b4b4b4b!2sHMR%20Institute%20of%20Technology%20%26%20Management!5e0!3m2!1sen!2sin!4v1642425885234!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="HMR Institute of Technology Location"
            ></iframe>
          </div>
          <a 
            href="https://maps.google.com/?q=HMR+Institute+of+Technology+Management+Delhi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="directions-link"
          >
            <i className="fas fa-directions"></i> Get Directions
          </a>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>© 2025 Hackster | The Ultimate 9-Hour Hackathon</p>
      </div>
    </footer>
  );
};

export default Footer;