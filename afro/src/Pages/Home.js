// Importing components at the top level (correct placement)
import React, { useState } from 'react';
import styled from 'styled-components';
import comingTo from '../Images/comingTo.jpg';
import disney from '../Images/disney.jpg';
import logo from '../Images/logo.png';
import afrowatch from '../Images/afrowatch.png';
import slides from './FakeApiData';

// Import the components from './styles'
import {
  Navigation,
  LoginButton,
  Intro,
  AfroLogo,
  SearchBar,
  SearchButton,
  Category,
  MovieList,
  FooterContainer,
  FooterLinks,
  FooterLink,
  SlideshowContainer,
  FeaturedMovies,
  NavItem,
} from './styles';

// console.log(sponsoredMovies[0])



const Home = ()=>{

  const NavBar = () => {
    const handleItemClick = (item) => {
      // Handle the click event for each item here
      console.log(item);
    };



  const home = [
    <option key={1}>Popular</option>,
    <option key={2}>New Movies</option>,
    <option key={3}>Editor choice</option>,
    <option key={4}>Viewers choice</option>,
    <option key={5}>Film of the week</option>,
  ];

  const genres = [
    'Action',
    'Comedy',
    'Drama',
    'Sci-Fi',
    'Fantasy',
    'Adventure',
    'Romance',
    'Thriller',
    'Horror',
    'Superhero',
    'Animation',
    'Family',
    'Mystery',
    'Crime',
    'Historical',
    'Sports',
    'Biographical',
    'Psychological',
    'Suspense',
    'Time Travel',
    'Documentary',
    'War',
    'Musical',
    'Western',
    'Coming of Age',
    'Dystopian',
    'Disaster',
    'Spy/Espionage',
    'Martial Arts',
    'Supernatural',
  ];
  
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const totalSlides = slides.length;

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };
  
  const sponsoredMovies = [
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
    return (
        <div>
        <Navigation>
        <img src={logo} alt="logo.png"/>
        <ul>
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
        <div>
        <LoginButton>Log In</LoginButton>   
        </div>
        </Navigation>
        
        <Intro>
          <AfroLogo src={afrowatch} alt="Afro lofo"/>
          <h3>Welcome to afrowatch the best platform to watch African original creations</h3>
          <div>
          <SearchBar type="text" placeholder="Search..."/>
          <SearchButton>search</SearchButton>
          </div>
        </Intro>
        
        <div>
        <FeaturedMovies>
        <h2 className="title">Featured</h2>
      <SlideshowContainer>
        {slides.map((slide, index) => (
          <React.Fragment key={index}>
            {index === currentSlide && slide}
          </React.Fragment>
        ))}
      </SlideshowContainer>
      <button id="left" onClick={handlePrevSlide}></button>
      <button id="play">Play {"Coming to america"}</button>
      <button id="right" onClick={handleNextSlide}></button>
      </FeaturedMovies>
    </div>
        <MovieList>

        <section>
          <div className='flex'>
          <h2 className="title">Popular</h2>
          <div className='flex1'>
          <select>
            {home.map((option) => option)}
          </select>
          <button>add Card</button>
          <button>remove Card</button>
          </div>
          </div>
        
        <Category>
        <button className='left_arrow'>Left</button>
        {
            sponsoredMovies.map((sMovies,index)=>{
              return <Card key={index} Class={sMovies.Class} imgSrc={sMovies.imgSrc} alter={sMovies.alter} title={sMovies.title} year={sMovies.year} hours = {sMovies.hours}></Card>
            })
          }
        <button className='right_arrow'>Right</button>
        </Category>
        </section>
        </MovieList>
        <FooterContainer>
      <FooterLinks>
        <FooterLink>
          <a href="#">FAQ</a>
        </FooterLink>
        <FooterLink>
          <a href="#">Help Center</a>
        </FooterLink>
        <FooterLink>
          <a href="#">Account</a>
        </FooterLink>
        <FooterLink>
          <a href="#">Media Center</a>
        </FooterLink>
        <FooterLink>
          <a href="#">Investor Relations</a>
        </FooterLink>
        <FooterLink>
          <a href="#">Jobs</a>
        </FooterLink>
        <FooterLink>
          <a href="#">Ways to Watch</a>
        </FooterLink>
        <FooterLink>
          <a href="#">Terms of Use</a>
        </FooterLink>
        <FooterLink>
          <a href="#">Privacy</a>
        </FooterLink>
        <FooterLink>
          <a href="#">Cookie Preferences</a>
        </FooterLink>
        <FooterLink>
          <a href="#">Corporate Information</a>
        </FooterLink>
        <FooterLink>
          <a href="#">Contact Us</a>
        </FooterLink>
        <FooterLink>
          <a href="#">Speed Test</a>
        </FooterLink>
        <FooterLink>
          <a href="#">Legal Notices</a>
        </FooterLink>
        <FooterLink>
          <a href="#">Only on Afrowatch</a>
        </FooterLink>
      </FooterLinks>
    </FooterContainer>
        </div>
    )
}

const Card = ({Class, imgSrc, alter, title, year, hours})=>{
  console.log("Class:", Class);
  console.log("imgSrc:", imgSrc);
  console.log("alter:", alter);
  console.log("title:", title)
  return (
    <div className={Class}>
          <div>
            <img src={imgSrc} alt={alter}/>
            <button>Play</button>
          </div>

          <h2>{title}</h2>
          <h3>{year} . {hours} mn</h3>
          </div>
  )
};

export default Home;