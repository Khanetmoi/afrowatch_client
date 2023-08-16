import React, { useState } from 'react';
import styled from 'styled-components';
import disney from '.././../Images/disney.jpg'
import History from './History'
import Info from './Info';
import Settings from './Setting'

const CommentsContainer = styled.div`
//   width: 100%;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TabsContainer = styled.ul`
  display: flex;
  
  list-style: none;
  margin: 0;
  padding: 0;
  margin: 2%;
  @media (max-width: 768px) {
       justify-content: center;
      }
  li {
    margin: 10px;
    padding: 10px 20px;
    cursor: pointer;
    border: 1px solid #ccc;
    border-radius: 5px;
    @media (max-width: 768px) {
       margin: 10px;
       padding: 5px 10px;
       cursor: pointer;
       border: 1px solid #ccc;
       border-radius: 5px;
       font-size: 20px;
      }
  }

  li.active {
    background-color: #4caf50;
    color: #fff;
    border-color: transparent;
    // @media (max-width: 768px) {
    //     width: 20vh;
    //   }
  }
`;

const UserInfo = styled.h2`
  display: flex;
  border-radius: 20px;
  margin: 2%;
  height: 40vh;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 40vh;
  }
  img {
    @media (max-width: 768px) {
        width: 20vh;
      }
  }
    h3 {
        color: black;
        @media (max-width: 768px) {
            font-size: 20px;
          }
    }
`;

const UserProfile = styled.div`
background-color: white;
`;
const Profile = ({identity}) => {
  const [activeProfile, setActiveProfile] = useState('Home');
  const [isOpen, setIsOpen] = useState(false);
  const [startTouchX, setStartTouchX] = useState(null);
  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
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
  const [activeTab, setActiveTab] = useState('Info');
  return (
    <div className='Profile'>
        <UserProfile>
       <UserInfo>
            <img src={disney} alt="PofilePic" />
            <h3>Van Inayat-khan</h3>
        </UserInfo>
        <TabsContainer>
            <li
          onClick={() => handleTabClick('Info')}
          className={activeTab === 'Info' ? 'active' : ''}
          style={{color: `black`}}
        >
          info
        </li>
        <li
          onClick={() => handleTabClick('settings')}
          className={activeTab === 'settings' ? 'active' : ''}
          style={{color: `black`}}
        >
         settings
        </li>
        <li
          onClick={() => handleTabClick('history')}
          className={activeTab === 'history' ? 'active' : ''}
          style={{color: `black`}}
        >
          history
        </li>
        </TabsContainer>
        </UserProfile>
        <div>
        
            {activeTab === 'Info' && (
        <CommentsContainer>
          {/* Render comments here */}
          <Info/>
        </CommentsContainer>
      )}

      {activeTab === 'settings' && (
        <CommentsContainer>
          {/* Render questions here */}
          <Settings/>
        </CommentsContainer>
      )}

      {activeTab === 'history' && (
        <CommentsContainer>
          <History/>
        </CommentsContainer>
      )}
        </div>
    </div>
      
  );
};

export default Profile;
