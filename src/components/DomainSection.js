import React from 'react';
import MentorCard from './MentorCard';
import '../styles/DomainSection.css';

const DomainSection = ({ domain, mentors = [] }) => {
  // Ensure mentors is always an array
  const mentorsList = Array.isArray(mentors) ? mentors : [];

  return (
    <div className="domain-section">
      <h2 className="domain-title">{domain}</h2>
      <div className="mentors-grid">
        {mentorsList.length > 0 ? (
          mentorsList.map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))
        ) : (
          <div className="no-mentors">
            <p>No mentors available for {domain} at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DomainSection;
