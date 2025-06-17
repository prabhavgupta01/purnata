import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import './Profile.css';

function Profile() {
  const { user, isAuthenticated } = useAuth();
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [notification, setNotification] = useState('');

  useEffect(() => {
    // Redirect to sign in if not authenticated
    if (!isAuthenticated) {
      navigate('/signin');
      return;
    }

    const fetchProfileData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/profile/${user.userId}`);
        const data = await response.json();
        
        if (response.ok) {
          setProfileData(data);
        } else {
          setError(data.message || 'Failed to fetch profile data');
        }
      } catch (err) {
        setError('Failed to connect to server');
      } finally {
        setLoading(false);
      }
    };

    if (user?.userId) {
      fetchProfileData();
    }
  }, [user?.userId, isAuthenticated, navigate]);

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

  if (!isAuthenticated) {
    return null; // Will redirect in useEffect
  }

  if (loading) {
    return (
      <div className="profile-container">
        <div className="loading-spinner">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="profile-container">
        <div className="error-message">{error}</div>
      </div>
    );
  }

  return (
    <div className="profile-container">
      {notification && (
        <div className="notification-message">
          {notification}
        </div>
      )}
      <div className="profile-header">
        <div className="profile-avatar">
          <img src={profileData?.avatar || '/default-avatar.png'} alt="Profile" />
        </div>
        <div className="profile-title">
          <h1>{profileData?.name}</h1>
          <span className="staff-id">ID: {profileData?.staffId}</span>
        </div>
      </div>

      <div className="profile-grid">
        <div className="profile-card basic-info">
          <h2>Basic Information</h2>
          <div className="info-group">
            <label>Email</label>
            <p>{profileData?.email}</p>
          </div>
          <div className="info-group">
            <label>Location</label>
            <p>{profileData?.location}</p>
          </div>
          <div className="info-group">
            <label>Category</label>
            <p className="category-badge">{profileData?.category}</p>
          </div>
        </div>

        <div className="profile-card stats">
          <h2>Impact Statistics</h2>
          <div className="stats-container">
            <div className="stat-item">
              <span className="stat-number">{profileData?.victimsCount}</span>
              <span className="stat-label">Victims Under Care</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{profileData?.casesResolved}</span>
              <span className="stat-label">Cases Resolved</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{profileData?.yearsOfService}</span>
              <span className="stat-label">Years of Service</span>
            </div>
          </div>
        </div>

        <div className="profile-card current-cases">
          <h2>Current Cases Overview</h2>
          <div className="cases-progress">
            <div className="progress-item">
              <label>Active Cases</label>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ 
                    width: `${profileData?.activeCases && profileData?.totalCases ? 
                      (profileData.activeCases / profileData.totalCases) * 100 : 0}%` 
                  }}
                ></div>
              </div>
              <span>{profileData?.activeCases} of {profileData?.totalCases}</span>
            </div>
          </div>
        </div>

        <div className="profile-card contact">
          <h2>Contact Information</h2>
          <div className="info-group">
            <label>Phone</label>
            <p>{profileData?.phone}</p>
          </div>
          <div className="info-group">
            <label>Office Location</label>
            <p>{profileData?.officeLocation}</p>
          </div>
          <div className="info-group">
            <label>Department</label>
            <p>{profileData?.department}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile; 