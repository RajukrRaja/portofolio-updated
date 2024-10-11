import React, { useState } from 'react';
import './Myproject.css';

function MyProject() {
  const [isExpanded, setIsExpanded] = useState({});

  const toggleExpand = (index) => {
    setIsExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const projects = [
    {
      title: "SWAPSHILD: Deep Fake Face Swap Detection",
      description: "Developed an application using React, Redux, and SCSS to detect deep fake face swaps. The project improved the processing speed by 30% through optimized image loading techniques. This solution aims to tackle the growing issue of deep fake videos by providing a platform that scans media and detects falsified content.",
      img: "https://4kwallpapers.com/images/walls/thumbs_3t/5661.jpg",
    },
    {
      title: "SNAPNEST: Social Media Application",
      description: "Led a hackathon project utilizing HTML, Tailwind CSS, React.js, Node.js, Express.js, and MongoDB. Implemented features such as user authentication, real-time notifications, and content sharing. These features increased user engagement by 40%. The application focused on ensuring a seamless social media experience with a modern, responsive design.",
      img: "https://4kwallpapers.com/images/walls/thumbs_3t/5661.jpg",
    },
    {
      title: "TRIVDENTA: AI Medicine Recommendation",
      description: "Created an AI-driven application using React.js, Node.js, Express.js, Socket.io, and MongoDB. The system provides real-time medicine recommendations based on user symptoms. Optimized response times by 25% with efficient query handling, making it easier for users to receive timely recommendations.",
      img: "https://4kwallpapers.com/images/walls/thumbs_3t/5661.jpg",
    },
    {
      title: "CODEBOOSTER: Coding Challenge Platform",
      description: "Developed an interactive platform for coding challenges, allowing users to practice and improve their algorithmic skills. Built using React.js, Node.js, and MongoDB, the platform features a real-time coding editor, leaderboards, and achievement tracking. Integrated a scoring system and automated code evaluation. The platform increased user engagement by 50% and was adopted by over 500 active users in the first month of launch.",
      img: "https://4kwallpapers.com/images/walls/thumbs_3t/5661.jpg",
    }
  ];

  return (
    <div className="project-container">
      <div className="heading">
        <h1>My Projects</h1>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card" onClick={() => toggleExpand(index)}>
            <img src={project.img} alt={project.title} className="project-image" />
            <div className="project-content">
              <h2>{project.title}</h2>
              <p className={`project-description ${isExpanded[index] ? 'expanded' : ''}`}>
                {project.description}
              </p>
              <button className="view-details-button">
                {isExpanded[index] ? "Hide Details" : "View Details"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyProject;
