import React from 'react';
import './Donate.css';

const Donate = () => {
  return (
    <div className="donate-page">
      <div className="donate-hero">
        <h1>Make a Difference Today</h1>
        <p>Your contribution helps us create lasting change in the lives of those affected by human trafficking.</p>
      </div>
      
      <div className="donate-container">
        <div className="donation-options">
          <h2>Choose Your Impact</h2>
          <div className="donation-cards">
            <div className="donation-card">
              <h3>One-Time Donation</h3>
              <p>Make an immediate impact with a single contribution</p>
              <div className="amount-buttons">
                <button>₹1000</button>
                <button>₹2000</button>
                <button>₹5000</button>
                <button className="custom-amount">Custom Amount</button>
              </div>
              <button className="donate-now-btn">Donate Now</button>
            </div>
            
            <div className="donation-card">
              <h3>Monthly Giving</h3>
              <p>Create sustainable change with recurring support</p>
              <div className="amount-buttons">
                <button>₹500/mo</button>
                <button>₹1000/mo</button>
                <button>₹2000/mo</button>
                <button className="custom-amount">Custom Amount</button>
              </div>
              <button className="donate-now-btn">Become a Monthly Donor</button>
            </div>
          </div>
        </div>

        <div className="impact-section">
          <h2>Your Impact</h2>
          <div className="impact-cards">
            <div className="impact-card">
              <h4>₹1000</h4>
              <p>Provides essential supplies for one rescued individual</p>
            </div>
            <div className="impact-card">
              <h4>₹2000</h4>
              <p>Supports rehabilitation services for one month</p>
            </div>
            <div className="impact-card">
              <h4>₹5000</h4>
              <p>Funds comprehensive care and training programs</p>
            </div>
          </div>
        </div>

        <div className="other-ways">
          <h2>Other Ways to Give</h2>
          <div className="ways-grid">
            <div className="way-card">
              <h3>Corporate Partnerships</h3>
              <p>Partner with us to create lasting social impact</p>
              <button>Learn More</button>
            </div>
            <div className="way-card">
              <h3>Fundraise</h3>
              <p>Start your own fundraising campaign</p>
              <button>Start Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate; 