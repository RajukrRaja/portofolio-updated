import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './HireMe.css'; // Make sure to include your CSS for styling the form

function HireMe() {
  // Initialize the form with the Formspree form ID
  const [state, handleSubmit] = useForm("movqqqap"); // Replace with your Formspree form ID

  // If the submission is successful, display a thank you message
  if (state.succeeded) {
    return <div className="thank-you-message"><h2>Thank you! We'll be in touch soon.</h2></div>;
  }

  return (
    <div className="hire-me-modal">
      <form className="hire-me-form" onSubmit={handleSubmit}>
        <h2>Hire Me</h2>

        <label htmlFor="recruiterName">
          Recruiter Name:
        </label>
        <input
          id="recruiterName"
          type="text"
          name="recruiterName"
          required
        />
        <ValidationError 
          prefix="Recruiter Name" 
          field="recruiterName"
          errors={state.errors}
        />

        <label htmlFor="recruiterEmail">
          Recruiter Email:
        </label>
        <input
          id="recruiterEmail"
          type="email"
          name="recruiterEmail"
          required
        />
        <ValidationError 
          prefix="Email" 
          field="recruiterEmail"
          errors={state.errors}
        />

        <label htmlFor="companyName">
          Company Name:
        </label>
        <input
          id="companyName"
          type="text"
          name="companyName"
          required
        />
        <ValidationError 
          prefix="Company Name" 
          field="companyName"
          errors={state.errors}
        />

        <label htmlFor="jobDetails">
          Job Details:
        </label>
        <textarea
          id="jobDetails"
          name="jobDetails"
          required
        />
        <ValidationError 
          prefix="Job Details" 
          field="jobDetails"
          errors={state.errors}
        />

        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default HireMe;
