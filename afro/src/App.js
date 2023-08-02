import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import  Nav  from './Pages/Home';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';

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

  // Render different pages based on the 'currentPage' state
  if (currentPage === 'home') {
    return (
      <div>
        <Home  page = {(cpage) => setCurrentPage(cpage)} logged = {isLoggedIn} />
        <button onClick={() => handlePageChange('about')}>Go to About Page</button>
      </div>
    );
  } else if (currentPage === 'log In') {
    return (
      <div>
        <LogIn page = {(cpage) => setCurrentPage(cpage)}/>
      </div>
    );
  }else if (currentPage === 'log Up') {
    return (
      <div>
        <SignUp page = {(cpage) => setCurrentPage(cpage)}/>
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
