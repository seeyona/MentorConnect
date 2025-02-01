import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/DomainGrid.css';

const domains = [
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    icon: 'shield-alt',
    color: '#e74c3c'
  },
  {
    id: 'mern',
    name: 'MERN Stack',
    icon: 'code',
    color: '#2ecc71'
  },
  {
    id: 'web3',
    name: 'Web3',
    icon: 'link',
    color: '#9b59b6'
  },
  {
    id: 'ml',
    name: 'Machine Learning',
    icon: 'brain',
    color: '#3498db'
  }
];

const DomainGrid = () => {
  return (
    <div className="domain-container">
      <div className="college-select">
        <select defaultValue="" className="college-dropdown">
          <option value="" disabled>Select Your College</option>
          <option value="college1">Sahrdaya college of Engineering</option>
          <option value="college2">Chirst Collage</option>
          <option value="college3">IIT Delhi</option>
          {/* Add more colleges as needed */}
        </select>
      </div>
      
      <div className="domains-grid">
        {domains.map(domain => (
          <Link to={`/domain/${domain.id}`} key={domain.id} className="domain-card" style={{ '--domain-color': domain.color }}>
            <div className="domain-icon">
              <i className={`fas fa-${domain.icon}`}></i>
            </div>
            <h3>{domain.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DomainGrid;
