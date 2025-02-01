import React from 'react';
import CommonChat from '../components/CommonChat';
import '../styles/CommunityPage.css';

const CommunityPage = () => {
  return (
    <div className="community-page">
      <div className="community-header">
        <h1>Community Discussion</h1>
        <p>Join the conversation with students and mentors</p>
      </div>
      <CommonChat />
    </div>
  );
};

export default CommunityPage;
