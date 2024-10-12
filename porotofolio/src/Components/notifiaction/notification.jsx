import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBell } from 'react-icons/fa';

const NotificationContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const NotificationButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  position: relative;

  &:focus {
    outline: none;
  }

  &:hover {
    color: ${({ theme }) => theme.primary}; /* Change color on hover */
  }
`;

const NotificationDropdown = styled.div`
  position: absolute;
  top: 40px; /* Adjust based on button height */
  right: 0;
  background: ${({ theme }) => theme.background};
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  display: ${({ show }) => (show ? 'block' : 'none')};
  z-index: 1000;
  width: 250px;
`;

const NotificationItem = styled.div`
  padding: 10px 15px;
  border-bottom: 1px solid #f0f0f0;
  color: ${({ theme }) => theme.color};
  transition: background 0.3s;

  &:hover {
    background: ${({ theme }) => theme.hover};
  }
`;

const NotificationTitle = styled.h4`
  margin: 0;
  font-size: 1rem;
`;

const NotificationMessage = styled.p`
  margin: 5px 0 0;
  font-size: 0.9rem;
  color: #666; /* Lighter color for message */
`;

const notificationsData = [
  { title: "New Message", message: "You have received a new message." },
  { title: "System Update", message: "Your system has been updated." },
  { title: "Reminder", message: "Don't forget to check your notifications." },
];

const Notification = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <NotificationContainer>
      <NotificationButton onClick={toggleDropdown}>
        <FaBell />
      </NotificationButton>
      <NotificationDropdown show={showDropdown}>
        {notificationsData.map((notification, index) => (
          <NotificationItem key={index}>
            <NotificationTitle>{notification.title}</NotificationTitle>
            <NotificationMessage>{notification.message}</NotificationMessage>
          </NotificationItem>
        ))}
      </NotificationDropdown>
    </NotificationContainer>
  );
};

export default Notification;
