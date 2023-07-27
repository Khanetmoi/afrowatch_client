import React, { useState } from 'react';
import styled from 'styled-components';
import comingTo from '../Images/comingTo.jpg'
import disney from '../Images/disney.jpg'
import logo from '../Images/logo.png'
import rwanda from '../Images/rwanda.jpg'


const Navigation = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color: #874C3C;
color: white;
font-size: 20px;
   ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;

      li {
        margin: 0 2rem;
      }
   }
`;

const LoginButton = styled.button`
  padding: 8px 16px;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Intro = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 2rem 0;

`;

const AfroLogo =  styled.img`
width: 33%;
`;

const SearchBar = styled.input`
width: 40vw;
height: 5vh;
border-radius: 20%;
 
`;

const SearchButton = styled.button`
height: 5vh;
border-radius: 50%;
`;
const Sponsored = styled.div`
display: flex;
justify-content: center;
flex-wrap: no-wrap;
overflow-x: auto;
width: 90%;

margin: 0 5%;


    .Scard {
        // flex: 0 0 23%;
        // margin: 0 1%;
        background-color: rgba(139, 69, 19, 255);
        color: white;
        // height: 40vh;
        width: 60%;
        aspect-ratio: 16:9;
      
     div {
         position:relative;
        //  height: 70vh;
        img {
            width: 100%;
            height: 40vh;
            // height: 100%;
            
        }

        button {
          position: absolute;
          top: 50%;
          left: 45%;
          width: 10%;
          aspect-ratio: 1;
          background-color: rgba(0,0,0, 0.5);
          color: white;
          border-radius: 50%;
        }
     }
   }
