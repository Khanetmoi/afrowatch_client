import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import  Nav  from './Pages/Home';
import LogIn from './Pages/LogIn'

const App = () => {
  return (
    <Home/>
    // <Router>
    //   <Nav/>

    //   <Routes>
    //     <Route exact path="/">
    //       <Home />
    //     </Route>
    //     <Route path="/LogIn">
    //       <LogIn />
    //     </Route>
    //     </Routes>
    // </Router>
  );
};

export default App;
