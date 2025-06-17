import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import MumbaiProjects from './components/MumbaiProjects';
import KolkataProjects from './components/KolkataProjects';
import Donate from './components/Donate';
import SignIn from './components/SignIn';
import Profile from './components/Profile';
import VictimForm from './components/VictimForm';
import ExistingVictims from './components/ExistingVictims';
import AddEvent from './components/AddEvent';
import ReIntegration from './components/ReIntegration';
import { useAuth } from './context/AuthContext';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function ActionButtons() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Hide buttons if we're on the add-victim, existing-victims, or events page
  if (location.pathname === '/add-victim' || location.pathname === '/existing-victims' || location.pathname === '/add-event' || location.pathname === '/events' || location.pathname === '/re-integration') {
    return null;
  }

  return (
    <div className="action-buttons">
      <button className="action-button add-victim-button" onClick={() => navigate('/add-victim')}>
        <span className="add-icon">+</span>
        Add Victim
      </button>
      <button className="action-button view-victims-button" onClick={() => navigate('/existing-victims')}>
        <span className="view-icon">👥</span>
        Existing Victims
      </button>
      <button className="action-button re-integration-button" onClick={() => navigate('/re-integration')}>
        <span className="integration-icon">🔄</span>
        Re Integration
      </button>
      <button className="action-button add-event-button" onClick={() => navigate('/add-event')}>
        <span className="event-icon">📅</span>
        Add Event
      </button>
    </div>
  );
}

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/projects/mumbai" element={<MumbaiProjects />} />
          <Route path="/projects/kolkata" element={<KolkataProjects />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/add-victim" element={<VictimForm />} />
          <Route path="/existing-victims" element={<ExistingVictims />} />
          <Route path="/add-event" element={<AddEvent />} />
          <Route path="/events" element={<div>Events Page</div>} />
          <Route path="/re-integration" element={<ReIntegration />} />
        </Routes>
        {isAuthenticated && <ActionButtons />}
      </div>
    </Router>
  );
}

export default App;
