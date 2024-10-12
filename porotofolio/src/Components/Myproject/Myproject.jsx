import React, { useState } from 'react';
import './Myproject.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

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
      description: "Developed an application using React, Redux, and SCSS to detect deep fake face swaps. The project improved processing speed by 30% through optimized image loading techniques.",
      techStack: ["React", "Redux", "SCSS"],
      img: "https://4kwallpapers.com/images/walls/thumbs_3t/5661.jpg",
      github: "https://github.com/example/swapshild",
      liveDemo: "https://example.com/swapshild",
    },
    {
      title: "SNAPNEST: Social Media Application",
      description: "Led a hackathon project utilizing HTML, Tailwind CSS, React.js, Node.js, Express.js, and MongoDB. Implemented user authentication and real-time notifications.",
      techStack: ["HTML", "Tailwind CSS", "React.js", "Node.js", ],
      img: "https://4kwallpapers.com/images/walls/thumbs_3t/5661.jpg",
      github: "https://github.com/example/snapnest",
      liveDemo: "https://example.com/snapnest",
    },
    {
      title: "TRIVDENTA: AI Medicine Recommendation",
      description: "Created an AI-driven application using React.js, Node.js, and MongoDB. Provides real-time medicine recommendations based on user symptoms.",
      techStack: ["React.js", "Node.js", "MongoDB"],
      img: "https://4kwallpapers.com/images/walls/thumbs_3t/5661.jpg",
      github: "https://github.com/example/trivdenta",
      liveDemo: "https://example.com/trivdenta",
    },
    {
      title: "CODEBOOSTER: Coding Challenge Platform",
      description: "Developed an interactive platform for coding challenges. Integrated a real-time coding editor and leaderboards to improve user engagement.",
      techStack: ["React.js", "Node.js", "MongoDB"],
      img: "https://4kwallpapers.com/images/walls/thumbs_3t/5661.jpg",
      github: "https://github.com/example/codebooster",
      liveDemo: "https://example.com/codebooster",
    },
  ];

  return (
    <div className="project-container">
      <div className="heading">
        <h1>My Projects</h1>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card" onClick={() => toggleExpand(index)}>
            <div className="card-inner">
              <div className="project-image-container">
                <img src={project.img} alt={project.title} className="project-image" />
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
                <p className={`project-description ${isExpanded[index] ? 'expanded' : ''}`}>
                  {project.description}
                </p>
                <button className="view-details-button">
                  {isExpanded[index] ? "Hide Details" : "View Details"}
                </button>
                {isExpanded[index] && (
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub /> GitHub
                    </a>
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
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
