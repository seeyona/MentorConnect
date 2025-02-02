import React from 'react';
import { useParams, Link } from 'react-router-dom';
import DomainSection from '../components/DomainSection';
import CommonChat from '../components/CommonChat';
import '../styles/DomainPage.css';

const mentorData = {
  cybersecurity: [
    {
      id: 1,
      name: "Sana Mohammad Sahi",
      expertise: "Network Security , Ethical Hacking",
      achievements: "CISSP Certified, 5 years experience"
    },
    {
      id: 2,
      name: "Aaron Thomas",
      expertise: "Penetration Tester",
      achievements: "CEH Certified, Security researcher"
    }
  ],
  mern: [
    {
      id: 3,
      name: "Adhitya K B",
      expertise: "Full Stack Development",
      achievements: "Built 10+ MERN applications"
    }
  ],
  web3: [
    {
      id: 4,
      name: "Adwaith Jayashaker",
      expertise: "Blockchain Development",
      achievements: "Created multiple DeFi projects"
    }
  ],
  ml: [
    {
      id: 5,
      name: "Sana Mohammad Sahi",
      expertise: "Machine Learning",
      achievements: "Published ML research papers"
    }
  ]
};

const DomainPage = () => {
  const { domainName } = useParams();
  const domainId = domainName.toLowerCase();
  
  const domainNames = {
    cybersecurity: 'Cybersecurity',
    mern: 'MERN Stack',
    web3: 'Web3',
    ml: 'Machine Learning'
  };

  if (!domainNames[domainId]) {
    return (
      <div className="domain-page">
        <div className="domain-header">
          <Link to="/" className="back-button">
            <i className="fas fa-arrow-left"></i> Back to Domains
          </Link>
          <h1>Domain Not Found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="domain-page">
      <div className="domain-header">
        <Link to="/" className="back-button">
          <i className="fas fa-arrow-left"></i> Back to Domains
        </Link>
        <h1>{domainNames[domainId]} Mentors</h1>
      </div>
      
      <div className="domain-content">
        <div className="mentors-section">
          <DomainSection 
            domain={domainNames[domainId]} 
            mentors={mentorData[domainId] || []} 
          />
        </div>
        
        <div className="chat-section">
          <CommonChat domainId={domainId} />
        </div>
      </div>
    </div>
  );
};

export default DomainPage;
