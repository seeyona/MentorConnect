import React, { useState } from 'react';
import '../styles/MessageModal.css';

const MessageModal = ({ isOpen, onClose, mentor, isAnonymous }) => {
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the message to your backend
    console.log(`Sending ${isAnonymous ? 'anonymous' : 'direct'} message to ${mentor.name}:`, message);
    setMessage('');
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{isAnonymous ? 'Send Anonymous Message' : 'Send Direct Message'}</h2>
        <h3>To: {mentor.name}</h3>
        <form onSubmit={handleSubmit}>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
            rows="6"
          />
          <div className="modal-buttons">
            <button type="submit" className="send-btn">Send Message</button>
            <button type="button" onClick={onClose} className="cancel-btn">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MessageModal;
