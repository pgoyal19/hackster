import React, { useState } from 'react';
import './PrizePool.css';

const awards = [
  {
    title: "Winning Team",
    emoji: "🥇",
    details: "₹12,000 Cash Prize + Swags + Certificate of Excellence + Networking Opportunities"
  },
  {
    title: "First Runner Up",
    emoji: "🥈",
    details: "₹8,000 Cash Prize + Swags + Certificate of Excellence + Networking Opportunities"
  },
  {
    title: "Second Runner Up",
    emoji: "🥉",
    details: "₹5,000 Cash Prize + Swags + Certificate of Excellence + Networking Opportunities"
  },
];

const specialAwards = [
  {
    title: "Best Freshers Team",
    emoji: "🌱",
    details: "Swags + Certificate of Excellence + Networking Opportunities"
  },
  {
    title: "Best Girl Team",
    emoji: "💻",
    details: "Swags + Certificate of Excellence + Networking Opportunities"
  },
];

const PrizePool = () => {
  const [activeInfo, setActiveInfo] = useState(null);

  return (
    <section className="prize-section" id="prize">
      <h2 className="prize-heading">✨ PRIZE <span>POOL</span> ✨</h2>
      <div className="card-grid">
        {awards.map((award, index) => (
          <div key={index} className="award-card">
            <div className="emoji">{award.emoji}</div>
            <h3>{award.title}</h3>
            <button onClick={() => setActiveInfo(index)}>Know More</button>
            {activeInfo === index && (
              <p className="prize-info">{award.details}</p>
            )}
          </div>
        ))}
      </div>

      <h3 className="special-heading">Special Category Awards</h3>

      <div className="card-grid">
        {specialAwards.map((award, index) => (
          <div key={index} className="award-card">
            <div className="emoji">{award.emoji}</div>
            <h3>{award.title}</h3>
            <button onClick={() => setActiveInfo(index + 3)}>Know More</button>
            {activeInfo === index + 3 && (
              <p className="prize-info">{award.details}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrizePool;
