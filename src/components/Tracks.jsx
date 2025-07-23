import React from 'react';
import './Tracks.css';

const tracks = [
  {
    title: 'Web3',
    icon: '🌐',
    description: "Empowering people through decentralized ownership and trustless technology."
  },
  {
    title: 'Cloud Computing',
    icon: '☁️',
    description: "On-demand infrastructure for scalable, resilient digital solutions."
  },
  {
    title: 'Cyber security',
    icon: '🔗',
    description: 'Work on secure networks for the future.'
  },
  {
    title: 'Artificial Intelligence',
    icon: '🧠',
    description: "Turning data into decisions through smart, self-learning systems."
  },
  {
    title: 'Health-Tech',
    icon: '🫀',
    description: "Build applications for people's health."
  },
  {
    title: 'Ed-Tech',
    icon: '📖',
    description: "Transforming how the world learns—one digital classroom at a time."
  },
  {
    title: 'Fin-Tech',
    icon: '💰',
    description: "Reimagining money for the digital age."
  },
  {
    title: 'Agri-Tech',
    icon: '🌿',
    description: "Bringing data-driven decisions to the heart of agriculture."
  },
  {
    title: 'Space-Tech',
    icon: '🪐',
    description: 'Pushing boundaries beyond Earth through innovation and exploration.'
  },
  {
    title: 'Gaming and Esports',
    icon: '🎮',
    description: 'Shaping the future of interactive entertainment and competition.'
  },
  {
    title: 'Sustainability & Social Impact',
    icon: '🌍',
    description: 'Use tech to drive change.'
  },
  {
    title: 'Open Innovation',
    icon: '✨',
    description: 'Any groundbreaking idea is welcome!'
  }
];

const Tracks = () => {
  return (
    <section className="tracks-section" id="tracks">
      <h2 className="tracks-heading">Themed Tracks & Open Innovation</h2>
      <div className="tracks-grid">
        {tracks.map((track, index) => (
          <div
            key={index}
            className="track-card"
            style={{ '--delay': `${index * 0.12}s` }}
          >
            <div className="track-icon">{track.icon}</div>
            <h3>{track.title}</h3>
            <p>{track.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tracks;
