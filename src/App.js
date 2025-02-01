import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Import Pages
import CommunityPage from './pages/CommunityPage';
import DomainPage from './pages/DomainPage';

// Import Components
// import Navbar from './components/Navbar';
import CommonChat from './components/CommonChat';
import DomainGrid from './components/DomainGrid';
import DomainSection from './components/DomainSection';
import MentorCard from './components/MentorCard';
import MessageModal from './components/MessageModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState(null);

  const handleMentorSelect = (mentor) => {
    setSelectedMentor(mentor);
    setIsModalOpen(true);
  };

  return (
    <Router>
      <div className="app">
        {/* <Navbar /> */}
        <nav className="navbar">
          <div className="nav-brand">
            <Link to="/">TechMentor</Link>
          </div>
          <div className="nav-links">
            <Link to="/">Domains</Link>
            <Link to="/community">Community</Link>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<DomainGrid />} />
            <Route 
              path="/domain/:domainName" 
              element={<DomainPage onMentorSelect={handleMentorSelect} />} 
            />
            <Route path="/community" element={<CommunityPage />} />
          </Routes>
        </main>

        {isModalOpen && selectedMentor && (
          <MessageModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            mentor={selectedMentor}
          />
        )}
      </div>
    </Router>
  );
}

export default App;