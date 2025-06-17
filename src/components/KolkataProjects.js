import React from 'react';
import './KolkataProjects.css';

const KolkataProjects = () => {
  return (
    <div className="kolkata-projects-container">
      <div className="project-header">
        <h1>Kolkata Projects</h1>
        <div className="location-tag">West Bengal</div>
      </div>

      <div className="project-sections">
        <section className="project-section hub">
          <h2>Barasat Hub Development</h2>
          <div className="project-content">
            <div className="hub-info">
              <h3>Comprehensive Hub Facility</h3>
              <p>Based on our first-year research identifying West Bengal, particularly North 24 Parganas, as a major source area for trafficking to Mumbai, we are establishing a comprehensive hub in Barasat district headquarters including:</p>
              <ul>
                <li>Rehabilitation Home for survivors</li>
                <li>Training Center for skill development</li>
                <li>Manufacturing Unit for employment</li>
                <li>Support services and counseling</li>
              </ul>
            </div>
            <div className="hub-objective">
              <h3>Strategic Location</h3>
              <p>The hub is strategically positioned to:</p>
              <ul>
                <li>Stem the outflow of vulnerable women and children</li>
                <li>Provide local opportunities and support</li>
                <li>Create sustainable employment solutions</li>
                <li>Facilitate community reintegration</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="project-section prevention">
          <h2>Basirhat Prevention Program</h2>
          <div className="project-content">
            <div className="program-details">
              <h3>Preventive Initiatives</h3>
              <p>We are implementing a comprehensive prevention program in Basirhat district, identified as highly vulnerable for women and children. Our approach includes:</p>
              <ul>
                <li>Detailed baseline surveys of vulnerable areas</li>
                <li>General community awareness programs</li>
                <li>Targeted awareness sessions for at-risk groups</li>
                <li>Regular monitoring and assessment</li>
              </ul>
            </div>
            <div className="act-groups">
              <h3>ACT Groups (Active Communities Against Trafficking)</h3>
              <p>A key initiative involving local community participation through:</p>
              <ul>
                <li>Formation of community-based vigilance groups</li>
                <li>Training and empowerment of local leaders</li>
                <li>Support system for vulnerable families</li>
                <li>Direct intervention in trafficking prevention</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="project-section impact">
          <h2>Root Cause Intervention</h2>
          <div className="project-content">
            <div className="intervention-strategy">
              <h3>Comprehensive Approach</h3>
              <p>Our strategy focuses on addressing fundamental issues through:</p>
              <ul>
                <li>Economic empowerment programs</li>
                <li>Educational support initiatives</li>
                <li>Vocational training opportunities</li>
                <li>Community support networks</li>
              </ul>
            </div>
            <div className="community-support">
              <h3>Sustainable Solutions</h3>
              <p>Creating lasting impact through:</p>
              <ul>
                <li>Local employment generation</li>
                <li>Skill development programs</li>
                <li>Family support systems</li>
                <li>Long-term monitoring and support</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default KolkataProjects; 