import React from 'react';
import './MumbaiProjects.css';

const MumbaiProjects = () => {
  return (
    <div className="mumbai-projects-container">
      <div className="project-header">
        <h1>Mumbai Projects</h1>
        <div className="location-tag">Maharashtra</div>
      </div>

      <div className="project-sections">
        <section className="project-section ashray">
          <h2>ASHRAY Program</h2>
          <div className="project-content">
            <div className="program-unit">
              <h3>Drop-In-Center</h3>
              <p>A specific unit of ASHRAY that caters to women in red light areas, most of whom are victims of human trafficking. We build relationships and provide opportunities through:</p>
              <ul>
                <li>Skills training programs</li>
                <li>Life enhancement workshops</li>
                <li>Career guidance</li>
                <li>Support for alternative livelihoods</li>
              </ul>
            </div>

            <div className="program-unit">
              <h3>Day Care Center</h3>
              <p>Aimed at providing children a safe environment and restoring their childhood through:</p>
              <ul>
                <li>Protection from vulnerable surroundings</li>
                <li>Access to quality education</li>
                <li>Nutritious feeding program</li>
                <li>Regular health & hygiene activities</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="project-section prevention">
          <h2>Prevention & Rescue</h2>
          <div className="project-content">
            <div className="strategy-block">
              <h3>Prevention Strategy</h3>
              <ul>
                <li>Reducing vulnerability in source areas</li>
                <li>Increasing risk for traffickers in transit routes</li>
                <li>Decreasing demand in destination areas</li>
              </ul>
            </div>

            <div className="strategy-block">
              <h3>Rescue Operations</h3>
              <p>Working with state and law enforcement agencies, we:</p>
              <ul>
                <li>Conduct surveillance at major railway stations</li>
                <li>Rescue children in transit at railway stations & nodal points</li>
                <li>Ensure safe and regulated migration</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="project-section rehabilitation">
          <h2>Rehabilitation Initiatives</h2>
          <div className="project-content">
            <div className="facility-block">
              <h3>Rehabilitation Home</h3>
              <p>Located in Asalpha, our facility provides:</p>
              <ul>
                <li>Safe housing and shelter</li>
                <li>Nutritious food and clothing</li>
                <li>Healthcare services</li>
                <li>Emotional support</li>
              </ul>
            </div>

            <div className="facility-block">
              <h3>Training Center</h3>
              <p>Our Asalpha center offers comprehensive programs including:</p>
              <ul>
                <li>Six-month formal literacy program</li>
                <li>Life skills training</li>
                <li>Vocational education</li>
                <li>Integration support</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MumbaiProjects; 