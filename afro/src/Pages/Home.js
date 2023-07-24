import React, { useState } from 'react';
import styled from 'styled-components';


const Navigation = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
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

const Home = ()=>{
    const sortByLikes = ()=>{ console.log("sortBylikes")}
    const sortByName = ()=>{console.log("sortByName")}
    const sortByViews = ()=>{console.log("sortByViews")}
    const sortByDate = ()=>{console.log("sortByDates")}
    const Search = ()=>{console.log("Search")}
    return (
        <>
        <Navigation>
        <img src="logo.png" alt="logo.png"/>
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
        <div className="Sponsored">
          <div>
            <img src="poster.mp4" alt="poster.mp4"/>
            <button>Play</button>
          </div>

          <h2>expendable</h2>
          <h3>2022 . 60 mn</h3>
        </div>
        <div className="MovieList">
            <div className="MovieCard">
               <div>
                 <img src="luchano.jpeg" alt="picture.mp4"/>
                 <button>Play</button>
                </div>

                 <h2>Expendable</h2>
                <h3>2022 . 60 mn</h3>
            </div>
        </div>
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