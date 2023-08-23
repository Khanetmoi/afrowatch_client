import React, { useState, useRef, useEffect } from 'react';
import { FaBeer, BsSearch} from 'react-icons/bs';
import {GiEgyptianProfile} from 'react-icons/gi';
import {VscSignOut} from 'react-icons/vsc';
import { CgProfile } from 'react-icons/cg';
import styled from 'styled-components';
import { LiaSignInAltSolid } from 'react-icons/lia';
import logoBlanc from '../Images/logoBlanc.png'


const Navigation = styled.div`
position: sticky;
top: 0;
z-index: 100;
display: flex;
justify-content: space-between;
align-items: center;

color: white;

font-size: 20px;
img {
  width 50px;
  height: 2rem;
  // background-color: red;
 }
.normal {
  padding: 1rem 2.5%;
  background-color: black;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
}
div {
 display: flex;
 align-items: center;
}
 
  ul {
   display: flex;
   justify-content: space-between;
   align-items: center;
   list-style-type: none;

     li {
       margin: 0 2rem;
     }
  }

  .mobile {
   display: none;
 }

 @media (max-width: 768px) {
   .mobile {
     display: block;

     .search {
       display: flex;
       justify-content: space-between;
       align-items: center;
     }
   }
   .Desktop {
     display: none; 
   }

   img {
     width: 50px;
   }
 }
`

const NavItem = styled.li`
  margin-right: 20px;
  a {
    color: white;
  }

  @media (max-width: 768px) {
    // background-color: blue;
    margin: 0.5rem 0;
  }
`;
const HamburgerButton = styled.button`
  display: none;
  background-color: white;
  @media (max-width: 768px) {
    display: block;
  }
`;

const LoginButton = styled.div`
  padding: 8px 16px;
  color: #fff;
  border: 2px solid white;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #FFC857;
  }
`;

const SearchBar = styled.input`
width: 20vw;
height: 5vh;
border-radius: 50px;

@media (max-width: 768px) {
  height: 2vh;
  width: 50vw;
}
 
`;

const Mobile = styled.div`
background-color: black;
display: flex;
flex-direction: column;
justify-content: center;
align-center: center;
  .menuDisplay {
    display: none;
  }

  &.active .menuDisplay {
    display: block;
  }
  
`;

const ProfileFlex = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: end;
margin: 0 50px;
width: 10%;
position: relative;
left: 85%;
top: 0;

 span {
  margin: 10px;
  font-size: 15px;
  cursor: pointer;
 }

 @media (max-width: 768px) {
  /* Media query for phone view */
  display: flex; /* Display ProfileFlex in phone view */
  position: absolute;
  top: 50px;
  right: 0;
  background-color: #333;
  padding: 10px;
  z-index: 10;
}

`;

const ProfileFlex1 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: start;
margin: 0 50px;
width: 10%;
position: relative;
left: 85%;
top: 0;

 span {
  margin: 10px;
  font-size: 15px;
  cursor: pointer;
 }

//  @media (max-width: 768px) {
//   /* Media query for phone view */
//   display: flex;
//   position: absolute;
//   top: 50px;
//   right: 0;
//   background-color: #333;
//   padding: 10px;
//   z-index: 10;
// }

`;


const Nav = ({ handleItemClick, handleLogInClick,logo, setWatching, page, setSearchedMovie})=>{
  const [navActive, setNavActive] = useState(false);
  const userInfo = JSON.parse(localStorage.getItem('loggedInStatus'));
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  const toggleNav = () => {
    console.log(navActive); 
    setNavActive(!navActive);
  };

  const goProfilePage= ()=>{
    setIsProfileVisible((prevState) => !prevState);
    page('Profile')
  }

  const SignOut = ()=>{
    localStorage.removeItem('loggedInStatus');
    window.location.reload();
    page('home')
  }
  const returnHome = ()=>{
    page('home')
    console.log("return home")
    setWatching(false);
   }

   const toggleProfileVisibility = () => {
    setIsProfileVisible((prevState) => !prevState);
  };

  const handleSearch = () => {
    page('Search')
  };
  return (
    <div>
    <Navigation>
      <div className='normal'>
        <img src={logo} alt="logo.png" onClick={returnHome}/>
        <div>
        <ul className='Desktop'>
        {userInfo &&<div>
          <SearchBar type="text" placeholder="Search..." onChange={(e) => {setSearchedMovie(e.target.value); page('Search')}}/>
          {/* <button>
          <BsSearch onClick={handleSearch}/>
          </button> */}
          {/* <SearchButton></SearchButton> */}
          </div>}
          {userInfo && (
              <>
                <NavItem onClick={() => handleItemClick('Home')} className='Desktop'>
                  <a href="#">Home</a>
                </NavItem>
                <NavItem onClick={() => handleItemClick('Movie')} className='Desktop'>
                  <a href="#">Movie</a>
                </NavItem>
                <NavItem onClick={() => handleItemClick('show')} className='Desktop'>
                  <a href="#">Show</a>
                </NavItem>
              </>
            )}
        </ul>
        <div className='Desktop'>
          {
            userInfo?<GiEgyptianProfile className='profile' onClick={toggleProfileVisibility} />:<LoginButton onClick={() => handleLogInClick()}>Log In</LoginButton>
          }
        </div>
        </div>
        {userInfo &&<div className='mobile search'>
          <SearchBar type="text" placeholder="Search..." onChange={(e) => {setSearchedMovie(e.target.value); page('Search')}}/>
             <BsSearch />
          
          
          {/* <SearchButton></SearchButton> */}
          </div>}
        <HamburgerButton onClick={toggleNav} className='mobile'>☰</HamburgerButton>
        </div>
        </Navigation>
        <Mobile className={`mobile ${navActive ? 'active' : ''}`}>
            
            <div>
            <ul className={`menuDisplay ${navActive ? 'active' : ''}`}>
            {userInfo && (
              <div>
                <NavItem onClick={() => handleItemClick('Home')} className='Desktop'>
                  <a href="#">Home</a>
                </NavItem>
                <NavItem onClick={() => handleItemClick('Movie')} className='Desktop'>
                  <a href="#">Movie</a>
                </NavItem>
                <NavItem onClick={() => handleItemClick('show')} className='Desktop'>
                  <a href="#">Show</a>
                </NavItem>
              </div>
            )}
            </ul>
        <div className={`menuDisplay ${navActive ? 'active' : ''}`}>
          {
            userInfo?<ProfileFlex1>
            <span style={{color:`white`}} onClick={()=>{goProfilePage()}}><CgProfile/>Profile</span>
            <span style={{color:`white`}} onClick={()=>{SignOut()}}><VscSignOut/>Sign Out</span>
            </ProfileFlex1>:<LoginButton onClick={() => handleLogInClick()}><LiaSignInAltSolid/>Log In</LoginButton>
          }
        
        </div>
        {userInfo&& isProfileVisible && <ProfileFlex className='Desktop'>
               <span style={{color:`white`}} onClick={()=>{goProfilePage()}}><CgProfile/>Profile</span>
               <span style={{color:`white`}} onClick={()=>{SignOut()}}><VscSignOut/>Sign Out</span>
        </ProfileFlex>}
        
        </div>
        </Mobile>
        </div>
  )
}

  export default Nav;
