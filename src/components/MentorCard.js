import React, { useState } from 'react';
import MessageModal from './MessageModal';
import '../styles/MentorCard.css';

const MentorCard = ({ mentor }) => {
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);

  const handleMessageClick = (anonymous) => {
    setIsAnonymous(anonymous);
    setIsMessageModalOpen(true);
  };

  // Ensure achievements is always an array
  const achievements = Array.isArray(mentor?.achievements) ? mentor.achievements : [];

  return (
    <div className="mentor-card">
      <img src={mentor.image || 'https://via.placeholder.com/120'} alt={mentor.name} className="mentor-image" />
      <h3>{mentor.name}</h3>
      <p className="specialty">{mentor.specialty}</p>
      <div className="achievements">
        {achievements.map((achievement, index) => (
          <span key={index} className="achievement-badge">{achievement}</span>
        ))}
      </div>
      <p className="experience">{mentor.experience} years of experience</p>
      
      <div className="social-links">
        <a href="#" target="_blank" rel="noopener noreferrer" className="social-link facebook">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="social-link instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="social-link whatsapp">
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>

      <div className="buttons">
        <button 
          className="contact-btn"
          onClick={() => handleMessageClick(false)}
        >
          Contact Directly
        </button>
        <button 
          className="anonymous-btn"
          onClick={() => handleMessageClick(true)}
        >
          Ask Anonymously
        </button>
      </div>

      <MessageModal
        isOpen={isMessageModalOpen}
        onClose={() => setIsMessageModalOpen(false)}
        mentor={mentor}
        isAnonymous={isAnonymous}
      />
    </div>
  );
};

export default MentorCard;
