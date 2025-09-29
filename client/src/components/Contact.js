import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
  return (
    <div className="contact-page">
      <div className="container">
        <h1>Contact Us</h1>
        <p className="contact-intro">Have questions or want to collaborate? Get in touch with us!</p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <h3>Email</h3>
              <p>info@kolkatakothakoli.com</p>
            </div>
            <div className="info-item">
              <h3>Phone</h3>
              <p>+91 33 1234 5678</p>
            </div>
            <div className="info-item">
              <h3>Address</h3>
              <p>123 Park Street<br />Kolkata, West Bengal<br />India - 700016</p>
            </div>
            <div className="social-links">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            {formSubmitted ? (
              <div className="form-success">
                <h3>Thank you for your message!</h3>
                <p>We'll get back to you as soon as possible.</p>
                <button onClick={() => setFormSubmitted(false)}>Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    rows="5"
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;