// Importing components at the top level (correct placement)
import React, { useState } from 'react';
import styled from 'styled-components';
import comingTo from '../Images/comingTo.jpg';
import disney from '../Images/disney.jpg';
import logo from '../Images/logo.png';
import afrowatch from '../Images/afrowatch.png';
import slides from './FakeApiData';


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
 const Category = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: no-wrap;
overflow-x: auto;
.left_arrow {
  // height: 50%;
}

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
    // border: 10px solid black;
    //  padding: 10px;
    .flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
       
      .flex1 {

      }
    }
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
const NavItem = styled.li`
  /* Your styles for each navigation item here */
  display: inline-block;
  margin-right: 20px;
   a {
    color: white;
   }
  

  /* You can add more styles as needed */
`;


const Home = ()=>{
  const [categoryTitle, setCategoryTitle] = useState("Home Page");
  const [tab, setTab] = useState("Home")
  const [categories, setCategories] = useState([
    <option key={1}>Popular</option>,
    <option key={2}>New Movies</option>,
    <option key={3}>Editor choice</option>,
    <option key={4}>Viewers choice</option>,
    <option key={5}>Film of the week</option>,
  ]);
  
  const handleItemClick = (item) => {
  if(item === "Home")
   {
    setTab("Home")
    setCategories("Home")
    setCategoryTitle("Home Page")
   }
   else if(item === "Movie"){
    setTab("Movie")
    setCategories([
      <option key={1}>Action</option>,
      <option key={1}>Comedy</option>,
      <option key={1}>Drama</option>,
      <option key={1}>Sci-Fi</option>,
      <option key={1}>Fantasy</option>,])
      setCategoryTitle("Movie")
    
   }
   else if(item === "show"){
    setTab("show")
    setCategories([
      <option key={1}>Action</option>,
      <option key={1}>Comedy</option>,
      <option key={1}>Drama</option>,
      <option key={1}>Sci-Fi</option>,
      <option key={1}>Fantasy</option>,])
      setCategoryTitle("Show")
    
   }
  };

  // const NavBar = () => {
   



  const home = [
    <option key={1}>Popular</option>,
    <option key={2}>New Movies</option>,
    <option key={3}>Editor choice</option>,
    <option key={4}>Viewers choice</option>,
    <option key={5}>Film of the week</option>,
  ];

  const genres = [
    <option key={1}>Action</option>,
    <option key={1}>Comedy</option>,
    <option key={1}>Drama</option>,
    <option key={1}>Sci-Fi</option>,
    <option key={1}>Fantasy</option>,
    // 'Adventure',
    // 'Romance',
    // 'Thriller',
    // 'Horror',
    // 'Superhero',
    // 'Animation',
    // 'Family',
    // 'Mystery',
    // 'Crime',
    // 'Historical',
    // 'Sports',
    // 'Biographical',
    // 'Psychological',
    // 'Suspense',
    // 'Time Travel',
    // 'Documentary',
    // 'War',
    // 'Musical',
    // 'Western',
    // 'Coming of Age',
    // 'Dystopian',
    // 'Disaster',
    // 'Spy/Espionage',
    // 'Martial Arts',
    // 'Supernatural',
  ];
  
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const totalSlides = slides.length;

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };
  
  const show = [
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

  const movie = [
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
  const shome = [
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
          <h2 className="title">{categoryTitle}</h2>
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
  tab === 'Home'
    ? shome.map((sMovies, index) => (
        <Card
          key={index}
          Class={sMovies.Class}
          imgSrc={sMovies.imgSrc}
          alter={sMovies.alter}
          title={sMovies.title}
          year={sMovies.year}
          hours={sMovies.hours}
        ></Card>
      ))
    : tab === 'Movie'
    ? movie.map((sMovies, index) => (
      <Card
        key={index}
        Class={sMovies.Class}
        imgSrc={sMovies.imgSrc}
        alter={sMovies.alter}
        title={sMovies.title}
        year={sMovies.year}
        hours={sMovies.hours}
      ></Card>
    ))
  : tab === 'show'
    ? show.map((sMovies, index) => (
      <Card
        key={index}
        Class={sMovies.Class}
        imgSrc={sMovies.imgSrc}
        alter={sMovies.alter}
        title={sMovies.title}
        year={sMovies.year}
        hours={sMovies.hours}
      ></Card>
    ))
  : null
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


export default Home;

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

