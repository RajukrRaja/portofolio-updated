import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled, { keyframes } from 'styled-components';
import { bounce, fadeIn } from 'react-animations';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import HireMe from '../hireme/hireme'; // Import HireMe component

const imageSource = require('../Images/My photo.jpg');

function Home() {
  const [fullstackText, setFullstackText] = useState('Fullstack');
  const [isHireMeOpen, setIsHireMeOpen] = useState(false); // State for modal visibility
  const textOptions = ['Frontend', 'Backend'];

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % textOptions.length;
      setFullstackText(textOptions[currentIndex]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  // Function to toggle modal visibility
  const toggleHireMeModal = () => {
    setIsHireMeOpen(!isHireMeOpen);
  };

  return (
    <>
      <HomeContainer isMobile={isMobile}>
        <LeftSection>
          <ProfileImage src={imageSource} alt="Your Name" />
        </LeftSection>
        <RightSection>
          <Title>
            I'm a <DynamicText>{fullstackText}</DynamicText> Developer
          </Title>
          <Description>
            I am a passionate fullstack Developer with expertise in both frontend and backend technologies. My goal is to
            deliver scalable, flexible, and user-friendly web applications.
          </Description>
          <CTAButtons>
            <DownloadButton href="https://drive.google.com/file/d/1W0vXdvyAISNdTPQRoVs6yFfN4caK0ro7/view?usp=sharing">
              Download Resume
            </DownloadButton>
            <HireButton onClick={toggleHireMeModal}>Hire Me</HireButton>
          </CTAButtons>

          <SocialIcons>
            <SocialLink href="https://www.linkedin.com/in/raju-kumar-raja/" target="_blank">
              <FaLinkedin />
            </SocialLink>
            <SocialLink href="https://leetcode.com/profile/account/" target="_blank">
              <SiLeetcode />
            </SocialLink>
            <SocialLink href="https://github.com/RajukrRaja" target="_blank">
              <FaGithub />
            </SocialLink>
            <SocialLink href="https://www.instagram.com/" target="_blank">
              <FaInstagram />
            </SocialLink>
            <SocialLink href="https://x.com/RAJUKUM81888402" target="_blank">
              <FaTwitter />
            </SocialLink>
          </SocialIcons>
        </RightSection>
      </HomeContainer>

      {/* Conditionally render HireMe component as a modal */}
      {isHireMeOpen && (
        <ModalOverlay onClick={toggleHireMeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <HireMe />
            <CloseButton onClick={toggleHireMeModal}>X</CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
}

export default Home;

// Keyframes for animations
const bounceAnimation = keyframes`${bounce}`;
const fadeInAnimation = keyframes`${fadeIn}`;
const slideIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Styled components
const HomeContainer = styled.div`
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')};
  background-color: #282c34;
  padding: 2rem;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  animation: ${fadeInAnimation} 1.5s ease-in-out;
`;

// Define enlarge and glow animation for profile image
const enlargeAndGlow = keyframes`
  0% {
    transform: scale(1) rotate(0deg);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }
  50% {
    transform: scale(1.2) rotate(0deg);
    box-shadow: 0 0 30px rgba(97, 218, 251, 0.7),
                0 0 60px rgba(97, 218, 251, 0.5),
                0 0 90px rgba(97, 218, 251, 0.3);
  }
  100% {
    transform: scale(1.1) rotate(0deg);
    box-shadow: 0 0 15px rgba(97, 218, 251, 0.7),
                0 0 30px rgba(97, 218, 251, 0.5),
                0 0 45px rgba(97, 218, 251, 0.3);
  }
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease;
  margin-top: 3rem;
   animation: ${enlargeAndGlow} 0.8s forwards; 

  &:hover {
   /* Apply the enlarge and glow animation on hover */
  }
`;
const RightSection = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  animation: ${slideIn} 1.2s ease-out;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 1rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  background: linear-gradient(90deg, #00dbde, #fc00ff);
  -webkit-background-clip: text;
  color: transparent;
  text-shadow: 2px 4px 6px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: scale(1.05);
    text-shadow: 4px 6px 8px rgba(0, 0, 0, 0.5);
  }

  &::before {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 0%;
    height: 3px;
    background-color: #61dafb;
    transition: width 0.4s ease;
  }

  &:hover::before {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const DynamicText = styled.span`
  color: #61dafb;
  animation: ${bounceAnimation} 2s infinite;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #ddd;
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const CTAButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

const DownloadButton = styled.a`
  padding: 0.8rem 2rem;
  background-color: #61dafb;
  color: #282c34;
  text-decoration: none;
  font-size: 1rem;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #21a1f1;
  }
`;

const HireButton = styled.button`
  padding: 0.8rem 2rem;
  background-color: #fff;
  color: #282c34;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
    background-color: #ddd;
  }
`;

// Social Icons Styles
const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  gap: 1.5rem;
`;

const SocialLink = styled.a`
  font-size: 2.5rem;
  color: #ddd;
  transition: color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  margin: 0 10px;

  &:hover {
    color: #61dafb;
    transform: scale(1.3) rotate(10deg);
    box-shadow: 0 0 15px rgba(97, 218, 251, 0.7),
                0 0 30px rgba(97, 218, 251, 0.5),
                0 0 45px rgba(97, 218, 251, 0.3);
    animation: ${bounceAnimation} 0.8s;
  }

  &:active {
    transform: scale(1.1) rotate(0deg);
    box-shadow: 0 0 8px rgba(97, 218, 251, 0.5);
  }

  /* For screens smaller than 768px */
  @media (max-width: 768px) {
  
    font-size: 2rem;
    &:hover {
      animation: ${bounceAnimation} 0.8s;
    }

    
  }

  /* For screens smaller than 480px */
  @media (max-width: 480px) {
    font-size: 2rem;
    margin: 0 5px;
    margin-top:20px;

    &:hover {
      animation: ${bounceAnimation} 0.8s;
    }
  }
`;



// Modal Styles
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  position: relative;
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  max-width: 500px;
  width: 100%;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #888;

  &:hover {
    color: #000;
  }
`;
