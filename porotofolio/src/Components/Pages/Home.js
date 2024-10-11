import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled, { keyframes } from 'styled-components';
import { bounce, fadeIn } from 'react-animations'; // Example animation imports

const imageSource = require('../Images/My photo.jpg');

function Home() {
  const [fullstackText, setFullstackText] = useState('Fullstack');
  const textOptions = ['Frontend', 'Backend'];

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % textOptions.length;
      setFullstackText(textOptions[currentIndex]);
    }, 2000); // Smooth interval change

    return () => clearInterval(interval);
  }, []);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
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
          <DownloadButton href="https://drive.google.com/file/d/1MFaPWQbhYBQc-2dJ4oVwCeO41aYGBL_b/view?usp=drive_link">
            Download Resume
          </DownloadButton>
          <HireButton>Hire Me</HireButton>
        </CTAButtons>
      </RightSection>
    </HomeContainer>
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

const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease;
   margin-top: 2cm;
   margin-left:20px;

  &:hover {
    transform: scale(1.1) rotate(5deg);
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
  font-size: 3rem; // Increased font size for better visibility
  color: #fff;
  margin-bottom: 1rem;
  text-align: center;
  text-transform: uppercase; // Makes the title fully uppercase for a bold impact
  letter-spacing: 0.1rem; // Adds spacing between letters for a more spacious look
  background: linear-gradient(90deg, #00DBDE, #FC00FF); // Gradient text
  -webkit-background-clip: text; // Ensures gradient text effect is visible
  color: transparent; // Text color is transparent to show the gradient
  text-shadow: 2px 4px 6px rgba(0, 0, 0, 0.3); // Adds depth with shadow
  transition: all 0.3s ease; // Smooth transition for hover effects
  position: relative; // Needed for pseudo-element below

  &:hover {
    transform: scale(1.05); // Slightly enlarges on hover for an interactive effect
    text-shadow: 4px 6px 8px rgba(0, 0, 0, 0.5); // Increases the shadow effect on hover
  }

  // Adding a decorative underline effect on hover
  &::before {
    content: "";
    position: absolute;
    bottom: -10px; // Adjust this to match the distance from the text
    left: 50%;
    transform: translateX(-50%);
    width: 0%;
    height: 3px;
    background-color: #61dafb;
    transition: width 0.4s ease;
  }

  &:hover::before {
    width: 100%; // Expands underline on hover
  }

  @media (max-width: 768px) {
    font-size: 2rem; // Adjusts font size for tablets and smaller screens
  }

  @media (max-width: 480px) {
    font-size: 1.5rem; // Adjusts font size for mobile screens
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
