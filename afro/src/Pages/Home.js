// Importing components at the top level (correct placement)
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import comingTo from '../Images/comingTo.jpg';
import disney from '../Images/disney.jpg';
import logo from '../Images/logo.png';
import afrowatch from '../Images/afrowatch.png';
import slides from './FakeApiData';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaBeer, BsSearch } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { LiaSignInAltSolid } from 'react-icons/lia';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import Modal from './Modal'
import Watch from './Watch';
import LoadingAnimation from './Loading';
// import Nav from './Nav';
import Comments from './Comments';
import Questions from './Questions';
import Slide from './Slide';
import Card from './Card';


 const Navigation = styled.div`
 position: sticky;
top: 0;
z-index: 100;
display: flex;
justify-content: space-between;
align-items: center;
background-color: rgba(255, 128, 0, 1);
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


const NavItems = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;

  @media (max-width: 768px) {
    display: none;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: rgba(255, 128, 0, 1);
    width: 100%;
    padding: 1rem;
    transition: transform 0.3s ease-in-out;

    &.active {
      transform: translateY(0);
    }
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

const Intro = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 2rem 0;

  h3 {
    @media (max-width: 768px) {
      margin: 10px;
      font-size: 10px;
    }
  }

`;

const AfroLogo =  styled.img`
width: 33%;
 h3 {
  font-size: 25px;
  @media (max-width: 768px) {
    margin: 5%;
    font-size: 25px;
    width: 30px;
  }
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

const SearchButton = styled.button`
height: 5vh;
border-radius: 50%;
`;
 const Category = styled.div`

