import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './VictimForm.css';

function VictimForm() {
  const navigate = useNavigate();
  const { userId } = useAuth();
  const [formData, setFormData] = useState({
    victimId: '',
    name: '',
    gender: '',
    age: '',
    history: '',
    medicalHistory: '',
    rehabConsent: false
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    setLoading(true);

    try {
      const response = await fetch('http://localhost:3001/api/victims', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          registeredBy: userId || 'admin'
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        // Update the user's victim count
        await fetch(`http://localhost:3001/api/users/${userId}/increment-victims`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        
        // Wait for 2 seconds to show success message before navigating
        setTimeout(() => {
          navigate('/', { 
            state: { 
              notification: 'Victim registered successfully',
              victim: data.victim
            }
          });
        }, 2000);
      } else {
        setError(data.message || 'Failed to register victim');
      }
    } catch (err) {
      setError('Failed to connect to server');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="victim-form-container">
      <div className="victim-form-box">
        <h2>Register New Victim</h2>
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">Victim registered successfully! Redirecting...</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="victimId">Victim ID</label>
            <input
              type="text"
              id="victimId"
              name="victimId"
              value={formData.victimId}
              onChange={handleChange}
              required
              placeholder="Enter victim ID"
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter victim's name"
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              disabled={loading}
            >
              <option value="">Select gender</option>
              <option value="female">Female</option>
              <option value="child">Child</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              min="0"
              max="120"
              placeholder="Enter age"
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="history">History</label>
            <textarea
              id="history"
              name="history"
              value={formData.history}
              onChange={handleChange}
              required
              placeholder="Enter victim's history"
              rows="4"
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="medicalHistory">Medical History</label>
            <textarea
              id="medicalHistory"
              name="medicalHistory"
              value={formData.medicalHistory}
              onChange={handleChange}
              required
              placeholder="Enter medical history"
              rows="4"
              disabled={loading}
            />
          </div>

          <div className="form-group checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="rehabConsent"
                checked={formData.rehabConsent}
                onChange={handleChange}
                required
                disabled={loading}
              />
              Rehabilitation Consent
            </label>
          </div>

          <div className="form-actions">
            <button 
              type="button" 
              className="cancel-button" 
              onClick={() => navigate('/profile')}
              disabled={loading}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="submit-button" 
              disabled={loading}
            >
              {loading ? 'Registering...' : 'Register Victim'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default VictimForm; 