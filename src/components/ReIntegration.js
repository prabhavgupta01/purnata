import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ReIntegration.css';

function ReIntegration() {
  const navigate = useNavigate();
  const [victims, setVictims] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    victimId: '',
    rehabDuration: '',
    interests: [],
    healthCondition: '',
    mentalHealthCondition: '',
    skillsAcquired: [],
    supportRequired: '',
    familyContact: '',
    readinessLevel: ''
  });

  useEffect(() => {
    // Fetch existing victims for the victim ID dropdown
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

  const interestOptions = [
    'Going Home',
    'Finding Employment',
    'Starting Small Business',
    'Further Education',
    'Vocational Training',
    'Community Service',
    'Skill Development'
  ];

  const skillOptions = [
    'Tailoring',
    'Computer Skills',
    'Cooking',
    'Beauty & Wellness',
    'Handicrafts',
    'Language Skills',
    'Customer Service',
    'Basic Accounting'
  ];

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    
    if (type === 'select-multiple') {
      const selectedOptions = Array.from(e.target.selectedOptions).map(option => option.value);
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
      const response = await fetch('http://localhost:3001/api/reintegration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSuccess(true);
        setTimeout(() => {
          navigate('/', { 
            state: { notification: 'Re-integration assessment submitted successfully!' }
          });
        }, 2000);
      } else {
        const data = await response.json();
        setError(data.message || 'Failed to submit re-integration assessment');
      }
    } catch (err) {
      setError('Failed to connect to server');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="reintegration-container">
      <div className="reintegration-form-box">
        <h2>Re-Integration Assessment</h2>
        <form onSubmit={handleSubmit}>
          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">Assessment submitted successfully! Redirecting...</div>}

          <div className="form-group">
            <label htmlFor="victimId">Victim ID</label>
            <select
              id="victimId"
              name="victimId"
              value={formData.victimId}
              onChange={handleChange}
              required
              disabled={loading}
            >
              <option value="">Select Victim ID</option>
              {victims.map(victim => (
                <option key={victim.victimId} value={victim.victimId}>
                  {victim.victimId} - {victim.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="rehabDuration">Duration of Rehabilitation</label>
            <select
              id="rehabDuration"
              name="rehabDuration"
              value={formData.rehabDuration}
              onChange={handleChange}
              required
              disabled={loading}
            >
              <option value="">Select Duration</option>
              <option value="0-3">0-3 months</option>
              <option value="3-6">3-6 months</option>
              <option value="6-12">6-12 months</option>
              <option value="12+">More than 12 months</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="interests">Interests & Future Plans</label>
            <select
              id="interests"
              name="interests"
              multiple
              value={formData.interests}
              onChange={handleChange}
              required
              disabled={loading}
              className="multi-select"
            >
              {interestOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            <small className="help-text">Hold Ctrl/Cmd to select multiple options</small>
          </div>

          <div className="form-group">
            <label htmlFor="healthCondition">Physical Health Condition</label>
            <select
              id="healthCondition"
              name="healthCondition"
              value={formData.healthCondition}
              onChange={handleChange}
              required
              disabled={loading}
            >
              <option value="">Select Health Condition</option>
              <option value="Excellent">Excellent</option>
              <option value="Good">Good</option>
              <option value="Fair">Fair</option>
              <option value="Poor">Poor</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="mentalHealthCondition">Mental Health Condition</label>
            <select
              id="mentalHealthCondition"
              name="mentalHealthCondition"
              value={formData.mentalHealthCondition}
              onChange={handleChange}
              required
              disabled={loading}
            >
              <option value="">Select Mental Health Condition</option>
              <option value="Excellent">Excellent</option>
              <option value="Good">Good</option>
              <option value="Fair">Fair</option>
              <option value="NeedsCounseling">Needs Counseling</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="skillsAcquired">Skills Acquired</label>
            <select
              id="skillsAcquired"
              name="skillsAcquired"
              multiple
              value={formData.skillsAcquired}
              onChange={handleChange}
              required
              disabled={loading}
              className="multi-select"
            >
              {skillOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            <small className="help-text">Hold Ctrl/Cmd to select multiple options</small>
          </div>

          <div className="form-group">
            <label htmlFor="supportRequired">Support Required</label>
            <textarea
              id="supportRequired"
              name="supportRequired"
              value={formData.supportRequired}
              onChange={handleChange}
              placeholder="Specify any additional support needed for re-integration"
              rows="3"
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="familyContact">Family Contact Status</label>
            <select
              id="familyContact"
              name="familyContact"
              value={formData.familyContact}
              onChange={handleChange}
              required
              disabled={loading}
            >
              <option value="">Select Family Contact Status</option>
              <option value="Established">Contact Established</option>
              <option value="InProgress">Contact in Progress</option>
              <option value="NotPossible">Contact Not Possible</option>
              <option value="Refused">Victim Refused Contact</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="readinessLevel">Re-integration Readiness</label>
            <select
              id="readinessLevel"
              name="readinessLevel"
              value={formData.readinessLevel}
              onChange={handleChange}
              required
              disabled={loading}
            >
              <option value="">Select Readiness Level</option>
              <option value="Ready">Ready for Re-integration</option>
              <option value="NeedsPreparation">Needs More Preparation</option>
              <option value="NotReady">Not Ready</option>
            </select>
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
              {loading ? 'Submitting...' : 'Submit Assessment'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReIntegration; 