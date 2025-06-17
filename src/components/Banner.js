import React from 'react';
import './Banner.css';

function Banner() {
  return (
    <div className="banner">
      <div className="logo-container">
        <img src="/logo-final.png" alt="Purnata Logo" className="banner-logo" />
        <div className="banner-text">
          <span className="means-text">means</span>
          <h2 className="definition-text">WHOLENESS <br/> or <br/> COMPLETENESS</h2>
        </div>
      </div>
    </div>
  );
}

export default Banner; 