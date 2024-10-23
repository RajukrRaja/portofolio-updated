import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import './Info.css';
import MatricPhoto from "../Images/matric.jpg"

function Info() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [modalContent, setModalContent] = useState(null);

  const handleCardClick = (content) => {
    setModalContent(content);
  };

  const handleCloseModal = () => {
    setModalContent(null);
  };

  return (
    <div className={`info-container ${isMobile ? 'mobile' : ''}`}>
      <h3 className="section-title">
        <span className="typing-animation">🎓 My Education</span>
      </h3>
     
      <div className="education-cards">
        {[
          {
            title: 'Bachelor Of Technology In Computer Science Engineering',
            school: 'Rungta College of Engineering, Bhilai',
            duration: '2022-2025 | Pursuing',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_bP_WtaDYQbpDuQuVC4gTYyIMm5uC7t9-uQ&s',
            cgpa: 7.5,
          },
          {
            title: 'Diploma in Computer Science Engineering',
            school: 'Satyam International Institute of Technology, Patna',
            duration: '2019-2022 | Completed',
            image: 'https://content3.jdmagicbox.com/comp/patna/c7/0612px612.x612.150513234638.e9c7/catalogue/satyam-international-polytechnic-college-bairia-patna-colleges-uhnio5ibs6.jpg',
            cgpa: 9.06,
          },
        
          {
            title: 'Matriculation (10th Standard)',
            school: 'High school sarathua | BSEB',
            duration: '2018-2019 | Completed',
            image: MatricPhoto,
            cgpa: '7.5',
          },
        ].map((education, index) => (
          <div
            key={index}
            className="education-card"
            onClick={() => handleCardClick(education)}
          >
            <img
              src={education.image}
              alt={education.school}
              className="education-image"
            />
            <div className="education-content">
              <h3>{education.title}</h3>
              <p>{education.school}</p>
              <p className="education-duration">{education.duration}</p>
              {education.cgpa && (
                <p className="education-cgpa">CGPA: {education.cgpa}</p>
              )}
              <button className="more-info-button">More Info</button>
            </div>
          </div>
        ))}
      </div>
      {modalContent && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content">
            <h3>{modalContent.title}</h3>
            <p>{modalContent.school}</p>
            <p className="education-duration">{modalContent.duration}</p>
            {modalContent.cgpa && (
              <p className="education-cgpa">CGPA: {modalContent.cgpa}</p>
            )}
            <button onClick={handleCloseModal} className="close-modal-button">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Info;
