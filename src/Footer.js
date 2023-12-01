// src/Footer.js

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@pingpongrestaurant.com</p>
          <p>Phone: +91 123456789</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div className="footer-section">
          <h3>Address</h3>
          <p>Electronic city, Bangalore , India</p>
        </div>
      </div>
      <div className="footer-bottom">
      
        <p>&copy; 2023 Ping Pong Restaurant. All rights reserved.</p>
        <p>Developed by <i> Monisha , Bindushree, Praveen ,Vijay</i> </p>
      </div>
    </footer>
  );
};

export default Footer;
