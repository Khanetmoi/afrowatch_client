import React, { useState } from 'react';
import styled from 'styled-components';
import comingTo from '../Images/comingTo.jpg'
import disney from '../Images/disney.jpg'
import logo from '../Images/logo.png'
import afrowatch from '../Images/afrowatch.png'
import rwanda from '../Images/rwanda.jpg'


const Navigation = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color: rgba(255, 128, 0, 1);
color: white;
width: 95%;
padding: 1rem 2.5%;
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

const LoginButton = styled.div`
  padding: 8px 16px;
  color: #fff;
  border: 2px solid white;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #FFC857;
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
 h3 {
  font-size: 25px;
  @media (max-width: 768px) {
    margin: 5%;
    font-size: 15px;
  }
 }
`;

const SearchBar = styled.input`
width: 40vw;
height: 5vh;
border-radius: 20%;

@media (max-width: 768px) {
  width: 80vw;
}
 
`;

const SearchButton = styled.button`
height: 5vh;
border-radius: 50%;
`;
const Sponsored = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: no-wrap;
overflow-x: auto;

    .Scard {
        // flex: 0 0 12%;
        width: 12%;
        // height: 12%;
        margin: 0 .5%;
        // background-color: #874C3C;
        color: white;
        border-radius: 20% 20% 0 0;

        @media (max-width: 768px) {
          flex: 0 0 50%
        }

        h2 {
           margin: 0;
           padding: 0;
           font-size: 25px;
           @media (max-width: 768px) {
            font-size: 15px;;
          }
        }

        h3 {
          margin: 0;
           padding: 0;
           font-size: 15px;
           @media (max-width: 768px) {
            font-size: 8px;;
          }
        }
      
     div {
         position:relative;
        img {
            width: 100%;
            height: 60%;
            border-radius: 20px;
            
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
  width: 95%;
  margin: 0 2.5%;
  padding: 20px 0;

  section {
    margin: 20px 0;
  }

 
`;
const Popular = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: no-wrap;
overflow-x: auto;
    .MovieCard {

      // flex: 0 0 12%;
        width: 12%;
        // height: 12%;
        margin: 0 .5%;
        // background-color: #874C3C;
        color: white;
        border-radius: 20% 20% 0 0;
        
        @media (max-width: 768px) {
          flex: 0 0 50%
        }

        h2 {
           margin: 0;
           padding: 0;
           font-size: 25px;
           @media (max-width: 768px) {
            font-size: 15px;
          }
        }

        h3 {
          margin: 0;
           padding: 0;
           font-size: 15px;
           @media (max-width: 768px) {
            font-size: 8px;
          }
        }
    
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
    `;

    const NewMovies = styled.div`
    display: flex;
justify-content: space-between;
flex-wrap: no-wrap;
overflow-x: auto;
    .MovieCard {

      // flex: 0 0 12%;
        width: 12%;
        // height: 12%;
        margin: 0 .5%;
        // background-color: #874C3C;
        color: white;
        border-radius: 20% 20% 0 0;
        
        @media (max-width: 768px) {
          flex: 0 0 50%
        }

        h2 {
           margin: 0;
           padding: 0;
           font-size: 25px;
           @media (max-width: 768px) {
            font-size: 20px;
          }
        }

        h3 {
          margin: 0;
           padding: 0;
           font-size: 15px;
           @media (max-width: 768px) {
            font-size: 10px;
          }
        }
    
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
    `;

    const FooterContainer = styled.footer`
  // background-color: #874C3C;
  background-color: rgba(255, 128, 0, 1);
  color: #fff;
  padding: 0px;
`;

const FooterLinks = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0px;
  padding: 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Adjust the grid for smaller screens */
  }
`;

const FooterLink = styled.li`
  a {
    color: #fff;
    text-decoration: none;
    font-size: 20px;
    margin: 0;

    &:hover {
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;




const SlideshowContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow-x: auto;
  scroll-behavior: smooth;
`;

const Slide = styled.div`
  flex: 0 0 calc(50% - 10px); /* Show 5 slides at a time with 10px spacing between them */
  margin: 0 5px;
  /* Add your slide styles here */
   .SPcard {
    div {
      display: flex;
      justify-content: center;
       img{
        width: 30%
       }
       video {
        width: 100%;
       }
    }
   }
`;


const FeaturedMovies = styled.div`
  position: relative;
  width: 95%;
  margin: 2.5%;
   #left {
    position: relative;
    top 10%;
    left: 0%;
    width: 0; 
    height: 0; 
    border-left: 30px solid transparent;
    border-right: 30px solid rgba(255, 128, 0, 1);
      
    border-bottom: 30px solid transparent;
    border-top: 30px solid transparent;
    background-color: transparent;
    margin: 2rem;

    cursor: pointer;
    outline: none;
   }

   #right {
    position: absolute;
    top 0%;
    left: 95%;
    margin: 2rem;
    width: 0; 
    height: 0; 
    
    border-left: 30px solid rgba(255, 128, 0, 1);
    border-right: 50px solid transparent;
    cursor: pointer;
    outline: none;
    border-bottom: 30px solid transparent;
    border-top: 30px solid transparent;
    background-color: transparent;
   }

   #play {
    position: absolute;
    top: 87%;
    left: 45%;
    height: 30px;
    background-color: rgba(255, 128, 0, 1);
    color: white;
   }
`;


const Home = ()=>{
  const [currentSlide, setCurrentSlide] = useState(0);
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
  const totalSlides = slides.length;

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };
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
          <AfroLogo src={afrowatch} alt="Afro lofo"/>
          <h3>Welcome to afrowatch the best platform to watch African original creations</h3>
          <div>
          <SearchBar type="text" placeholder="Search..."/>
          <SearchButton>search</SearchButton>
          </div>
        </Intro>
        
        <>
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
    </>
        <MovieList>
        <section id="sponsored">
        <h2 className="title">Film of the week</h2>
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
        </section>
        <section id="Popular">
        <h2 className="title">Editors choice</h2>
        <Popular>
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
            </Popular>
            </section>

            <section id="new">
              <h2 className="title">Viewers choice </h2>
            <NewMovies>
            <div className="MovieCard">
               <div>
                 <img src={rwanda} alt="picture6.mp4"/>
                 <button>Play</button>
                </div>

                 <h2>Hotel rwanda</h2>
                <h3>2022 . 60 mn</h3>
            </div>
            <div className="MovieCard">
               <div>
                 <img src={rwanda} alt="picture5.mp4"/>
                 <button>Play</button>
                </div>

                 <h2>Hotel rwanda</h2>
                <h3>2022 . 60 mn</h3>
            </div>
            <div className="MovieCard">
               <div>
                 <img src={rwanda} alt="movie4.mp4"/>
                 <button>Play</button>
                </div>

                 <h2>Hotel rwanda</h2>
                <h3>2022 . 60 mn</h3>
            </div>
            <div className="MovieCard">
               <div>
                 <img src={rwanda} alt="movie3.mp4"/>
                 <button>Play</button>
                </div>

                 <h2>Hotel rwanda</h2>
                <h3>2022 . 60 mn</h3>
            </div>
            <div className="MovieCard">
               <div>
                 <img src={rwanda} alt="movie.mp4"/>
                 <button>Play</button>
                </div>

                 <h2>Hotel rwanda</h2>
                <h3>2022 . 60 mn</h3>
            </div>
            <div className="MovieCard">
               <div>
                 <img src={rwanda} alt="movie1.mp4"/>
                 <button>Play</button>
                </div>

                 <h2>Hotel rwanda</h2>
                <h3>2022 . 60 mn</h3>
            </div>
            <div className="MovieCard">
               <div>
                 <img src={rwanda} alt="movie2.mp4"/>
                 <button>Play</button>
                </div>

                 <h2>Hotel rwanda</h2>
                <h3>2022 . 60 mn</h3>
            </div>
            <div className="MovieCard">
               <div>
                 <img src={rwanda} alt="movie2.mp4"/>
                 <button>Play</button>
                </div>

                 <h2>Hotel rwanda</h2>
                <h3>2022 . 60 mn</h3>
            </div>
            </NewMovies>
        </section>
        <section id="sponsored">
        <h2 className="title">Featured</h2>
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
        </section>
        <section id="Popular">
        <h2 className="title">Popular Movies </h2>
        <Popular>
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
            </Popular>
            </section>

            <section id="new">
              <h2 className="title">New Movies</h2>
            <NewMovies>
            <div className="MovieCard">
               <div>
                 <img src={rwanda} alt="picture6.mp4"/>
                 <button>Play</button>
                </div>

                 <h2>Hotel rwanda</h2>
                <h3>2022 . 60 mn</h3>
            </div>
            <div className="MovieCard">
               <div>
                 <img src={rwanda} alt="picture5.mp4"/>
                 <button>Play</button>
                </div>

                 <h2>Hotel rwanda</h2>
                <h3>2022 . 60 mn</h3>
            </div>
            <div className="MovieCard">
               <div>
                 <img src={rwanda} alt="movie4.mp4"/>
                 <button>Play</button>
                </div>

                 <h2>Hotel rwanda</h2>
                <h3>2022 . 60 mn</h3>
            </div>
            <div className="MovieCard">
               <div>
                 <img src={rwanda} alt="movie3.mp4"/>
                 <button>Play</button>
                </div>

                 <h2>Hotel rwanda</h2>
                <h3>2022 . 60 mn</h3>
            </div>
            <div className="MovieCard">
               <div>
                 <img src={rwanda} alt="movie.mp4"/>
                 <button>Play</button>
                </div>

                 <h2>Hotel rwanda</h2>
                <h3>2022 . 60 mn</h3>
            </div>
            <div className="MovieCard">
               <div>
                 <img src={rwanda} alt="movie1.mp4"/>
                 <button>Play</button>
                </div>

                 <h2>Hotel rwanda</h2>
                <h3>2022 . 60 mn</h3>
            </div>
            <div className="MovieCard">
               <div>
                 <img src={rwanda} alt="movie2.mp4"/>
                 <button>Play</button>
                </div>

                 <h2>Hotel rwanda</h2>
                <h3>2022 . 60 mn</h3>
            </div>
            <div className="MovieCard">
               <div>
                 <img src={rwanda} alt="movie2.mp4"/>
                 <button>Play</button>
                </div>

                 <h2>Hotel rwanda</h2>
                <h3>2022 . 60 mn</h3>
            </div>
            </NewMovies>
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
        </>
    )
}

export default Home;