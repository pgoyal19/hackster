import React from 'react';
import './Events.css';
import event1 from '../assets/events/event1.jpeg';
import event2 from '../assets/events/event2.jpeg';
import event3 from '../assets/events/event3.jpeg';
import event4 from '../assets/events/event4.jpeg';
import event5 from '../assets/events/event5.jpeg';
import event6 from '../assets/events/event6.jpeg';
import event7 from '../assets/events/event7.jpeg';
import event8 from '../assets/events/event8.jpeg';
import event9 from '../assets/events/event9.jpeg';

const images = [event1, event2, event3, event4, event5, event6, event7, event8, event9];
const imagesReversed = [...images].reverse();

const Events = () => {
  return (
    <section className="events-section" id="events">
      <h2 className="event-heading">Events Gallery</h2>

      <div className="carousel-container">
        {/* Top carousel - Left to Right */}
        <div className="carousel-track top">
          {[...images, ...images].map((img, i) => (
            <img key={`top-${i}`} src={img} alt={`event ${i}`} className="carousel-image" />
          ))}
        </div>

        {/* Bottom carousel - Right to Left, reversed order */}
        <div className="carousel-track bottom">
          {[...imagesReversed, ...imagesReversed].map((img, i) => (
            <img key={`bottom-${i}`} src={img} alt={`event ${i}`} className="carousel-image" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
