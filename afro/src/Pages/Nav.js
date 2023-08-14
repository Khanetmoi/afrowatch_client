// import NavItem  from "./styles";
// import LoginButton  from "./styles";
// import Navigation  from "./styles";
import React, { useState, useRef, useEffect } from 'react';
import { FaBeer, BsSearch } from 'react-icons/bs';
import styled from 'styled-components';
import { LiaSignInAltSolid } from 'react-icons/lia';


const Navigation = styled.div`
position: sticky;
top: 0;
z-index: 100;
display: flex;
justify-content: space-between;
align-items: center;
background-color: black;
color: white;
padding: 1rem 2.5%;
font-size: 20px;
div {
 display: flex;
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
     width: 33px;
   }
 }
`

const NavItem = styled.li`
  margin-right: 20px;
  a {
    color: white;
  }

  @media (max-width: 768px) {
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


const Nav = ({ handleItemClick, handleLogInClick, log, logo, setWatching, page, returnHome })=>{
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    console.log(navActive); 
    setNavActive(!navActive);
  };

  // const returnHome = ()=>{
  //   console.log("return home");
  //   setWatching(false);
  //   console.log(setWatching)
  //   page("home");
  //  }

  // const returnHome = returnHome;

  return (
    <div>
    <Navigation>
        <img src={logo} alt="logo.png" onClick={returnHome}/>
        <div>
        <ul className='Desktop'>
        <div>
          <SearchBar type="text" placeholder="Search..."/>
          <BsSearch />
          {/* <SearchButton></SearchButton> */}
          </div>
        <NavItem onClick={() => handleItemClick('Home')} className='Desktop'>
        <a href="#">Home</a>
      </NavItem>
      <NavItem onClick={() => handleItemClick('Movie')} className='Desktop'>
        <a href="#">Movie</a>
      </NavItem>
      <NavItem onClick={() => handleItemClick('Show')} className='Desktop'>
        <a href="#">Show</a>
      </NavItem>
        </ul>
        <div className='Desktop'>
          {
            log?<button>Profile</button>:<LoginButton onClick={() => handleLogInClick()}>Log In</LoginButton>
          }
        </div>
        </div>
        <div className='mobile search'>
          <SearchBar type="text" placeholder="Search..."/>
          <BsSearch />
          {/* <SearchButton></SearchButton> */}
          </div>
        <HamburgerButton onClick={toggleNav} className='mobile'>☰</HamburgerButton>
        </Navigation>
        <Mobile className={`mobile ${navActive ? 'active' : ''}`}>
            
            <div>
            <ul className={`menuDisplay ${navActive ? 'active' : ''}`}>
              <NavItem onClick={() => handleItemClick('Home')}>
                 <a href="#">Home</a>
              </NavItem>
              <NavItem onClick={() => handleItemClick('Movie')}>
                 <a href="#">Movie</a>
              </NavItem>
              <NavItem onClick={() => handleItemClick('Show')}>
                 <a href="#">Show</a>
              </NavItem>
            </ul>
        <div className={`menuDisplay ${navActive ? 'active' : ''}`}>
          {
            log?<button>Profile</button>:<LoginButton onClick={() => handleLogInClick()}><LiaSignInAltSolid/>Log In</LoginButton>
          }
        
        </div>
        </div>
        </Mobile>
        </div>
  )
}

  export default Nav;