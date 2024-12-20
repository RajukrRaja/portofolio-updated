import React, { useState } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import emailjs from 'emailjs-com';

function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Handle newsletter form submission
  const handleSubscribe = (e) => {
    e.preventDefault();

    // Basic email validation
    if (!email) {
      setMessage('Please enter a valid email address.');
      return;
    }

    // Prepare template parameters
    const templateParams = {
      to_email: email,
    };

    // Use EmailJS to send the email
    emailjs.send(
      'service_1e5u36d', // Service ID (replace with your own)
      'template_fpgkb6g', // Template ID (replace with your own)
      templateParams,
      'user_yourEmailJsUserId' // Replace with your own EmailJS User ID
    )
    .then((response) => {
      console.log('Email sent successfully:', response);
      setMessage('Thank you for subscribing to our newsletter!');
    })
    .catch((error) => {
      console.error('Email send error:', error); // Log the error for debugging
      setMessage('Oops! Something went wrong. Please try again later.');
    });

    // Clear the input field
    setEmail('');
  };

  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-links">
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Resources</h3>
            <ul>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/support">Support</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-contact">
          <h3>Contact Info</h3>
          <p><FaMapMarkerAlt /> Shantinagar, Bhilai, Chhattisgarh</p>
          <p><FaEnvelope /> rajukumar.191813@gmail.com</p>
          <p><FaPhone /> +91 7903185457</p>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=100044120594647" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com/__raju__1010__" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-middle">
        <div className="newsletter">
          <h3>Subscribe to Our Newsletter</h3>
          <p>Stay updated with our latest news and offers.</p>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}  // Handle email input change
            />
            <button type="submit" className="newsletter-button">
              Subscribe
            </button>
          </form>
          {message && <p className="newsletter-message">{message}</p>}  {/* Display message */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
