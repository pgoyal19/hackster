import React from 'react';
import './Sponsors.css';

// Example: Use string paths for logos in public or import images as needed
const sponsors = [
  {
    title: 'Event Partner',
    items: [{ name: 'Genesis', logo: 'https://ugc.production.linktr.ee/566e80f8-c603-4696-843b-b2f489c9f3a8_IMG-20250516-WA0010-2-.jpeg?io=true&size=avatar-v3_0' }],
  },
  {
    title: 'Entertainment Partner',
    items: [{ name: 'Smaash', logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6fE2QC5vl_0VqYezN-jS-tSWHooybht3TAw&s" }],
  },
 
  {
    title: 'Education Partner',
    items: [{ name: 'Smaash', logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3yy-GITWxZDmkSFu2TwU3dzMsaxhtanqB5w&s" }],
  },
 
  {
    title: 'Education Partner',
    items: [{ name: 'Physics Wallah', logo: "data:image/png;base64,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" }],
  },
  {
    title: 'Community Partner',
    items: [{ name: 'Geek Room', logo: 'https://www.geekroom.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTransparent%20logo.4261b4ac.png&w=128&q=75' }],
  },
  
];

const Sponsors = () => {
  return (
    <section className="sponsor-section" id="sponsors">
      <h2 className="sponsor-heading">OUR SPONSORS</h2>
      <div className="sponsor-grid">
        {sponsors.map((category, idx) => (
          <div key={idx} className="sponsor-category">
            <h3>{category.title}</h3>
            <div className="sponsor-items">
              {category.items.map((item, i) => (
                <div key={i} className="sponsor-card">
                  <img src={item.logo} alt={item.name} />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
