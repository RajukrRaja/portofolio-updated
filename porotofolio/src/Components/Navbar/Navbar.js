import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled, { ThemeProvider, keyframes, createGlobalStyle } from 'styled-components';
import Sidebar from '../sidebar/sidebar';
import { FaBars, FaBell, FaUserCircle, FaMoon, FaSun } from 'react-icons/fa';
import Notification from '../notifiaction/notification'; // Import the Notification component

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    transition: all 0.3s ease;
  }
`;

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Nav isScrolled={scrollPosition > 50}>
        <Hamburger onClick={toggleSidebar}>
          <FaBars />
        </Hamburger>
        <NavMenu>
          <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <Dropdown>
            <NavLink to="/services">Services</NavLink>
            <DropdownContent>
              <NavLink to="/services/web-design">Web Design</NavLink>
              <NavLink to="/services/seo">SEO</NavLink>
              <NavLink to="/services/marketing">Marketing</NavLink>
            </DropdownContent>
          </Dropdown>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/MyBlog">Blogs</NavLink>
        </NavMenu>
        <NavIcons>
          <ThemeToggle onClick={toggleDarkMode}>
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </ThemeToggle>
          <SearchForm onSubmit={handleSearch}>
            <SearchInput
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
            />
          </SearchForm>
          <Notification /> {/* Notification component */}
          <Profile>
            <FaUserCircle />
            <ProfileDropdown>
              <NavLink to="/profile">Profile</NavLink>
              <NavLink to="/settings">Settings</NavLink>
              <LogoutButton>Logout</LogoutButton>
            </ProfileDropdown>
          </Profile>
        </NavIcons>
      </Nav>
      {isSidebarOpen && <Sidebar toggleSidebar={toggleSidebar} />}
      <ScrollIndicator scroll={scrollPosition} />
    </ThemeProvider>
  );
};

// Light and Dark Themes
const lightTheme = {
  background: '#fff',
  color: '#333',
  hover: '#ddd',
  primary: '#007bff',
  shadow: 'rgba(0, 0, 0, 0.1)',
};

const darkTheme = {
  background: '#222',
  color: '#fff',
  hover: '#333',
  primary: '#4a90e2',
  shadow: 'rgba(255, 255, 255, 0.1)',
};

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(-10%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideInLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const wiggle = keyframes`
  0%, 100% {
    transform: rotate(-10deg);
  }
  50% {
    transform: rotate(10deg);
  }
`;

const smoothWidth = keyframes`
  from {
    width: 0%;
  }
  to {
    width: ${({ scroll }) => (scroll / (document.body.scrollHeight - window.innerHeight)) * 100}%;
  }
`;

// Styled-components for styling
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: ${({ isScrolled, theme }) => (isScrolled ? `0 2px 10px ${theme.shadow}` : 'none')};
  transition: all 0.3s ease;
`;

const NavMenu = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;

  a {
    color: ${({ theme }) => theme.color};
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    transition: all 0.3s ease;
    position: relative;

    &.active {
      background: ${({ theme }) => theme.primary};
      color: #fff;
    }

    &:hover {
      background: ${({ theme }) => theme.hover};
      transform: scale(1.05);
      box-shadow: 0px 4px 10px ${({ theme }) => theme.shadow};
    }
  }

  @media (max-width: 768px) {
    display: none; /* Hide the nav links on smaller screens */
  }
`;

const Hamburger = styled.div`
  display: none;
  font-size: 2rem;
  cursor: pointer;
  color: ${({ theme }) => theme.color};

  @media (max-width: 768px) {
    display: block; /* Show the hamburger icon on smaller screens */
  }

  &:hover {
    animation: ${wiggle} 0.5s ease infinite;
  }
`;

const BellIcon = styled.div`
  position: relative;
  font-size: 1.5rem;
  cursor: pointer;
  animation: ${wiggle} 1s ease infinite;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ProfileDropdown = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  background: ${({ theme }) => theme.background};
  padding: 0.5rem;
  flex-direction: column;
  box-shadow: 0 2px 10px ${({ theme }) => theme.shadow};
  border-radius: 8px;
  animation: ${slideDown} 0.3s ease, ${fadeIn} 0.3s ease;

  a {
    color: ${({ theme }) => theme.color};
    padding: 0.5rem 1rem;
    text-decoration: none;
    border-radius: 8px;

    &:hover {
      background: ${({ theme }) => theme.primary};
      color: #fff;
      transform: scale(1.1);
    }
  }
`;

const SidebarWrapper = styled.div`
  animation: ${slideInLeft} 0.5s ease;
`;

const ScrollIndicator = styled.div`
  height: 5px;
  background: ${({ theme }) => theme.primary};
  width: ${({ scroll }) => (scroll / (document.body.scrollHeight - window.innerHeight)) * 100}%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  animation: ${smoothWidth} 0.5s ease;
`;

// Define the missing styled-components
const Dropdown = styled.div`
  position: relative;

  &:hover div {
    display: flex;
  }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background: ${({ theme }) => theme.background};
  padding: 0.5rem;
  top: 100%;
  box-shadow: 0 2px 10px ${({ theme }) => theme.shadow};
  border-radius: 8px;

  a {
    padding: 0.5rem 1rem;
    white-space: nowrap;
  }
`;

const NavIcons = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
`;

const ThemeToggle = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(20deg);
  }
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.hover};
  padding: 0.3rem;
  border-radius: 8px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  padding: 0.5rem;
  background: transparent;
  color: ${({ theme }) => theme.color};

  &::placeholder {
    color: ${({ theme }) => theme.color};
  }
`;

const Profile = styled.div`
  position: relative;
  cursor: pointer;
  font-size: 1.8rem;

  &:hover div {
    display: flex;
  }
`;

const LogoutButton = styled.button`
  padding: 0.5rem 1rem;
  background: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #c0392b;
  }
`;

export default Navbar;
