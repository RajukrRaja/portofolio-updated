import React, { useState } from 'react';
import './HireMe.css'; // Add your CSS for styling the form

function HireMe() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // Show the thank you message
  };

  return (
    <div className="hire-me-modal">
      {submitted ? (
        <div className="thank-you-message">
          <h2>Thank you! We'll be in touch soon.</h2>
        </div>
      ) : (
        <form
          className="hire-me-form"
          action="https://formspree.io/f/movqqqap"  // Your actual Formspree form URL
          method="POST"
          onSubmit={handleSubmit}
        >
          <h2>Hire Me</h2>
          <label>
            Recruiter Name:
            <input type="text" name="recruiterName" required />
          </label>
          <label>
            Recruiter Email:
            <input type="email" name="recruiterEmail" required />
          </label>
          <label>
            Company Name:
            <input type="text" name="companyName" required />
          </label>
          <label>
            Job Details:
            <textarea name="jobDetails" required />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default HireMe;
