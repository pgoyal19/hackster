import React, { useState } from 'react';
import './FAQ.css';
import faqImg from '/faq.png'; // Ensure this path is correct or place 'faq.png' in 'public/'

const faqs = [
  {
    question: "What is Hackster?",
    answer: "Hackster is a 9-hour hackathon that brings together creative minds to solve real-world problems through technology. It's a platform for innovation, learning, and collaboration.",
  },
  {
    question: "Who can participate?",
    answer: "Any student currently enrolled in a college/university can participate. Both undergraduate and postgraduate students are welcome.",
  },
  {
    question: "What's the team size?",
    answer: "Teams can have 2-4 members. Solo participation is not allowed.",
  },
  {
    question: "Is accommodation provided?",
    answer: "The event is a 9-hour long hackathon, so accommodation is not provided. Participants are expected to make their own arrangements.",
  },
  {
    question: "Is it free to participate?",
    answer: "Yes, participation is completely free! We believe in making innovation accessible to everyone.",
  },
  {
    question: "What should I bring?",
    answer: "Bring your laptop, charger, student ID, and lots of enthusiasm! We'll provide the rest.",
  },
  {
    question: "Are there participation certificates?",
    answer: "Yes, all participants who successfully submit their projects before the deadline will receive a participation certificate. Winners will receive a winner's certificate.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (idx) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="faqs-section">
      <h3 className="section-subtitle">FAQs</h3>
      <div className="faq-container">
        {faqs.map((faq, idx) => (
          <div
            className={`faq-item ${activeIndex === idx ? 'active' : ''}`}
            key={idx}
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className="faq-question" onClick={() => toggleFAQ(idx)}>
              <img src={faqImg} alt="faq icon" className="faq-image" />
              <span className="faq-text">{faq.question}</span>
              <span className="faq-icon">{activeIndex === idx ? '×' : '+'}</span>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
