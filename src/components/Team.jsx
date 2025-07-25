
import React from 'react';
import './Team.css';
import palak from '../assets/palak.png';
import ashmit from '../assets/ashmit.png';
import khushi from '../assets/khushi.png';
import mayank from '../assets/mayank.png';
import kushagra from '../assets/kushagra.png';
import jigyasa from '../assets/jigyasa.png';
import junaid from '../assets/junaid.png';
import vansh from '../assets/vansh.png';
import kanak from '../assets/kanak.png';

const teamMembers = [
  { name: 'Palak Goyal', role: 'Lead Organizer', img: palak, linkedin: 'https://www.linkedin.com/in/palak-goyal-924741319/' },
  { name: 'Mayank Gupta', role: 'Tech Head', img: mayank, linkedin: 'https://www.linkedin.com/in/mayank-gupta-452701292/' },
  { name: 'Khushi Sirohi', role: 'Tech Head', img: khushi, linkedin: 'https://www.linkedin.com/in/khushi-sirohi-3763a6282/' },
  { name: 'Kanak Sharma', role: 'Tech Head', img: kanak, linkedin: 'https://www.linkedin.com/in/kanak-sharma-a5563b2a0/' },
  { name: 'Kushagra Shukla', role: 'Content Head', img: kushagra, linkedin: 'https://www.linkedin.com/in/kushagra-shukla-22173219b/' },
  { name: 'Ashmit Shekhar', role: 'Social Media Head', img: ashmit, linkedin: 'https://www.linkedin.com/in/ashmit-shekhar-23006b2b0/' },
  { name: 'Jigyasa Shokeen', role: 'Social Media Head', img: jigyasa, linkedin: 'https://www.linkedin.com/in/jigyasa-shokeen-81a306323/' },
  { name: 'Zunaid', role: 'Graphics Head', img: junaid,  },
  { name: 'Vansh Gupta', role: 'Coordinator', img: vansh, linkedin: 'https://www.linkedin.com/in/vansh-gupta-29b23129b/' },
];

const Team = () => {
  return (
    <section className="team-section" id="team">
      <h2 className="team-heading">Meet the Gang</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <div className="team-image">
              {member.img ? (
                <img src={member.img} alt={member.name} />
              ) : (
                <div style={{width: '110px', height: '110px', background: '#222', borderRadius: '50%'}}></div>
              )}
            </div>
            <h3 style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'}}>
              {member.name}
              {member.linkedin && member.linkedin !== '#' && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{color: '#0A66C2', fontSize: '1.3em', marginLeft: '0.3em', display: 'inline-flex', alignItems: 'center'}} aria-label="LinkedIn">
                  <i className="fab fa-linkedin"></i>
                </a>
              )}
            </h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
