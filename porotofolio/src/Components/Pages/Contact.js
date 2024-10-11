import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css'; // Ensure you create this CSS file

function Contact() {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Reason: '',
    ContactNo: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/Contact', formData)
      .then((res) => {
        console.log("Thank you for your query.");
        // Optionally reset form or show success message
        setFormData({
          Name: '',
          Email: '',
          Reason: '',
          ContactNo: ''
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor='Name'>Name</label>
            <input
              type='text'
              placeholder='Enter Your Name'
              name='Name'
              value={formData.Name}
              className="input-field"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor='Email'>Email</label>
            <input
              type='email'
              placeholder='Enter Your Email'
              name='Email'
              value={formData.Email}
              className="input-field"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor='Reason'>Reason</label>
            <input
              type='text'
              placeholder='Enter Your Reason for Contacting'
              name='Reason'
              value={formData.Reason}
              className="input-field"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor='ContactNo'>Contact No</label>
            <input
              type='text'
              placeholder='Enter Your Mobile Number'
              name='ContactNo'
              value={formData.ContactNo}
              className="input-field"
              onChange={handleChange}
              required
            />
          </div>

          <button type='submit' className="btn-submit">Contact</button>
          <p>We will contact you back soon</p>
          <a href='/' className="btn-back">Back to Home</a>
        </form>
      </div>
    </div>
  );
}

export default Contact;
