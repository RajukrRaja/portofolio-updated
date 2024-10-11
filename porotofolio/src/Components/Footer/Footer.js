import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
          <Link to="../Pages/Home.js" >
              <b>Home</b>
            </Link>
            <Link to="../Pages/About.js" >
              <b>About</b>
            </Link>
            <Link to="/" >
              <b>Home</b>
            </Link>
        
            <Link to="/Contact" >
              <b>Contact</b>
            </Link>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p><i className="fas fa-map-marker-alt"></i> Shantinagar , Bhilai , chhatishgarh</p>
          <p><i className="fas fa-envelope"></i> rajukumar.191813@gmail.com</p>
          <p><i className="fas fa-phone"></i> +91 7903185457</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="https://www.facebook.com/profile.php?id=100044120594647&mibextid=2JQ9oc"><i className="fab fa-facebook"></i> Facebook</a></li>
            <li><a href="#"><i className="fab fa-twitter"></i> Twitter</a></li>
            <li><a href="https://instagram.com/__raju__1010__?igshid=OGQ5ZDc2ODk2ZA=="><i className="fab fa-instagram"></i> Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy;  All rights reserved To @ Raju Kumar Raja.</p>
      </div>
    </div>
  );
}

export default Footer;
