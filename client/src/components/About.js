import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <h1>About Kolkata Kothakoli</h1>
        
        <div className="about-content">
          <div className="about-image">
            <div className="image-placeholder"></div>
          </div>
          <div className="about-text">
            <h2>Our Story</h2>
            <p>Kolkata Kothakoli (meaning "Kolkata Stories") is a photography project dedicated to capturing the essence of Kolkata - the City of Joy. Our mission is to document the rich cultural heritage, architectural marvels, vibrant street life, and the unique character of this historic city.</p>
            
            <p>Founded by a group of passionate photographers who call Kolkata home, we aim to showcase both the celebrated landmarks and the hidden gems of the city through our lens.</p>
            
            <h2>Our Vision</h2>
            <p>Through our photography, we strive to:</p>
            <ul>
              <li>Preserve the visual heritage of Kolkata</li>
              <li>Highlight the city's unique blend of tradition and modernity</li>
              <li>Share the untold stories of its streets and people</li>
              <li>Create a digital archive for future generations</li>
            </ul>
          </div>
        </div>
        
        <div className="team-section">
          <h2>Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo"></div>
              <h3>Arjun Sengupta</h3>
              <p>Founder & Lead Photographer</p>
            </div>
            <div className="team-member">
              <div className="member-photo"></div>
              <h3>Priya Chatterjee</h3>
              <p>Cultural Heritage Specialist</p>
            </div>
            <div className="team-member">
              <div className="member-photo"></div>
              <h3>Rahul Bose</h3>
              <p>Street Photography Expert</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;