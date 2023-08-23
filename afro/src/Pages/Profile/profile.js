import React, { useState, useEffect } from 'react';
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
  margin: 0 2%;
  height: 30vh;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 40vh;
  }
  img {
    margin: 20px;
    border-radius: 50%;
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

const ProfileHeader = styled.div`
  background-color: #f4f7f9;
  // background-color: blue;
  padding: 10px 0;
  
`;
const UserProfile = styled.div`
  background-color: white;
  margin: 0 20px;
  border-radius: 20px;
`;

const SectionContent =  styled.div`
//  background-color: blue;
 margin: 20px;
//  border-radius: 400px;
`;
const Profile = () => {
  const [activeProfile, setActiveProfile] = useState('Home');
  const [isOpen, setIsOpen] = useState(false);
  const [startTouchX, setStartTouchX] = useState(null);

  const storedUserId = JSON.parse(localStorage.getItem('loggedInStatus'));
  
  //const user_id = props.userId;
  const user_id = storedUserId.matchedUserId;

  // API Link comment get
  const api_link_user = 'https://myworklm.com/Afrowatch_admin/api/user/afrowatch_api_user_get.php?user_id='+user_id;

  // user get All info
    const [informations, setInformation] = useState([]);

    useEffect(() => {
        async function fetchInformation() {
            try {
                const response = await fetch(api_link_user);
                const data = await response.json();
                setInformation(data); // Update the state with fetched users
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        }
        fetchInformation();
    }, []);
  
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

  const userImage = 'https://myworklm.com/Afrowatch_admin/profiles/user/'
  return (
    <ProfileHeader className='Profile'>
      <UserProfile>
        {
          informations.map(
            (user, index) => (
              <UserInfo>
                <img src={userImage + user.userImage} alt="PofilePic" />
                {user.userFirstname !== null && user.userLastname !== null ? (
                  <h3>{user.userFirstname} {user.userLastname}</h3>
                ) : (
                  <h3>{user.userMail}</h3>
                )}
              </UserInfo>
            )
          )
        }
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
            library
          </li>
        </TabsContainer>
      </UserProfile>

      <SectionContent>
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
      </SectionContent>
    </ProfileHeader> 
  );
};

export default Profile;