border-radius: 10px;
//background-color:  blue;
width: 100%;
    .Scard {
        color: white;
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
            width: 90%;
            border-radius: 20px;

            @media (max-width: 768px) {
              width: 90%;
            }
            
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
    // background-color: black;
    margin: 20px 0;
    padding: 0 15px 0 15px;
    border-radius: 10px;
    .flex {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .flex1 {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }

 
`;

 const FooterContainer = styled.footer`
  // background-color: #874C3C;
  background-color: black;
  width: 100%;
  position: fixed; /* Set the position to fixed */
  bottom: 0; /* Anchor it to the bottom of the viewport */
  color: #fff;
  padding: 0px;
`;

 const FooterLinks = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // display: grid;
  padding: auto;
  // grid-template-columns: repeat(4, 1fr);
  // grid-gap: 0px;
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

const Mobile = styled.div`
background-color: orange;
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
  margin-right: 10px;
  background-color: blue;
  :hover {
    background-color: blue;
  }
  a {
    text-decoration: none;
    color: blue;
    
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;


const WatchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Cinema = styled.div`
  width: 100%;
  height: 75vh;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TabsContainer = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin: 10px;
    padding: 10px 20px;
    cursor: pointer;
    border: 1px solid #ccc;
    // border-radius: 5px;
  }

  li.active {
    background-color: #4caf50;
    color: #fff;
    border-color: transparent;
  }
`;

const CommentsContainer = styled.div`
  width: 100%;
  // max-width: 800px;
  padding: 20px;
  // background-color: #f9f9f9;
  // border: 1px solid #ccc;
  // border-radius: 5px;
`;

const Home = (props)=>{

  const defaultOption = 'Default Option';
  const [selectedCard, setSelectedCard] = useState(null);
  
  // console.log('selected', selectedCard)
  const [selectedCategory, setSelectedCategory] = useState("");
  const selectRef = useRef();
  const [filteredCards, setFilteredCards] = useState([]);
  //const [featuredCard, setFeaturedCard] = useState([]);
  const [categoryTitle, setCategoryTitle] = useState("Home Page");
  const [tab, setTab] = useState("Home");
  const userInfo = JSON.parse(localStorage.getItem('loggedInStatus'));
  

  console.log("is logged"+props.logged)
  const [categories, setCategories] = useState([
    <option key={1}>Popular</option>,
    <option key={2}>New Movies</option>,
    <option key={3}>Editor choice</option>,
    <option key={4}>Viewers choice</option>,
    <option key={5}>Film of the week</option>,
  ]);

  function checkAndRetry(data, delay) {
    if (!data) {
      return new Promise(resolve => setTimeout(() => resolve(checkAndRetry(data, delay)), delay));
    }
    return data;
  }

  const [userData, setUserData] = useState({});
  const [notLogged, setNotLogged] = useState([]);
  const [homeContent, setHomeContent] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoad, setIsLoad] = useState(false);



  const getUserData = async() => {
    try {
      const reqData = await fetch("https://myworklm.com/Afrowatch_admin/api/movie/afrowatch_api_movie_signout");
      const resData = await reqData.json();
      // console.log(resData);
      setNotLogged(resData);
      setIsLoad(true)
    } catch (error) {
      console.error(error);
    }
  };

  const getHome = async() => {
    try {
      const reqData = await fetch("https://myworklm.com/Afrowatch_admin/api/movie/afrowatch_api_movie_home_page.php");
      const resData = await reqData.json();
      // console.log(resData);
      setHomeContent(resData);
      setIsLoad(true)
    } catch (error) {
      console.error(error);
    }
  };

  const getUserData1 = async() => {
    try {
      const reqData = await fetch("https://myworklm.com/Afrowatch_admin/api/movie/afrowatch_api_movie_page");
      const resData = await reqData.json();
      // console.log(resData);
      setUserData(resData);
      setIsLoaded(true)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserData1()
    getUserData();
    getHome()

  }, []);

  isLoaded?console.log('movie',userData):console.log('homage to glorious samathabadra')
  console.log('home.content', homeContent)
  isLoad?console.log('heloo not logged'+ notLogged):console.log('homage to the tri-kaya')



  // isLoaded?console.log('access data',userData.type[Object.keys(userData.type).find(typeKey => typeKey === props.tab)].category[Object.keys(userData.type[props.tab].category).find(categoryKey => categoryKey === 'Hearthwarming').movies]
  // ): console.log('still empty')
  
  // isLoaded?console.log('access data',userData.type['Animation'].category['Hearthwarming'].movies[0]): console.log('still empty')
  // useEffect(() => {
  //   setuserData(userData)

  // }, [userData]);

  // console.log(userData?.type)
  // console.log(userData?.type ? Object.keys(userData.type) : [])

  console.log(props.tab)
  

  const handlePlayClick = () => {
    props.watch(true);
    console.log(props.watch)
  };

  const home = [
    <option key={1}>Popular</option>,
    <option key={2}>New Movies</option>,
    <option key={3}>Editor choice</option>,
    <option key={4}>Viewers choice</option>,
    <option key={5}>Film of the week</option>,
  ];

  
  
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const selectedCategoryRef = useRef(""); 

  useEffect(() => {
    
    if (categories.length > 0) {
      selectedCategoryRef.current = categories[0]; 
      setSelectedCategory(selectedCategoryRef.current); 
    }
  }, [categories]);
  
  const handleCardClick = (sMovies) => {
   
    setSelectedCard({...sMovies});
  };

  const handleLogInClick = ()=>{
    props.page("log In");
   
  }
   const page = props.page;
  const baseUrl = "https://afrowatch-file.s3.amazonaws.com/";
  const baseLink = "/";

  const [sections, setSections] = useState([0]); // Initialize with one section

const addSection = () => {
  setSections([...sections, sections.length]);
};

const removeSection = (sectionIndex) => {
  if (sections.length > 1) {
    const updatedSections = sections.filter((_, index) => index !== sectionIndex);
    setSections(updatedSections);
  }
};
  
    var settings1 = {
      dots: true,
      customPaging: (i) => (
        <div
          style={{
            width: '10px',
            height: '10px',
            backgroundColor: i === currentSlide ? 'black' : 'white', // Change color based on current slide
            borderRadius: '50%', // Round the dots if you want
            transition: 'background-color 0.3s ease', // Add transition effect
          }}
        ></div>
      ),
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      swipeToSlide: true,
      centerMode: true,
      // variableWidth: true,
      centerPadding: '0',
      afterChange: (current) => setCurrentSlide(current),
      responsive: [
        {
          breakpoint: 1024, // Screen width 1024px and above
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768, // Screen width 768px and above
          settings: {
            slidesToShow: 2,
            arrows: false,
          },
        },
        {
          breakpoint: 480, // Screen width 480px and above
          settings: {
            slidesToShow: 2,
            arrows: false,
          },
        },
      ],
    };
    var settings2 = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      swipeToSlide: true,
      centerMode: true,
      centerPadding: '0',
      arrows: true,
      afterChange: (current) => setCurrentSlide(current),
      // variableWidth: true,
      responsive: [
        {
          breakpoint: 1024, // Screen width 1024px and above
          settings: {
            slidesToShow: 6,
          },
        },
        {
          breakpoint: 768, // Screen width 768px and above
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 480, // Screen width 480px and above
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    };
    const handleSlideClick = (selectedCard) => {
      setSelectedCard(selectedCard); // Set the selected card in the state
    };
    return (
        <div className='page'>
        {props.watchv?<Watch selectedCard={selectedCard} identity = {props.identity} />:
        <div className='HomePage'>
        {!userInfo&& <div>
          {notLogged.map((slide, index) => {
  
    return (
                 <Card
                 poster={baseUrl + slide.movie_folder + baseLink + slide.movie_image}
                 alter={slide.movie_name}
                 video={baseUrl + slide.movie_folder + baseLink + slide.movie_trailer_file}
                 title={slide.movie_name}
                 date={slide.movie_year_release}
                 genre={slide.movie_genre}
                 className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
                 key={index}
                 read={() => handleCardClick(slide)}
                 page={props.page}
                 log={props.logged}
                  />
    );
  
  return null; 
})}

         </div>}
         {userInfo && isLoaded? (
  <div>
  {props.tab !== 'Home' && Object.keys(userData.type).map((typeKey) => {
    if (props.tab === typeKey) {
      return (
        <div key={typeKey}>
          {Object.keys(userData.type[typeKey].category).map((categoryK) => (
            <div key={categoryK}>
              {userData.type[typeKey].category[categoryK].movies > 9 || (window.innerWidth <= 720 && userData.type[typeKey].category[categoryK].movies > 2) ? (
                <FeaturedMovies key={categoryK}>
                  <h2 className="title">{categoryK}</h2>
                  <Slider {...settings1}>
                    {userData.type[typeKey].category[categoryK].movies.map((slide, index) => (
                      <Slide
                        poster={baseUrl}
                        alter={slide.movie_name}
                        video={baseUrl}
                        title={slide.movie_name}
                        date={slide.movie_year_release}
                        genre={slide.movie_genre}
                        className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
                        key={index}
                        read={() => handleCardClick(slide)}
                        page={props.page}
                        log={props.logged}
                      />
                    ))}
                  </Slider>
                </FeaturedMovies>
              ) : (
                <Category key={categoryK}>
                  <h2 className="title">{categoryK}</h2>
                  {userData.type[typeKey].category[categoryK].movies.map((slide, index) => (
                    <Card
                      poster={baseUrl + slide.movie_path + baseLink + slide.movie_image}
                      alter={slide.movie_name}
                      video={baseUrl + slide.movie_path + baseLink + slide.movie_trailler_file}
                      title={slide.movie_name}
                      date={slide.movie_year_release}
                      genre={slide.movie_genre}
                      className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
                      key={index}
                      read={() => handleCardClick(slide)}
                      page={props.page}
                      log={props.logged}
                    />
                  ))}
                </Category>
              )}
            </div>
          ))}
        </div>
      );
    }
    return null; // Handle cases where props.tab !== typeKey
  })}
  {props.tab === 'Home' && (
  <div>
    {Object.keys(homeContent).map((key, index) => {
      return (
        <div key={key}>
          {Object.keys(homeContent).key > 9 || (window.innerWidth <= 720 && Object.keys(homeContent).key> 2) ? (
          <FeaturedMovies key={key}>
          <h2>{key}</h2>
          <Slider {...settings1}>
          {homeContent[key].movies.map((movie, index) => (
            <div key={movie.movie_id}>
              <Slide
                        poster={baseUrl + movie.movie_path + baseLink +movie.movie_image}
                        alter={movie.movie_name}
                        video={baseUrl + movie.movie_path + baseLink + movie.movie_trailler_file}
                        title={movie.movie_name}
                        date={movie.movie_year_release}
                        genre={movie.movie_genre}
                        className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
                        key={index}
                        read={() => handleCardClick(movie)}
                        page={props.page}
                        log={props.logged}
                      />
            </div>
          ))}
          </Slider>
          </FeaturedMovies>):(
                <Category key={key}>
                  <h2 className="title">{key}</h2>
                  {homeContent[key].movies.map((movie, index) => (
                    <Card
                    poster={baseUrl + movie.movie_path + baseLink +movie.movie_image}
                    alter={movie.movie_name}
                    video={baseUrl + movie.movie_path + baseLink + movie.movie_trailler_file}
                    title={movie.movie_name}
                    date={movie.movie_year_release}
                    genre={movie.movie_genre}
                    className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
                    key={index}
                    read={() => handleCardClick(movie)}
                    page={props.page}
                    log={props.logged}
                    />
                  ))}
                </Category>
              )}
        </div>
      );
    })}
  </div>
)}

</div>

):<LoadingAnimation/>}

        <MovieList>
        {/* {sections.map((section, sectionIndex) => ( */}
          <section >
          {/* <div className='flex'> */}
          {/* <h2 className="title">{selectedOption}</h2> */}
          {/* <div className='flex1'> */}
          {/* <select ref={selectRef} onChange={(event) => handleCategoryChange()}> */}
            {/* {categories.map((option) => option)} */}
          {/* </select> */}
          {/* <AiOutlineMinus className='minus' onClick={() => removeSection(sectionIndex)}/>
          <AiOutlinePlus className='plus' onClick={addSection}/> */}
          {/* </div>
          </div> */}
          {/* {
          filteredCards.length >1?<Slider {...settings2}>
            {
        filteredCards.map((sMovies, index) => (
          <Category>
                  <Card
                    key={index}
                    Class="Scard"
                    imgSrc={baseUrl + sMovies.movie_image}
                    alter={sMovies.movie_name}
                    title={sMovies.movie_name}
                    year={sMovies.movie_year_release}
                    hours={sMovies.movie_length}
                    onClick={() => handleCardClick(sMovies)}
                  />
          </Category>
          ))
        }
         </Slider>: <div>
          {filteredCards.map((sMovies, index) => (
          <Category>
                  <Card
                    key={index}
                    Class="Scard"
                    imgSrc={baseUrl + sMovies.movie_image}
                    alter={sMovies.movie_name}
                    title={sMovies.movie_name}
                    year={sMovies.movie_year_release}
                    hours={sMovies.movie_length}
                    onClick={() => handleCardClick(sMovies)}
                  />
          </Category>
          ))
         }
         </div>
        } */}
        </section>
         {/* ))} */}
        </MovieList>

        {selectedCard && (
          <Modal
            Class='Scard'
            identity = {selectedCard.movie_id}
            Poster={baseUrl + selectedCard.movie_path + baseLink +selectedCard.movie_image}
            alter={selectedCard.movie_name}
            Title={selectedCard.movie_name}
            Year={selectedCard.movie_year_release}
            hours={selectedCard.hours}
            Country = {selectedCard.country}
            Rated= {selectedCard.rated}
            Genre = {selectedCard.movie_genre}
            Production = {selectedCard.production}
            Runtime = {selectedCard.movie_length}
            imdbRating = {selectedCard.movie_rating}
            Director = {selectedCard.movie_producer}
            Actors = {selectedCard.movie_actor}
            BoxOffice = {selectedCard.boxoffice}
            Plot = {selectedCard.movie_description}
            movie = {selectedCard.movie_movie}
            onPlayClick={handlePlayClick}
            // watching={true}
            closePop={() => setSelectedCard(null)} // Function to close the modal
          />
        )}
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
        {/* <FooterLink>
          <a href="#">Jobs</a>
        </FooterLink> */}
        <FooterLink>
          <a href="#">Ways to Watch</a>
        </FooterLink>
        <FooterLink>
          <a href="#">Terms of Use</a>
        </FooterLink>
        {/* <FooterLink>
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
        </FooterLink> */}
      </FooterLinks>
    </FooterContainer>
    </div>
    
    }
        </div>
    )
}


export default Home;

const HamburgerButton = styled.button`
  display: none;
  background-color: orange;
  @media (max-width: 768px) {
    display: block;
  }
`;

const Nav = ({handleItemClick, handleLogInClick, logged, logo, returnHome})=>{
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
  
    setNavActive(!navActive);
  };

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
            logged?<button>Profile</button>:<LoginButton onClick={() => handleLogInClick()}>Log In</LoginButton>
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
            logged?<button>Profile</button>:<LoginButton onClick={() => handleLogInClick()}><LiaSignInAltSolid/>Log In</LoginButton>
          }
        
        </div>
        </div>
        </Mobile>
        </div>
  )
}