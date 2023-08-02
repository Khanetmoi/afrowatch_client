import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import  Nav  from './Pages/Home';
import LogIn from './Pages/LogIn';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' as the initial page

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Render different pages based on the 'currentPage' state
  if (currentPage === 'home') {
    return (
      <div>
        <Home  page = {(cpage) => setCurrentPage(cpage)} />
        <button onClick={() => handlePageChange('about')}>Go to About Page</button>
      </div>
    );
  } else if (currentPage === 'log In') {
    return (
      <div>
        <LogIn page = {(cpage) => setCurrentPage(cpage)}/>
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