`;


const MovieList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 5%;
  
  
  padding: 20px 0;
   .MovieCard {
    background-color: rgba(139, 69, 19, 255);
    width: 18%;
    margin: 10px 1%;
    color: white;
  
 div {
     position:relative;
    img {
        width: 100%;
    }

    button {
      position: absolute;
      top: 30%;
      left: 30%;
      width: 40%;
      aspect-ratio: 1;
      background-color: rgba(0,0,0, 0.5);
      color: white;
    }
`;
const Home = ()=>{
    return (
        <>
        <Navigation>
        <img src={logo} alt="logo.png"/>
        <div>
        <LoginButton>Log In</LoginButton>
        {/* <button>Sign In</button> */}
        </div>
        </Navigation>
        
        <Intro>
          <AfroLogo src={logo} alt="Afro lofo"/>
          <h3>Welcome to afrowatch the best platform to watch African original creations</h3>
          <div>
          <SearchBar type="text" placeholder="Search..."/>
          <SearchButton>search</SearchButton>
          </div>
          
        </Intro>
        {/* Sponsored */}
        <h2 className="title">Sponsored</h2>
        <Sponsored>
          {/* <div className='Scard'>
          <div>
            <img src={comingTo} alt="poster.mp4"/>
            <button>Play</button>
          </div>

          <h2>expendable</h2>
          <h3>2022 . 60 mn</h3>
          </div> */}
          {/* <div className='Scard'>
          <div>
            <img src={comingTo} alt="poster.mp4"/>
            <button>Play</button>
          </div>

          <h2>expendable</h2>
          <h3>2022 . 60 mn</h3>
          </div> */}
          <div className='Scard'>
          <div>
            <img src={comingTo} alt="poster.mp4"/>
            <button>Play</button>
          </div>

          <h2>expendable</h2>
          <h3>2022 . 60 mn</h3>
          </div>
          {/* <div className='Scard'>
          <div>
            <img src={comingTo} alt="poster.mp4"/>
            <button>Play</button>
          </div>

          <h2>expendable</h2>
          <h3>2022 . 60 mn</h3>
          </div>
          <div className='Scard'>
          <div>
            <img src={comingTo} alt="poster.mp4"/>
            <button>Play</button>
          </div>

          <h2>expendable</h2>
          <h3>2022 . 60 mn</h3>
          </div> */}
          {/* <div className='Scard'>
          <div>
            <img src={comingTo} alt="poster.mp4"/>
            <button>Play</button>
          </div>

          <h2>expendable</h2>
          <h3>2022 . 60 mn</h3>
          </div>
          <div className='Scard'>
          <div>
            <img src={comingTo} alt="poster.mp4"/>
            <button>Play</button>
          </div>

          <h2>expendable</h2>
          <h3>2023 . 60 mn</h3>
          </div> */}
        </Sponsored>
        <h2 className="title">Movie List </h2>
        <MovieList>
            <div className="MovieCard">
               <div>
                 <img src={disney} alt="picture13.mp4"/>
                 <button>Play</button>
                </div>

                 <h2>Expendable</h2>
                <h3>2022 . 60 mn</h3>
            </div>
            <div className="MovieCard">
               <div>
                 <img src={disney} alt="picture14.mp4"/>
                 <button>Play</button>
                </div>

                 <h2>Expendable</h2>
                <h3>2022 . 60 mn</h3>
            </div>
            <div className="MovieCard">
               <div>
                 <img src={disney} alt="picture12.mp4"/>
                 <button>Play</button>
                </div>

                 <h2>Expendable</h2>
                <h3>2022 . 60 mn</h3>
            </div>
            <div className="MovieCard">
               <div>
                 <img src={disney} alt="picture11.mp4"/>
                 <button>Play</button>
                </div>

                 <h2>Expendable</h2>
                <h3>2022 . 60 mn</h3>
            </div>
            <div className="MovieCard">
               <div>
                 <img src={disney} alt="picture10.mp4"/>
                 <button>Play</button>
                </div>

                 <h2>Expendable</h2>
                <h3>2022 . 60 mn</h3>
            </div>
            <div className="MovieCard">
               <div>
                 <img src={disney} alt="picture9.mp4"/>
                 <button>Play</button>
                </div>

                 <h2>Expendable</h2>
                <h3>2022 . 60 mn</h3>
            </div>
            <div className="MovieCard">
               <div>
                 <img src={disney} alt="picture8.mp4"/>
                 <button>Play</button>
                </div>

                 <h2>Expendable</h2>
                <h3>2022 . 60 mn</h3>
            </div>
            <div className="MovieCard">
               <div>
                 <img src={disney} alt="picture7.mp4"/>
                 <button>Play</button>
                </div>

                 <h2>Expendable</h2>
                <h3>2022 . 60 mn</h3>
            </div>
            <div className="MovieCard">
               <div>
                 <img src={disney} alt="picture6.mp4"/>
                 <button>Play</button>
                </div>

                 <h2>Expendable</h2>
                <h3>2022 . 60 mn</h3>
            </div>
            <div className="MovieCard">
               <div>
                 <img src={disney} alt="picture5.mp4"/>
                 <button>Play</button>
                </div>

                 <h2>Expendable</h2>
                <h3>2022 . 60 mn</h3>
            </div>
            <div className="MovieCard">
               <div>
                 <img src={disney} alt="movie4.mp4"/>
                 <button>Play</button>
                </div>

                 <h2>Expendable</h2>
                <h3>2022 . 60 mn</h3>
            </div>
            <div className="MovieCard">
               <div>
                 <img src={disney} alt="movie3.mp4"/>
                 <button>Play</button>
                </div>

                 <h2>Expendable</h2>
                <h3>2022 . 60 mn</h3>
            </div>
            <div className="MovieCard">
               <div>
                 <img src={disney} alt="movie.mp4"/>
                 <button>Play</button>
                </div>

                 <h2>Expendable</h2>
                <h3>2022 . 60 mn</h3>
            </div>
            <div className="MovieCard">
               <div>
                 <img src={disney} alt="movie1.mp4"/>
                 <button>Play</button>
                </div>

                 <h2>Expendable</h2>
                <h3>2022 . 60 mn</h3>
            </div>
            <div className="MovieCard">
               <div>
                 <img src={disney} alt="movie2.mp4"/>
                 <button>Play</button>
                </div>

                 <h2>Expendable</h2>
                <h3>2022 . 60 mn</h3>
            </div>
        </MovieList>
        <footer>
            <ul>
                <li>Questions? Contact us.</li>
                <li>FAQ</li>
                <li>Media Center</li>
                <li>Ways to Watch</li>
                <li>Investor Relations</li>
                <li>Help Center</li>
                <li>Terms of Use</li>
                <li>Contact Us</li>
                <li>Privacy</li>
                <li>Jobs</li>
            </ul>
        </footer>
        </>
    )
}

export default Home;