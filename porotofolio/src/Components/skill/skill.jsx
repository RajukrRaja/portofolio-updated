import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaReact, FaNodeJs, FaPython, FaJava, FaJsSquare } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiRedux, SiSocketdotio } from 'react-icons/si';

// Define skillsData including all the relevant icons
const skillsData = [
  { icon: <FaReact />, name: "React.js" },
  { icon: <SiRedux />, name: "Redux" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express.js" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <FaPython />, name: "Python" },
  { icon: <FaJava />, name: "Java" },
  { icon: <FaJsSquare />, name: "JavaScript" },
  { icon: <SiSocketdotio />, name: "Socket.io" },
];

// Animation keyframes for advanced effects
const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const glow = keyframes`
  0% { box-shadow: 0 0 10px rgba(97, 218, 251, 0.5); }
  50% { box-shadow: 0 0 40px rgba(97, 218, 251, 0.8); }
  100% { box-shadow: 0 0 10px rgba(97, 218, 251, 0.5); }
`;

const gradientBackground = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const borderAnimation = keyframes`
  0%, 100% { border-color: #61dafb; }
  50% { border-color: #3498db; }
`;

// Styled components
const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #2c3e50, #3498db, #6dd5ed, #2193b0);
  background-size: 200% 200%;
  animation: ${gradientBackground} 10s ease infinite;
  min-height: 100vh;
  overflow: hidden;
`;

const SkillCard = styled.div`
  width: 180px;
  height: 180px;
  margin: 1.5rem;
  background: linear-gradient(135deg, #20232a, #282c34);
  border: 3px solid #61dafb;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #61dafb;
  font-size: 3rem;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
  transition: transform 0.5s ease, box-shadow 0.5s ease, background 0.5s ease, border-color 0.5s ease;
  animation: ${float} 4s ease-in-out infinite, ${borderAnimation} 5s ease-in-out infinite;
  cursor: pointer;
  position: relative;
  z-index: 1;

  &:hover {
    transform: scale(1.2) rotate(5deg);
    box-shadow: 0 25px 45px rgba(0, 255, 255, 0.5), inset 0 0 50px rgba(0, 255, 255, 0.5);
    animation: ${glow} 2s ease-in-out infinite;
  }

  &::before {
    content: "";
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    border-radius: 20px;
    border: 1px solid transparent;
    background: linear-gradient(135deg, #6dd5ed, #3498db);
    background-size: 200% 200%;
    animation: ${rotate} 6s linear infinite;
    z-index: -1;
  }

  /* Responsive styles */
  @media (max-width: 768px) {
    width: 140px;
    height: 140px;
    font-size: 2.5rem;
    margin: 1rem;
  }

  @media (max-width: 480px) {
    width: 120px;
    height: 120px;
    font-size: 2rem;
  }
`;

const SkillName = styled.h3`
  font-size: 1.2rem;
  color: #fff;
  margin-top: 15px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
`;

const Title = styled.h1`
  font-size: 3.5rem;
  text-align: center;
  color: #fff;
  margin-bottom: 4rem;
  background: linear-gradient(90deg, #00dbde, #fc00ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 4px 6px 12px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Skill = () => {
  return (
    <SkillsContainer>
      <Title>My Advanced Skills</Title>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {skillsData.map((skill, index) => (
          <SkillCard key={index}>
            {skill.icon}
            <SkillName>{skill.name}</SkillName>
          </SkillCard>
        ))}
      </div>
    </SkillsContainer>
  );
};

export default Skill;
