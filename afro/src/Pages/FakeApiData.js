import comingTo from '../Images/comingTo.jpg'
import disney from '../Images/disney.jpg'
import styled from 'styled-components';
import Slide from './styles';
import React from 'react';

export const sponsoredMovies = [
    {
      Class: 'Scard',
      imgSrc: comingTo,
      alter: 'Movie Poster',
      title: 'Avengers',
      year: 2023,
      hours: 2, // Duration of the movie in hours
    },
    {
      Class: 'Scard',
      imgSrc:  comingTo,
      alter: 'Movie Poster',
      title: 'expendable',
      year: 2023,
      hours: 2, // Duration of the movie in hours
    },
    {
      Class: 'Scard',
      imgSrc:  comingTo,
      alter: 'Movie Poster',
      title: 'creators',
      year: 2023,
      hours: 2, // Duration of the movie in hours
    },
    {
      Class: 'Scard',
      imgSrc:  comingTo,
      alter: 'Movie Poster',
      title: 'godly',
      year: 2023,
      hours: 2, // Duration of the movie in hours
    },
    {
      Class: 'Scard',
      imgSrc:  comingTo,
      alter: 'Movie Poster',
      title: 'death',
      year: 2023,
      hours: 2, // Duration of the movie in hours
    },
    {
      Class: 'Scard',
      imgSrc:  comingTo,
      alter: 'Movie Poster',
      title: 'karma',
      year: 2023,
      hours: 2, // Duration of the movie in hours
    },
    {
      Class: 'Scard',
      imgSrc:  comingTo,
      alter: 'Movie Poster',
      title: 'shavir',
      year: 2023,
      hours: 2, // Duration of the movie in hours
    },
    {
      Class: 'Scard',
      imgSrc:  comingTo,
      alter: 'Movie Poster',
      title: 'chalissa',
      year: 2023,
      hours: 2, // Duration of the movie in hours
    },

  ]


   const slides = [
    // Slide 1
    <Slide key={1}>
      <div className='SPcard'>
          <div>
            <img src={comingTo} alt="poster.mp4"/>
            <video controls>
              <source src="https://app.sipconsult.net/afrowatch/EXTRACTION%202%20_%20Official%20Trailer%20_%20Netflix.mp4" type="video/mp4"/>
            </video>
          </div>
          <button>Play</button>
          </div>
    </Slide>,
    // Slide 2
    <Slide key={2}>
     <div className='SPcard'>
          <div>
            <img src={disney} alt="poster.mp4"/>
            <video controls>
              <source src="https://app.sipconsult.net/afrowatch/EXTRACTION%202%20_%20Official%20Trailer%20_%20Netflix.mp4" type="video/mp4"/>
            </video>
          </div>
          <button>Play</button>
          </div>
    </Slide>,
    // Slide 3
    <Slide key={3}>
      <div className='SPcard'>
          <div>
            <img src={disney} alt="poster.mp4"/>
            <video controls>
              <source src="https://app.sipconsult.net/afrowatch/EXTRACTION%202%20_%20Official%20Trailer%20_%20Netflix.mp4" type="video/mp4"/>
            </video>
          </div>
          <button>Play</button>
          </div>
    </Slide>,
    // Slide 4
    <Slide key={4}>
      <div className='SPcard'>
          <div>
            <img src={comingTo} alt="poster.mp4"/>
            <video controls>
              <source src="https://app.sipconsult.net/afrowatch/EXTRACTION%202%20_%20Official%20Trailer%20_%20Netflix.mp4" type="video/mp4"/>
            </video>
          </div>
          <button>Play</button>
          </div>
    </Slide>,
    // Slide 5
    <Slide key={5}>
      <div className='SPcard'>
          <div>
            <img src={disney} alt="poster.mp4"/>
            <video controls>
              <source src="https://app.sipconsult.net/afrowatch/EXTRACTION%202%20_%20Official%20Trailer%20_%20Netflix.mp4" type="video/mp4"/>
            </video>
          </div>
          <button>Play</button>
          </div>
    </Slide>,
    // Slide 6
    <Slide key={6}>
      <div className='SPcard'>
          <div>
            <img src={comingTo} alt="poster.mp4"/>
            <video controls>
              <source src="https://app.sipconsult.net/afrowatch/EXTRACTION%202%20_%20Official%20Trailer%20_%20Netflix.mp4" type="video/mp4"/>
            </video>
          </div>
          <button>Play</button>
          </div>
    </Slide>,
    // ... Add more slides here
  ];

  export default slides