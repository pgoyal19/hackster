import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faInfoCircle,
  faCodeBranch,
  faTrophy,
  faHandshake,
  faUsers,
  faBook,
  faDirections
} from '@fortawesome/free-solid-svg-icons';

import {
  faDiscord,
  faInstagram,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section about animate">
          <h2>Hackster</h2>
          <p>
            Yahan code ki duniya mein sachchai aur wafadari ka raaj hai, 
            aur har bug ka anjaam sirf ek hi—<strong>‘game over.’</strong>
          </p>
          <div className="social-icons">
            <a href="https://discord.gg/TTRmcggG" aria-label="Discord">
              <FontAwesomeIcon icon={faDiscord} />
            </a>
            <a href="https://www.instagram.com/hackster_hmritm" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://chat.whatsapp.com/If4uCxRimEO5kEjB69nPcC" aria-label="WhatsApp">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>

        <div className="footer-section contact animate">
          <h3>Contact Us</h3>
          <p><FontAwesomeIcon icon={faEnvelope} /> hackathon@hmritm.ac.in</p>
          <p><FontAwesomeIcon icon={faPhone} /> +91-8076407469</p>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Plot No 326, Bakoli HMRITM Rd, Hamidpur, New Delhi, 110036</p>
        </div>

        <div className="footer-section quick-links animate">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#"><FontAwesomeIcon icon={faInfoCircle} /> About</a></li>
            <li><a href="#"><FontAwesomeIcon icon={faCodeBranch} /> Tracks</a></li>
            <li><a href="#"><FontAwesomeIcon icon={faTrophy} /> Prize Pool</a></li>
            <li><a href="#"><FontAwesomeIcon icon={faHandshake} /> Sponsors</a></li>
            <li><a href="#"><FontAwesomeIcon icon={faUsers} /> Participation</a></li>
            <li><a href="#"><FontAwesomeIcon icon={faBook} /> Code of Conduct</a></li>
          </ul>
        </div>

        <div className="footer-section map-section animate">
          <h3>Find Us</h3>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=..."
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="HMR Institute Location"
            ></iframe>
          </div>
          <a 
            href="https://maps.google.com/?q=HMR+Institute+of+Technology+Management+Delhi"
            target="_blank"
            rel="noopener noreferrer"
            className="directions-link"
          >
            <FontAwesomeIcon icon={faDirections} /> Get Directions
          </a>
        </div>
      </div>

      <hr />

      <div className="footer-bottom animate">
        <p>© 2025 <span className="footer-highlight">Hackster</span> | The Ultimate 9-Hour Hackathon</p>
      </div>
    </footer>
  );
};

export default Footer;
