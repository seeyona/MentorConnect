import React, { useState } from 'react';
import '../styles/CommonChat.css';

const CommonChat = ({ domainId }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: 'Alex Chen',
      text: domainId === 'web3' ? 'Anyone working on interesting DeFi projects?' : 'Anyone interested in learning about network security?',
      timestamp: '10:30 AM',
      isAnonymous: false
    },
    {
      id: 2,
      user: 'Anonymous Student',
      text: domainId === 'web3' ? 'How do I get started with Smart Contracts?' : 'How do I get started with React.js?',
      timestamp: '10:35 AM',
      isAnonymous: true
    }
  ]);
  const [isAnonymous, setIsAnonymous] = useState(false);

  // Sample online mentors data
  const onlineMentors = [
    {
      id: 1,
      name: 'Sana Mohammad Sahi',
      specialty: 'Machine Learning Expert',
      isOnline: true
    },
    {
      id: 2,
      name: 'Adwaith Jayashaker',
      specialty: 'Web3 Developer',
      isOnline: true
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      user: isAnonymous ? 'Anonymous Student' : 'Student Name',
      text: message,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isAnonymous
    };

    setMessages([...messages, newMessage]);
    setMessage('');
  };

  const getDomainTitle = () => {
    const titles = {
      cybersecurity: 'Cybersecurity',
      mern: 'MERN Stack',
      web3: 'Web3',
      ml: 'Machine Learning'
    };
    return titles[domainId] || 'Community';
  };

  return (
    <div className="common-chat-container">
      <div className="chat-header">
        <h2>{getDomainTitle()} Discussion</h2>
      </div>

      <div className="online-mentors-section">
        <h3>Online Mentors ({onlineMentors.length})</h3>
        <div className="online-mentors-list">
          {onlineMentors.map(mentor => (
            <div key={mentor.id} className="online-mentor">
              <div className="mentor-info">
                <span className="online-status"></span>
                <span className="mentor-name">{mentor.name}</span>
                <span className="mentor-specialty">{mentor.specialty}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="messages-container">
        {messages.map(msg => (
          <div key={msg.id} className={`message ${msg.isAnonymous ? 'anonymous' : ''}`}>
            <div className="message-header">
              <span className="user-name">{msg.user}</span>
              <span className="timestamp">{msg.timestamp}</span>
            </div>
            <p className="message-text">{msg.text}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="message-form">
        <div className="anonymous-toggle">
          <label>
            <input
              type="checkbox"
              checked={isAnonymous}
              onChange={(e) => setIsAnonymous(e.target.checked)}
            />
            Post Anonymously
          </label>
        </div>
        <div className="input-group">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={`Ask a question about ${getDomainTitle()}...`}
            className="message-input"
          />
          <button type="submit" className="send-button">
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommonChat;
