import React, { useState } from 'react';
import styled from 'styled-components';
// import Movie from './Movie';

const ProfileContainer = styled.div`
  display: flex;
  height: 100vh;
  @media (min-width: 768px) {
    // flex-direction: row; /* Switch to side-by-side layout for wider screens */
  }
  position: relative;
`;

const Sidebar = styled.ul`
  list-style: none;
  padding: 0;
  width: 200px;
  background-color: #f0f0f0;

  @media (max-width: 767px) {
    width: 50%; /* Take full width on smaller screens */
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    transition: transform 0.3s ease-in-out; /* Add a transition for smooth animation */
  }
  
`;

const TabItem = styled.li`
  padding: 10px;
  cursor: pointer;
  background-color: ${props => props.active ? '#ddd' : 'transparent'};
  &:hover {
    background-color: #ddd;
  }
`;

const ContentDisplay = styled.div`
  flex: 1;
  padding: 20px;
`;

const Profile = () => {
  const [activeProfile, setActiveProfile] = useState('Home');
  const [isOpen, setIsOpen] = useState(false);
  const [startTouchX, setStartTouchX] = useState(null);
  
  const handleTabClick = (tab) => {
    setActiveProfile(tab);
  };


  const handleTouchStart = (event) => {
    setStartTouchX(event.touches[0].clientX);
  };

  const handleTouchEnd = (event) => {
    const endTouchX = event.changedTouches[0].clientX;
    const swipeThreshold = 50; // Minimum swipe distance to trigger

    if (startTouchX - endTouchX > swipeThreshold) {
      setIsOpen(false);
      
    } else if (endTouchX - startTouchX > swipeThreshold) {
      setIsOpen(true);
      
    }

    setStartTouchX(null);
  };
  
  return (
    <ProfileContainer>
      <Sidebar isOpen={isOpen}>
        <TabItem
          active={activeProfile === 'Home'}
          onClick={() => handleTabClick('Home')}
        >
          Home
        </TabItem>
        <TabItem
          active={activeProfile === 'Movie'}
          onClick={() => handleTabClick('Movie')}
        >
          Movie
        </TabItem>
        <TabItem
          active={activeProfile === 'Shows'}
          onClick={() => handleTabClick('Shows')}
        >
          Shows
        </TabItem>
        <TabItem
          active={activeProfile === 'Subscription'}
          onClick={() => handleTabClick('Subscription')}
        >
          Subscription
        </TabItem>
      </Sidebar>
      <ContentDisplay onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        {activeProfile === 'Home' && <h1>Home</h1>}
        {activeProfile === 'Movie' && <h1>Movie</h1>}
        {activeProfile === 'Shows' && <h1>Shows</h1>}
        {activeProfile === 'Subscription' && <h1>Subscription</h1>}
      </ContentDisplay>
    </ProfileContainer>
  );
};

export default Profile;
