import React, { useState } from 'react';
import './Team.css';

// Placeholder images (replace with actual images in assets if available)
const judges = [
  { name: 'Revealing Soon!', role: 'Revealing Soon!', img: '', linkedin: '#' },
  { name: 'Revealing Soon!', role: 'Revealing Soon!', img: '', linkedin: '#' },
  { name: 'Revealing Soon!', role: 'Revealing Soon!', img: '', linkedin: '#' },
  { name: 'Revealing Soon!', role: 'Revealing Soon!', img: '', linkedin: '#' },
];

const Judges = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="team-section" id="judges">
      <h2 className="team-heading">Judges Panel</h2>
      {!revealed ? (
        <div style={{display: 'flex', justifyContent: 'center', margin: '2rem 0'}}>
          <button className="join-btn" onClick={() => setRevealed(true)}>
            Reveal Judges
          </button>
        </div>
      ) : (
        <div className="team-grid">
          {judges.map((judge, index) => (
            <div key={index} className="team-card">
              <div className="team-image">
                {judge.img ? (
                  <img src={judge.img} alt={judge.name} />
                ) : (
                  <div style={{width: '110px', height: '110px', background: '#222', borderRadius: '50%'}}></div>
                )}
              </div>
              <h3 style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'}}>
                {judge.name}
                {judge.linkedin && judge.linkedin !== '#' && (
                  <a href={judge.linkedin} target="_blank" rel="noopener noreferrer" style={{color: '#0A66C2', fontSize: '1.3em', marginLeft: '0.3em', display: 'inline-flex', alignItems: 'center'}} aria-label="LinkedIn">
                    <i className="fab fa-linkedin"></i>
                  </a>
                )}
              </h3>
              <p>{judge.role}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Judges; 