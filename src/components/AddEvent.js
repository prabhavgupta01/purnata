import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddEvent.css';

function AddEvent() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [victims, setVictims] = useState([]);
  
  const [formData, setFormData] = useState({
    date: '',
    location: '',
    eventName: '',
    attendees: [],
    description: '',
    outcome: ''
  });

  useEffect(() => {
    // Fetch existing victims for the attendees dropdown
    const fetchVictims = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/victims');
        if (response.ok) {
          const data = await response.json();
          setVictims(data);
        } else {
          setError('Failed to fetch victims data');
        }
      } catch (err) {
        setError('Failed to connect to server');
      }
    };

    fetchVictims();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, options } = e.target;
    
    if (type === 'select-multiple') {
      const selectedOptions = Array.from(options)
        .filter(option => option.selected)
        .map(option => option.value);
      
      setFormData(prev => ({
        ...prev,
        [name]: selectedOptions
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('http://localhost:3001/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSuccess(true);
        // Show success message for 2 seconds before redirecting
        setTimeout(() => {
          navigate('/', { 
            state: { notification: 'Event added successfully!' }
          });
        }, 2000);
      } else {
        const data = await response.json();
        setError(data.message || 'Failed to add event');
      }
    } catch (err) {
      setError('Failed to connect to server');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="event-form-container">
      <div className="event-form-box">
        <h2>Add New Event</h2>
        <form onSubmit={handleSubmit}>
          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">Event added successfully! Redirecting...</div>}

          <div className="form-group">
            <label htmlFor="eventName">Event Name</label>
            <input
              type="text"
              id="eventName"
              name="eventName"
              value={formData.eventName}
              onChange={handleChange}
              required
              placeholder="Enter event name"
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              placeholder="Enter event location"
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="attendees">Attendees</label>
            <select
              id="attendees"
              name="attendees"
              multiple
              value={formData.attendees}
              onChange={handleChange}
              required
              disabled={loading}
              className="attendees-select"
            >
              {victims.map(victim => (
                <option key={victim.victimId} value={victim.victimId}>
                  {victim.name} ({victim.victimId})
                </option>
              ))}
            </select>
            <small className="help-text">Hold Ctrl/Cmd to select multiple attendees</small>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              placeholder="Enter event description"
              rows="4"
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="outcome">Outcome</label>
            <textarea
              id="outcome"
              name="outcome"
              value={formData.outcome}
              onChange={handleChange}
              required
              placeholder="Enter event outcome"
              rows="4"
              disabled={loading}
            />
          </div>

          <div className="form-actions">
            <button 
              type="button" 
              className="cancel-button" 
              onClick={() => navigate('/')}
              disabled={loading}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="submit-button" 
              disabled={loading}
            >
              {loading ? 'Adding Event...' : 'Add Event'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddEvent; 