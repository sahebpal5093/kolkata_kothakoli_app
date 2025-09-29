import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <h1>Kolkata Kothakoli</h1>
            <p className="tagline">Stories of Kolkata through photographs</p>
          </Link>
        </div>
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          <i className="fas fa-bars">☰</i>
        </button>
        <nav className={`nav ${mobileMenuOpen ? 'active' : ''}`}>
          {mobileMenuOpen && (
            <div className="close-menu" onClick={closeMenu}>
              <i className="fas fa-times">✕</i>
            </div>
          )}
          <ul>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/gallery" onClick={closeMenu}>Gallery</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;