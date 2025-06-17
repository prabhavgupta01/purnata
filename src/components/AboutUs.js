import React from 'react';
import './AboutUs.css';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <section className="about-section core-values">
        <div className="container">
          <h2>Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Dignity & Respect</h3>
              <p>We believe in the inherent worth of every individual. Each person we work with is treated with utmost respect, ensuring their dignity is preserved and their voice is heard. We create safe spaces where survivors can heal and rebuild their lives without judgment.</p>
            </div>
            <div className="value-card">
              <h3>Empowerment</h3>
              <p>Our focus is on building capacity and confidence in survivors. Through education, skill development, and emotional support, we empower individuals to make their own choices and become independent, contributing members of society.</p>
            </div>
            <div className="value-card">
              <h3>Holistic Approach</h3>
              <p>We address trafficking through comprehensive intervention strategies. From prevention and rescue to rehabilitation and reintegration, our approach encompasses physical, mental, emotional, and social well-being of survivors.</p>
            </div>
            <div className="value-card">
              <h3>Transparency</h3>
              <p>We maintain the highest standards of accountability in all our operations. Every donation is tracked, every intervention is documented, and our financial records are open to scrutiny, ensuring complete transparency to our stakeholders.</p>
            </div>
            <div className="value-card">
              <h3>Community Partnership</h3>
              <p>We believe lasting change comes through community involvement. By working closely with local communities, law enforcement, and other NGOs, we create strong networks that help prevent trafficking and support survivor rehabilitation.</p>
            </div>
            <div className="value-card">
              <h3>Innovation</h3>
              <p>We continuously evolve our approaches to combat trafficking effectively. Using research, technology, and creative solutions, we develop innovative programs that address the changing nature of human trafficking.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section outcomes">
        <div className="container">
          <h2>Outcomes</h2>
          <div className="outcomes-grid">
            <div className="outcome-card">
              <h3>Reduced Vulnerability</h3>
              <p>Reducing vulnerability of potential victims of human trafficking in source areas through:</p>
              <ul className="outcome-list">
                <li>Community awareness programs</li>
                <li>Facilitating education & livelihoods</li>
                <li>Social enterprise initiatives</li>
                <li>Holistic care and support</li>
              </ul>
            </div>
            <div className="outcome-card">
              <h3>Increased Risk to Traffickers</h3>
              <p>Creating higher risks for traffickers in transit routes through:</p>
              <ul className="outcome-list">
                <li>Strengthening legislation</li>
                <li>Pre-sale rescue operations</li>
                <li>Supporting criminal convictions</li>
                <li>Advocating for harsher punishments</li>
              </ul>
            </div>
            <div className="outcome-card">
              <h3>Lower Demand</h3>
              <p>Reducing demand for goods and services of modern-day slaves in destinations through:</p>
              <ul className="outcome-list">
                <li>Prosecuting users and enablers</li>
                <li>Public education campaigns</li>
                <li>Awareness about ethical consumption</li>
                <li>Community intervention programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section approaches">
        <div className="container">
          <h2>Our Approaches</h2>
          <div className="approach-intro">
            <p>Our purpose is not to deal with symptoms but to address root causes, bringing systemic change to reduce and end human trafficking by reducing both supply and demand. We establish replicable models with indicator-based progress monitoring for our interventions.</p>
          </div>
          <div className="approaches-grid">
            <div className="approach-card">
              <h3>Holistic Care</h3>
              <div className="approach-content">
                <p className="approach-main">We treat each person as a whole – addressing social, emotional, physical, and spiritual needs through comprehensive programs.</p>
                <div className="approach-details">
                  <ul>
                    <li>Social rehabilitation</li>
                    <li>Emotional support</li>
                    <li>Physical well-being</li>
                    <li>Spiritual guidance</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="approach-card">
              <h3>Collaborative Action</h3>
              <div className="approach-content">
                <p className="approach-main">Human trafficking is too large for any single organization to tackle. We work with civil society agencies and government bodies, joining hands in collaboration.</p>
                <div className="approach-details">
                  <ul>
                    <li>Partnership with NGOs</li>
                    <li>Government coordination</li>
                    <li>Resource sharing</li>
                    <li>Unified response</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="approach-card">
              <h3>Arts Integration</h3>
              <div className="approach-content">
                <p className="approach-main">We leverage various art forms to increase awareness about human trafficking while helping local communities protect and benefit from their artistic heritage.</p>
                <div className="approach-details">
                  <ul>
                    <li>Cultural preservation</li>
                    <li>Artistic expression</li>
                    <li>Community engagement</li>
                    <li>Creative awareness</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="approach-card">
              <h3>Technology Integration</h3>
              <div className="approach-content">
                <p className="approach-main">We utilize advanced technology to promote effective, rights-based, and survivor-centered responses in partnership with government and civil society.</p>
                <div className="approach-details">
                  <ul>
                    <li>Digital solutions</li>
                    <li>Data-driven strategies</li>
                    <li>Online awareness</li>
                    <li>Tech-enabled monitoring</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section projects">
        <div className="container">
          <h2>Our Projects</h2>
          <div className="projects-grid">
            <div className="project-location-card mumbai">
              <h3>Mumbai, Maharashtra</h3>
              <div className="project-highlights">
                <ul>
                  <li>ASHRAY Program</li>
                  <li>Prevention & Rescue Operations</li>
                  <li>Rehabilitation Center</li>
                  <li>Training Facility</li>
                </ul>
              </div>
              <Link to="/projects/mumbai" className="view-more-btn">View Details</Link>
            </div>
            
            <div className="project-location-card kolkata">
              <h3>Kolkata, West Bengal</h3>
              <div className="project-highlights">
                <ul>
                  <li>Community Outreach</li>
                  <li>Rescue Operations</li>
                  <li>Rehabilitation Services</li>
                  <li>Skill Development</li>
                </ul>
              </div>
              <Link to="/projects/kolkata" className="view-more-btn">View Details</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section audits">
        <div className="container">
          <h2>Audits</h2>
          <div className="audits-content">
            <p className="audit-intro">We maintain complete transparency in our operations and financial management.</p>
            <div className="audit-reports">
              <div className="audit-year">
                <h3>2023</h3>
                <p>Annual Financial Report</p>
                <button className="download-btn">Download Report</button>
              </div>
              <div className="audit-year">
                <h3>2022</h3>
                <p>Annual Financial Report</p>
                <button className="download-btn">Download Report</button>
              </div>
              <div className="audit-year">
                <h3>2021</h3>
                <p>Annual Financial Report</p>
                <button className="download-btn">Download Report</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs; 