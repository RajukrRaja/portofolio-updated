import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

const Sidebar = ({ toggleSidebar }) => {
  return (
    <SidebarContainer>
      <CloseIcon onClick={toggleSidebar}>
        <FaTimes />
      </CloseIcon>
      <SidebarMenu>
        <NavLink exact to="/" onClick={toggleSidebar}>
          Home
        </NavLink>
        <NavLink to="/About" onClick={toggleSidebar}>
          About
        </NavLink>
        <NavLink to="/services" onClick={toggleSidebar}>
          Services
        </NavLink>
        <NavLink to="/contact" onClick={toggleSidebar}>
          Contact
        </NavLink>
        <NavLink to="/more" onClick={toggleSidebar}>
          More
        </NavLink>
      </SidebarMenu>
    </SidebarContainer>
  );
};

// Enhanced Styled-components for sidebar styling
const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
  background: linear-gradient(145deg, #1a1a1a, #333);
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  z-index: 1000;
  transition: all 0.4s ease-in-out;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  transform: translateX(0);
  opacity: 1;

  @media (max-width: 768px) {
    width: 250px;
  }

  &.hidden {
    transform: translateX(-100%);
    opacity: 0;
  }

  a {
    color: #fff;
    text-decoration: none;
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
    font-size: 1.1rem;
    transition: all 0.3s ease-in-out;
    display: inline-block;
    background: rgba(255, 255, 255, 0.1);

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      color: #f0a500;
      transform: translateX(10px);
      box-shadow: 0 5px 15px rgba(240, 165, 0, 0.2);
    }

    &.active {
      background: #f0a500;
      color: #1a1a1a;
    }
  }
`;

const CloseIcon = styled.div`
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
  align-self: flex-end;
  transition: transform 0.3s ease;

  &:hover {
    color: #f0a500;
    transform: rotate(90deg);
  }
`;

const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  a {
    position: relative;
    overflow: hidden;

    &:before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background: #f0a500;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.4s ease-in-out;
    }

    &:hover:before {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;

export default Sidebar;
