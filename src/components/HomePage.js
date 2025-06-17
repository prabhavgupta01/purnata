import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Banner from './Banner';
import ChatBot from './ChatBot';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HomePage.css';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function HomePage() {
  const location = useLocation();
  const [notification, setNotification] = useState('');
  const statsRef = useRef(null);

  useEffect(() => {
    // Check for notification in navigation state
    if (location.state?.notification) {
      setNotification(location.state.notification);
      // Clear the notification after 5 seconds
      const timer = setTimeout(() => {
        setNotification('');
        // Clear the navigation state
        window.history.replaceState({}, document.title);
      }, 5000);
      return () => clearTimeout(timer);
    }

    // GSAP animations
    gsap.set('.block-content', { opacity: 0, y: 50 });
    gsap.set('.impact-heading', { opacity: 0, y: 50 });
    
    gsap.to('.block-content', {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: '.blocks-container',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
      }
    });

    gsap.to('.impact-heading', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: '.impact-section',
        start: 'top center+=200',
        toggleActions: 'play none none reverse'
      }
    });

    // Stats counter animation
    const stats = statsRef.current.querySelectorAll('.stat-number');
    stats.forEach(stat => {
      const targetNumber = parseInt(stat.getAttribute('data-value'));
      gsap.from(stat, {
        textContent: 0,
        duration: 2,
        ease: "power2.out",
        snap: { textContent: 1 },
        stagger: 1,
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse"
        },
        onUpdate: function() {
          stat.textContent = Math.ceil(this.targets()[0].textContent);
        }
      });
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [location.state]);

  return (
    <div className="home-container">
      {notification && (
        <div className="notification-message">
          {notification}
        </div>
      )}
      <Banner />
      <section className="vision-mission-section">
        <div className="container">
          <div className="blocks-container">
            <div className="info-block vision-block">
              <h2>Our Vision</h2>
              <div className="block-content">
                <p>Empower individuals and communities, creating awareness of all forms of human trafficking, and providing access to opportunities and become contributing members of society.</p>
              </div>
            </div>
            <div className="info-block mission-block">
              <h2>Our Mission</h2>
              <div className="block-content">
                <p>Purnata works holistically, collaboratively and comprehensively using research and innovative measures to end Human Trafficking by focussing on prevention, ensuring wholeness for all.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="impact-section">
        <div className="container">
          <h2 className="impact-heading">Impact We Created</h2>
          <div className="stats-container" ref={statsRef}>
            <div className="stat-box">
              <div className="stat-icon rescue-icon">
                <i className="fas fa-hands-helping"></i>
              </div>
              <h3>Lives Rescued</h3>
              <span className="stat-number" data-value="150">150</span>
              <p className="stat-description">Women and children rescued from trafficking</p>
            </div>
            <div className="stat-box">
              <div className="stat-icon rehab-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Rehabilitated</h3>
              <span className="stat-number" data-value="120">120</span>
              <p className="stat-description">Survivors successfully rehabilitated</p>
            </div>
            <div className="stat-box">
              <div className="stat-icon community-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Communities Impacted</h3>
              <span className="stat-number" data-value="45">45</span>
              <p className="stat-description">High-risk communities supported</p>
            </div>
            <div className="stat-box">
              <div className="stat-icon training-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Skills Training</h3>
              <span className="stat-number" data-value="250">250</span>
              <p className="stat-description">Women trained in various skills</p>
            </div>
          </div>
        </div>
      </section>

      <ChatBot />
    </div>
  );
}

export default HomePage; 