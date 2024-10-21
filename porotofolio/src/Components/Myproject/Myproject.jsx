// src/Components/MyProject.js

import React, { useState } from 'react';
import './Myproject.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import  brokerFree from '../Images/image.jpg'; // Corrected relative path
import prepmintImage from "../Images/image1.jpg"

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
      description:
        "Developed an application using React, Redux, and SCSS to detect deep fake face swaps. The project improved processing speed by 30% through optimized image loading techniques.",
      techStack: ["React", "Redux", "SCSS"],
      img: "https://4kwallpapers.com/images/walls/thumbs_3t/5661.jpg",
      github: "https://github.com/example/swapshild",
      liveDemo: "https://example.com/swapshild",
    },
    {
      title: "SNAPNEST: Social Media Application",
      description:
        "Led a hackathon project utilizing HTML, Tailwind CSS, React.js, Node.js, Express.js, and MongoDB. Implemented user authentication and real-time notifications.",
      techStack: ["HTML", "Tailwind CSS", "React.js", "Node.js"],
      img: "https://4kwallpapers.com/images/walls/thumbs_3t/5661.jpg",
      github: "https://github.com/example/snapnest",
      liveDemo: "https://example.com/snapnest",
    },
    {
      title: "BrokerFree: A Real Estate Web Application",
      description: "Created an AI-driven application using React.js, Node.js, and MongoDB. Provides real-time property listings and recommendations based on user preferences.",
      techStack: ["React.js", "Node.js", "MongoDB"],
      img: brokerFree, // Ensure 'brokerFree' is defined as a valid image import
      github: "https://github.com/RajukrRaja/real-state-web-application",
      liveDemo: "https://rajukrraja.github.io/real-state-web-application/"
    },
    
    {
      title: "PREPMINT: Preparation Hub",
      description:
        "Created a comprehensive platform for exam preparation that includes resources, practice tests, and community features for collaborative learning.",
      techStack: ["React.js", "Node.js", "MongoDB"],
      img: prepmintImage, // Imported local image
      github: "https://github.com/RajukrRaja/kid-center-",
      liveDemo: "https://rajukrraja.github.io/kid-center-/",
    },
  ];

  return (
    <div className="project-container">
      <div className="heading">
        <h1>My Projects</h1>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            onClick={() => toggleExpand(index)}
          >
            <div className="card-inner">
              <div className="project-image-container">
                {/* Wrap the image in an <a> tag to make it clickable */}
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()} // Prevents card toggle
                >
                  <img
                    src={project.img}
                    alt={`Screenshot of ${project.title}`}
                    className="project-image"
                    onError={(e) => {
                      e.target.onerror = null; // Prevents infinite loop
                      e.target.src = 'https://via.placeholder.com/300x200?text=Image+Unavailable'; // Fallback image
                    }}
                  />
                </a>
                <div className="image-overlay">
                  <h2>{project.title}</h2>
                </div>
              </div>
              <div className="project-content">
                <div className="tech-stack">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <p
                  className={`project-description ${
                    isExpanded[index] ? 'expanded' : ''
                  }`}
                >
                  {project.description}
                </p>
                <button className="view-details-button">
                  {isExpanded[index] ? 'Hide Details' : 'View Details'}
                </button>
                {isExpanded[index] && (
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub /> GitHub
                    </a>
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyProject;
