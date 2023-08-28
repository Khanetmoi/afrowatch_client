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
import Nav from './Pages/Nav';
import Profile from './Pages/Profile/profile';
import SearchPage from './Pages/SearchPage';
import Watch from './Pages/Watch';
// const [watching , setWatching ] = useState(false);


const App = () => {
  const [currentPage, setCurrentPage] = useState('home'); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [categoryTitle, setCategoryTitle] = useState("Home Page");
  const [tab, setTab] = useState("Animation")
  const [watching , setWatching ] = useState(false);
  const [identification, setIdentification] = useState(null);
  const [searchedMovie, setSearchedMovie] = useState('');
  const [selectedCard, setSelectedCard] = useState(null);

  

 
console.log(JSON.parse(localStorage.getItem('loggedInStatus')))

  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem('loggedInStatus')))
    const loggedInStatus = JSON.parse(localStorage.getItem('loggedInStatus'));
    if (loggedInStatus && loggedInStatus.email && loggedInStatus.password) {
      setIsLoggedIn(true);
      // console.log(isLoggedIn)
      console.log("you are logged in 1"+isLoggedIn)
    }
  }, []);

  console.log("you are logged in 2"+isLoggedIn)
  const genres = [
    <option key={1}>Action</option>,
    <option key={2}>Comedy</option>,
    <option key={3}>Drama</option>,
    <option key={4}>Sci-Fi</option>,
    <option key={5}>Fantasy</option>,
    <option key={6}>Adventure</option>,
    <option key={7}>Adventure</option>,
    <option key={8}>Romance</option>,
    <option key={9}>Thriller</option>,
    <option key={10}>Horror</option>,
    <option key={11}>Superhero</option>,
    <option key={12}>Animation</option>,
    <option key={13}>Family</option>,
    <option key={14}>Mystery</option>,
    <option key={15}>Crime</option>,
    <option key={16}>Historical</option>,
    <option key={17}>Sports</option>,
    <option key={18}>Biographical</option>,
    <option key={19}>Psychological</option>,
    <option key={20}>Suspense</option>,
    <option key={21}>Time Travel</option>,
    <option key={22}>Documentary</option>,
    <option key={23}>War</option>,
    <option key={24}>Musical</option>,
    <option key={25}>Western</option>,
    <option key={26}>Coming of Age</option>,
    <option key={27}>Dystopian</option>,
    <option key={28}>Disaster</option>,
    <option key={29}>Spy/Espionage</option>,
    <option key={30}>Martial Arts</option>,
    <option key={31}>Supernatural</option>,
  ];

  const home = [
    <option key={1}>Popular</option>,
    <option key={2}>New Movies</option>,
    <option key={3}>Editor choice</option>,
    <option key={4}>Viewers choice</option>,
    <option key={5}>Film of the week</option>,
  ];
  
  const [categories, setCategories] = useState([
    <option key={1}>Popular</option>,
    <option key={2}>New Movies</option>,
    <option key={3}>Editor choice</option>,
    <option key={4}>Viewers choice</option>,
    <option key={5}>Film of the week</option>,
  ]);

  const returnHome = ()=>{
   
    console.log("return home")
    setWatching(false);
    console.log(watching)
   }
   
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const handleItemClick = (item) => {
    setCurrentPage('home')
    if(item === "Home")
     {
      console.log('home clicked')
      setTab("Home")
      setCategories(home)
      setCategoryTitle("Home Page")
      setWatching(false)
     }
     else if(item === "Movie"){
      setTab("Movies")
      console.log('movie clicked')
      setCategories(genres)
        setCategoryTitle("Movie")
        setWatching(false)
      
     }
     else if(item === "show"){
      console.log('show clicked')
        setTab("Shows")
        setCategories(genres)
        setCategoryTitle("Show")
        setWatching(false)
     }
     else if(item === "Animation"){
      console.log('show clicked')
        setTab("Animation")
        setCategories(genres)
        setCategoryTitle("Animation")
        setWatching(false)
     }
     else if(item === "Documentaries"){
      console.log('show clicked')
        setTab("Documentary")
        setCategories(genres)
        setCategoryTitle("Documentary")
        setWatching(false)
     }
     else if(item === "Series"){
      console.log('show clicked')
        setTab("Series")
        setCategories(genres)
        setCategoryTitle("Series")
        setWatching(false)
     }
    };
    
  // const handleItemClick = (item) => {
  //   setCurrentPage('home')
  //   };

    const handleLogInClick = ()=>{
      setCurrentPage("log In");
      console.log("you clicked")
    }
  // Render different pages based on the 'currentPage' state
  if (currentPage === 'home') {
    return (
      <div>
        <Nav handleItemClick={handleItemClick} handleLogInClick = {handleLogInClick} logo={logo} returnHome={returnHome} page = {(cpage) => setCurrentPage(cpage)} setWatching={setWatching} setSearchedMovie={setSearchedMovie}/>
        <Home  page = {(cpage) => setCurrentPage(cpage)} logged = {isLoggedIn} watch={setWatching} watchv= {watching} identity={identification} tab={tab} selectedCard={selectedCard} setSelectedCard={setSelectedCard}/>
      </div>
    );
  } else if (currentPage === 'log In') {
    return (
      <div>
        <Nav handleItemClick={handleItemClick} handleLogInClick = {handleLogInClick} logo={logo} returnHome={returnHome} page = {(cpage) => setCurrentPage(cpage)} setWatching={setWatching} setSearchedMovie={setSearchedMovie}/>
        <LogIn page = {(cpage) => setCurrentPage(cpage)} log={setIsLoggedIn} identification ={setIdentification}/>
      </div>
    );
  }else if (currentPage === 'log Up') {
    return (
      <div>
        <Nav handleItemClick={handleItemClick} handleLogInClick = {handleLogInClick} logo={logo} returnHome={returnHome} page = {(cpage) => setCurrentPage(cpage) } setWatching={setWatching} setSearchedMovie={setSearchedMovie}/>
        <SignUp page = {(cpage) => setCurrentPage(cpage) } log={setIsLoggedIn} />
      </div>
    );
  }
  else if (currentPage === 'Subscription') {
    return (
      <div>
        <Nav handleItemClick={handleItemClick} handleLogInClick = {handleLogInClick} logo={logo} returnHome={returnHome} page = {(cpage) => setCurrentPage(cpage)} setWatching={setWatching} setSearchedMovie={setSearchedMovie}/>
        <Subscription page = {(cpage) => setCurrentPage(cpage)} />
      </div>
    );
  }
  else if (currentPage === 'Profile') {
    return (
      <div>
        <Nav handleItemClick={handleItemClick} handleLogInClick = {handleLogInClick} logo={logo} returnHome={returnHome} page = {(cpage) => setCurrentPage(cpage)} setWatching={setWatching} setSearchedMovie={setSearchedMovie}/>
        <Profile identity = {identification}/>
      </div>
    );
  }
  else if (currentPage === 'Search') {
    return (
      <div>
        <Nav handleItemClick={handleItemClick} handleLogInClick = {handleLogInClick} logo={logo} returnHome={returnHome} page = {(cpage) => setCurrentPage(cpage)} setWatching={setWatching} setSearchedMovie={setSearchedMovie}/>
        <SearchPage searchedMovie={searchedMovie} selectedCard={selectedCard} setSelectedCard={setSelectedCard} watch={setWatching} page = {(cpage) => setCurrentPage(cpage)} currentPage={currentPage}/>
      </div>
    );
  }
  else if (currentPage === 'watch') {
    return (
      <div>
        <Nav handleItemClick={handleItemClick} handleLogInClick = {handleLogInClick} logo={logo} returnHome={returnHome} page = {(cpage) => setCurrentPage(cpage)} setWatching={setWatching} setSearchedMovie={setSearchedMovie}/>
        <Watch selectedCard={selectedCard}/>
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