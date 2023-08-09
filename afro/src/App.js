import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
import Subscription from './Pages/Subscription'
import logo from './Images/logo.png'
import LoginButton  from './Pages/styles';
import Navigation from './Pages/styles';
import styled from 'styled-components';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home'); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in based on the localStorage value
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const handleItemClick = (item) => {
    setCurrentPage('home')
    };

    const handleLogInClick = ()=>{
      setCurrentPage("log In");
      console.log("you clicked")
    }
  // Render different pages based on the 'currentPage' state
  if (currentPage === 'home') {
    return (
      <div>
        <Home  page = {(cpage) => setCurrentPage(cpage)} logged = {isLoggedIn} />
      </div>
    );
  } else if (currentPage === 'log In') {
    return (
      <div>
        <Navig>
        {
     
          <Navigation>
          <img src={logo} alt="logo.png"  onClick={handleItemClick}/>
          <div>
            {
              isLoggedIn?<button>Profile</button>:<LoginButton onClick={handleLogInClick}>Log In</LoginButton>
            }
          </div>
          </Navigation>
    
        }
        </Navig>
        <LogIn page = {(cpage) => setCurrentPage(cpage)}/>
      </div>
    );
  }else if (currentPage === 'log Up') {
    return (
      <div>
        <Navig>
        {
     
          <Navigation>
          <img src={logo} alt="logo.png"  onClick={handleItemClick}/>
          <div>
            {
              isLoggedIn?<button>Profile</button>:<LoginButton onClick={handleLogInClick}>Log In</LoginButton>
            }
          </div>
          </Navigation>
    
        }
        </Navig>
        <SignUp page = {(cpage) => setCurrentPage(cpage)}/>
      </div>
    );
  }
  else if (currentPage === 'Subscription') {
    return (
      <div>
        <Navig>
        {
     
          <Navigation>
          <img src={logo} alt="logo.png"  onClick={handleItemClick}/>
          <div>
            {
              isLoggedIn?<button>Profile</button>:<LoginButton onClick={handleLogInClick}>Log In</LoginButton>
            }
          </div>
          </Navigation>
    
        }
        </Navig>
        <Subscription page = {(cpage) => setCurrentPage(cpage)}/>
      </div>
    );
  }

  return (
    <div>
      {/* <Home onClick={() => {setCurrentPage}} /> */}
      <h1>404 Page Not Found</h1>
    </div>
  );
};

export default App;


const Navig = styled.div``