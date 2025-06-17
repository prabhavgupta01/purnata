import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Home.css';

function Home() {
  const location = useLocation();
  const [notification, setNotification] = useState('');

  useEffect(() => {
    // Check for notification in navigation state
    if (location.state?.notification) {
      setNotification(location.state.notification);
      // Clear the notification after 5 seconds
      const timer = setTimeout(() => {
        setNotification('');
        // Clear the navigation state
        window.history.replaceState({}, document.title);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [location.state]);

  return (
    <div className="home-container">
      {notification && (
        <div className="notification-message">
          {notification}
        </div>
      )}
      <div className="hero-section">
        <h1>Welcome to Purnata</h1>
        <p>Together we can make a difference in preventing human trafficking</p>
      </div>
      <div className="content-section">
        <div className="mission-statement">
          <h2>Our Mission</h2>
          <p>
            Purnata is dedicated to preventing human trafficking through awareness,
            education, and direct intervention. We work tirelessly to protect
            vulnerable individuals and provide support to survivors.
          </p>
        </div>
        <div className="impact-stats">
          <h2>Our Impact</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <h3>Lives Protected</h3>
              <p>1000+</p>
            </div>
            <div className="stat-item">
              <h3>Communities Reached</h3>
              <p>50+</p>
            </div>
            <div className="stat-item">
              <h3>Success Rate</h3>
              <p>95%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home; 