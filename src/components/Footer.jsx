import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>Hackster</h2>
          <p>Yahan code ki duniya mein sachchai aur wafadari ka raaj hai, aur har bug ka anjaam sirf ek hi—‘game over.’</p>
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
      </div>

      <hr />

      <div className="footer-bottom">
        <p>© 2025 Hackster | The Ultimate 9-Hour Hackathon</p>
      </div>
    </footer>
  );
};

export default Footer;
