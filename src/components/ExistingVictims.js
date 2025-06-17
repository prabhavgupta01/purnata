import React, { useState, useEffect } from 'react';
import './ExistingVictims.css';

function ExistingVictims() {
  const [victims, setVictims] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredVictims, setFilteredVictims] = useState([]);

  useEffect(() => {
    const fetchVictims = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/victims');
        if (response.ok) {
          const data = await response.json();
          setVictims(data);
          setFilteredVictims(data);
        } else {
          setError('Failed to fetch victims');
        }
      } catch (err) {
        setError('Failed to connect to server');
      } finally {
        setLoading(false);
      }
    };

    fetchVictims();
  }, []);

  useEffect(() => {
    const searchResults = victims.filter(victim =>
      victim.victimId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      victim.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredVictims(searchResults);
  }, [searchTerm, victims]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  if (loading) {
    return (
      <div className="existing-victims-container">
        <div className="loading-message">Loading victims data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="existing-victims-container">
        <div className="error-message">{error}</div>
      </div>
    );
  }

  return (
    <div className="existing-victims-container">
      <h1>Existing Victims</h1>
      
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by ID or Name..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
        <div className="search-icon">🔍</div>
      </div>

      {filteredVictims.length === 0 ? (
        <div className="no-results">
          No victims found matching "{searchTerm}"
        </div>
      ) : (
        <div className="victims-grid">
          {filteredVictims.map((victim) => (
            <div key={victim.victimId} className="victim-card">
              <div className="victim-header">
                <h2>{victim.name}</h2>
                <span className={`status-badge ${victim.status}`}>
                  {victim.status}
                </span>
              </div>
              <div className="victim-info">
                <div className="info-row">
                  <label>ID:</label>
                  <span>{victim.victimId}</span>
                </div>
                <div className="info-row">
                  <label>Gender:</label>
                  <span>{victim.gender}</span>
                </div>
                <div className="info-row">
                  <label>Age:</label>
                  <span>{victim.age}</span>
                </div>
                <div className="info-row">
                  <label>Registered:</label>
                  <span>{new Date(victim.registeredDate).toLocaleDateString()}</span>
                </div>
              </div>
              <div className="victim-history">
                <h3>History</h3>
                <p>{victim.history}</p>
              </div>
              <div className="victim-medical">
                <h3>Medical History</h3>
                <p>{victim.medicalHistory}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ExistingVictims; 