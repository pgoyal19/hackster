import React from 'react';
import './Team.css';
import palak from '../assets/palak.png';
import ashmit from '../assets/ashmit.png';
import khushi from '../assets/khushi.png';
import mayank from '../assets/mayank.png';
import kushagra from '../assets/kushagra.png';
import jigyasa from '../assets/jigyasa.png';
import ishika from 'src/assets/ishika.jpeg';
import junaid from '../assets/junaid.png';
import aakash from '../assets/aakash.jpeg'
import vansh from '../assets/vansh.png';
import kanak from '../assets/kanak.png';
import abhi from '../assets/abhi.jpg';
// LinkedIn SVG Icon Component
const LinkedInIcon = () => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    style={{ display: 'inline-block', verticalAlign: 'middle' }}
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const teamMembers = [
  { 
    name: 'Palak Goyal', 
    role: 'Lead Organizer', 
    img: palak, 
    linkedin: 'https://www.linkedin.com/in/palak-goyal-924741319/' 
  },
  { 
    name: 'Mayank Gupta', 
    role: 'Tech Head', 
    img: mayank,
    linkedin: 'https://www.linkedin.com/in/mayank-gupta-452701292/' 
  },
  { 
    name: 'Khushi Sirohi', 
    role: 'Tech Head', 
    img: khushi, 
    linkedin: 'https://www.linkedin.com/in/khushi-sirohi-3763a6282/' 
  },
  { 
    name: 'Kanak Sharma', 
    role: 'Tech Head', 
    img: kanak, 
    linkedin: 'https://www.linkedin.com/in/kanak-sharma-a5563b2a0/' 
  },
  { 
    name: 'Kushagra Shukla', 
    role: 'Content Head', 
    img: kushagra, 
    linkedin: 'https://www.linkedin.com/in/kushagra-shukla-22173219b/' 
  },
  { 
    name: 'Ashmit Shekhar', 
    role: 'Social Media Head', 
    img: ashmit, 
    linkedin: 'https://www.linkedin.com/in/ashmit-shekhar-23006b2b0/' 
  },
  { 
    name: 'Ishika Tyagi', 
    role: 'Social Media Head', 
    img: ishika, 
    linkedin: 'https://www.linkedin.com/in/ishika-tyagi-264091331/' 
  },
  { 
    name: 'Jigyasa Shokeen', 
    role: 'Social Media Head', 
    img: jigyasa, 
    linkedin: 'https://www.linkedin.com/in/jigyasa-shokeen-81a306323/' 
  },
  { 
    name: 'Zunaid', 
    role: 'Graphics Head', 
    img:junaid, 
  },
  { 
    name: 'Aakash Raghav', 
    role: 'Graphics Designer', 
    img: aakash, 
    linkedin: 'https://www.linkedin.com/in/aakash-raghav' 
  },
  { 
    name: 'Vansh Gupta', 
    role: 'Coordinator', 
    img: vansh, 
    linkedin: 'https://www.linkedin.com/in/vansh-gupta-29b23129b/' 
  },
  { 
    name: 'Abhinav Jha', 
    role: 'PR Head', 
    img: abhi, 
    linkedin: 'http://www.linkedin.com/in/abhinav-jha-41266b346' 
  },
];

const Team = () => {
  return (
    <section className="team-section" id="team">
      <h2 className="team-heading">Meet the Gang</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <div className="team-image">
              <img src={member.img} alt={member.name} />
            </div>
            <div className="team-info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              {member.linkedin && member.linkedin !== '#' && (
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="linkedin-link"
                  aria-label={`${member.name}'s LinkedIn Profile`}
                  title="View LinkedIn Profile"
                >
                  <LinkedInIcon />
                  <span>LinkedIn</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
