import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './Services.css';

function Services() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabs = ["Tech Service", "Marketing Service", "Other Service 1"];

  return (
    <div>
      {/* Tabs */}
      <div className="tabs">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${index === activeTab ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Services */}
      <div className="services-container">
        {/* Render services based on active tab */}
        <TransitionGroup>
          {renderServices(activeTab)}
        </TransitionGroup>
      </div>
    </div>
  );
}

// Function to render services based on active tab
function renderServices(activeTab) {
  // Define service content for each tab
  const serviceContent = [
    [
      { title: "Digital Learning", description: "This is the default description for Digital Learning." },
      { title: "Our Innovative Solution", description: "This is the default description for Our Innovative Solution." },
      { title: "Empowering a Learning Ecosystem", description: "This is the default description for Empowering a Learning Ecosystem." },
      { title: "Personalized Tutoring", description: "This is the default description for Personalized Tutoring." }
    ],
    [
      { title: "Marketing Service 1", description: "This is the default description for Marketing Service 1." },
      { title: "Marketing Service 2", description: "This is the default description for Marketing Service 2." },
      { title: "Marketing Service 3", description: "This is the default description for Marketing Service 3." },
      { title: "Marketing Service 4", description: "This is the default description for Marketing Service 4." }
    ],
    [
      { title: "Other Service 1", description: "This is the default description for Other Service 1." },
      { title: "Other Service 2", description: "This is the default description for Other Service 2." },
      { title: "Other Service 3", description: "This is the default description for Other Service 3." },
      { title: "Other Service 4", description: "This is the default description for Other Service 4." }
    ],
  ];

  // Map over the services for the active tab and render them with CSSTransition
  return serviceContent[activeTab].map((service, index) => (
    <CSSTransition key={index} timeout={500} classNames="service">
      <div className="service">
        <h2>{service.title}</h2>
        <p>{service.description}</p>
      </div>
    </CSSTransition>
  ));
}

export default Services;
