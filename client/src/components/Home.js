import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <h1>Kolkata Kothakoli</h1>
          <p>Capturing the soul of the City of Joy through the lens</p>
          <Link to="/gallery" className="btn-primary pulse">Explore Gallery</Link>
        </div>
      </div>
      
      <div className="featured-section">
        <div className="container">
          <h2>Featured Collections</h2>
          <div className="categories">
            <div className="category landmarks">
              <div className="category-content">
                <h3>Landmarks</h3>
                <p>Iconic structures that define Kolkata's skyline</p>
                <Link to="/gallery?category=landmarks" className="btn">View Collection</Link>
              </div>
            </div>
            
            <div className="category culture">
              <div className="category-content">
                <h3>Culture</h3>
                <p>Festivals, traditions and the vibrant cultural tapestry</p>
                <Link to="/gallery?category=culture" className="btn">View Collection</Link>
              </div>
            </div>
            
            <div className="category street">
              <div className="category-content">
                <h3>Street Life</h3>
                <p>Everyday moments from the bustling streets</p>
                <Link to="/gallery?category=street" className="btn">View Collection</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="about-preview">
        <div className="container">
          <div className="about-content">
            <h2>About Kolkata Kothakoli</h2>
            <p>Kolkata Kothakoli is a visual journey through the streets, culture, and soul of Kolkata. Our mission is to capture and preserve the unique essence of this historic city through photography.</p>
            <Link to="/about" className="btn-secondary">Learn More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;