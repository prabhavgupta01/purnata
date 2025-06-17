import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

function Navbar() {
  const [showProjectsMenu, setShowProjectsMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleProfileClick = () => {
    navigate('/profile');
    setShowProfileMenu(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src="/logo-final.png" alt="Purnata Logo" className="logo-img" />
      </Link>
      <div className="nav-links">
        <Link to="/about">About Us</Link>
        <div 
          className="projects-dropdown"
          onMouseEnter={() => setShowProjectsMenu(true)}
          onMouseLeave={() => setShowProjectsMenu(false)}
        >
          <span className="dropdown-trigger">Projects</span>
          {showProjectsMenu && (
            <div className="dropdown-menu">
              <Link to="/projects/mumbai">Mumbai</Link>
              <Link to="/projects/kolkata">Kolkata</Link>
            </div>
          )}
        </div>
        <Link to="/donate">Donate</Link>
        <div className="auth-buttons">
          {isAuthenticated ? (
            <div 
              className="profile-dropdown"
              onMouseEnter={() => setShowProfileMenu(true)}
              onMouseLeave={() => setShowProfileMenu(false)}
            >
              <button onClick={handleProfileClick} className="btn btn-profile">Profile</button>
              {showProfileMenu && (
                <div className="dropdown-menu profile-menu">
                  <button onClick={handleProfileClick}>My Profile</button>
                  <button onClick={handleLogout} className="logout-btn">Logout</button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/signin" className="btn btn-signin">Sign In</Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 