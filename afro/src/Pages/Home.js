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
background-color: rgba(139, 69, 19, 255);
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

const Sponsored = styled.div`
display: flex;
justify-content: center;
flex-wrap: no-wrap;
overflow-x: auto;
width: 90%;
margin: 0 5%;
background-color: rgba(139, 69, 19, 255);

    .Scard {
        flex: 0 0 18%;
        margin: 0 1%;
      
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
     }
   }
`;


const MovieList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 5%;
  background-color: rgba(139, 69, 19, 255);
  padding: 20px 0;
   .MovieCard {
    width: 18%;
    margin: 0 1%;
  
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
    const sortByLikes = ()=>{ console.log("sortBylikes")}
    const sortByName = ()=>{console.log("sortByName")}
    const sortByViews = ()=>{console.log("sortByViews")}
    const sortByDate = ()=>{console.log("sortByDates")}
    const Search = ()=>{console.log("Search")}
    return (
        <>
        <Navigation>
        <img src={logo} alt="logo.png"/>
        <ul>
        <li onClick={sortByLikes}>Home</li>
          <li onclick={sortByName}>Movie List</li>
          <li onClick={sortByViews}>Popular</li>
          <li onClick = {sortByDate}>New Movie</li>
          <li>
            <input type="text"/>
            <button onClick={Search}>search</button>
          </li>
        </ul>
        <div>
        <button>Log In</button>
        <button>Sign In</button>
        </div>
        </Navigation>
        {/* Sponsored */}
        <h2 className="title">Sponsored</h2>
        <Sponsored>
          <div className='Scard'>
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
          </div>
          <div className='Scard'>
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
          </div>
          <div className='Scard'>
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
          </div>
          <div className='Scard'>
          <div>
            <img src={comingTo} alt="poster.mp4"/>
            <button>Play</button>
          </div>

          <h2>expendable</h2>
          <h3>2023 . 60 mn</h3>
          </div>
        </Sponsored>
        <h2 className="title">Movie List </h2>
        <MovieList>
            <div className="MovieCard">
               <div>
                 <img src={disney} alt="picture.mp4"/>
                 <button>Play</button>
                </div>

                 <h2>Expendable</h2>
                <h3>2022 . 60 mn</h3>
            </div>
            <div className="MovieCard">
               <div>
                 <img src={disney} alt="picture.mp4"/>
                 <button>Play</button>
                </div>

                 <h2>Expendable</h2>
                <h3>2022 . 60 mn</h3>
            </div>
            <div className="MovieCard">
               <div>
                 <img src={disney} alt="picture.mp4"/>
                 <button>Play</button>
                </div>

                 <h2>Expendable</h2>
                <h3>2022 . 60 mn</h3>
            </div>
            <div className="MovieCard">
               <div>
                 <img src={disney} alt="picture.mp4"/>
                 <button>Play</button>
                </div>

                 <h2>Expendable</h2>
                <h3>2022 . 60 mn</h3>
            </div>
            <div className="MovieCard">
               <div>
                 <img src={disney} alt="picture.mp4"/>
                 <button>Play</button>
                </div>

                 <h2>Expendable</h2>
                <h3>2022 . 60 mn</h3>
            </div>
            <div className="MovieCard">
               <div>
                 <img src={disney} alt="picture.mp4"/>
                 <button>Play</button>
                </div>

                 <h2>Expendable</h2>
                <h3>2022 . 60 mn</h3>
            </div>
            <div className="MovieCard">
               <div>
                 <img src={disney} alt="picture.mp4"/>
                 <button>Play</button>
                </div>

                 <h2>Expendable</h2>
                <h3>2022 . 60 mn</h3>
            </div>
            <div className="MovieCard">
               <div>
                 <img src={disney} alt="picture.mp4"/>
                 <button>Play</button>
                </div>

                 <h2>Expendable</h2>
                <h3>2022 . 60 mn</h3>
            </div>
            <div className="MovieCard">
               <div>
                 <img src={disney} alt="picture.mp4"/>
                 <button>Play</button>
                </div>

                 <h2>Expendable</h2>
                <h3>2022 . 60 mn</h3>
            </div>
            <div className="MovieCard">
               <div>
                 <img src={disney} alt="picture.mp4"/>
                 <button>Play</button>
                </div>

                 <h2>Expendable</h2>
                <h3>2022 . 60 mn</h3>
            </div>
            <div className="MovieCard">
               <div>
                 <img src={disney} alt="picture.mp4"/>
                 <button>Play</button>
                </div>

                 <h2>Expendable</h2>
                <h3>2022 . 60 mn</h3>
            </div>
            <div className="MovieCard">
               <div>
                 <img src={disney} alt="picture.mp4"/>
                 <button>Play</button>
                </div>

                 <h2>Expendable</h2>
                <h3>2022 . 60 mn</h3>
            </div>
            <div className="MovieCard">
               <div>
                 <img src={disney} alt="picture.mp4"/>
                 <button>Play</button>
                </div>

                 <h2>Expendable</h2>
                <h3>2022 . 60 mn</h3>
            </div>
            <div className="MovieCard">
               <div>
                 <img src={disney} alt="picture.mp4"/>
                 <button>Play</button>
                </div>

                 <h2>Expendable</h2>
                <h3>2022 . 60 mn</h3>
            </div>
            <div className="MovieCard">
               <div>
                 <img src={disney} alt="picture.mp4"/>
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