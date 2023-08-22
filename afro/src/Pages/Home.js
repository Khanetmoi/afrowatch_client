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
// import Nav from './Nav';
import Comments from './Comments';
import Questions from './Questions';
import Slide from './Slide';


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
// background-color:  blue;
width: 5%;
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
  margin-right: 20px;
  a {
    color: white;
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
  
  const handleItemClick = (item) => {
  if(item === "Home")
   {
    setTab("Home")
    setCategories(home)
    setCategoryTitle("Home Page")
   }
   else if(item === "Movie"){
    setTab("Movie")
    setCategories(genres)
      setCategoryTitle("Movie")
    
   }
   else if(item === "show"){
      setTab("show")
      setCategories(genres)
      setCategoryTitle("Show")
   }
  };

  const [userData, setUserData] = useState([]);
  //const [featuredCard, setFeaturedCard] = useState([])
  useEffect(() => {
    const getUserData = async() => {
      try {
        const reqData = await fetch("https://myworklm.com/Afrowatch_admin/api/movie/afrowatch_api_movie.php");
        const resData = await reqData.json();
        // console.log(resData);
        setUserData(resData);
      } catch (error) {
        console.error(error);
      }
    };
    
    getUserData();

  }, []);


  
    const featuredCard = userData?.filter((slide) => slide.movie_actuality === 'Featured');
    const featuresCard = userData?.filter((slide) => slide.movie_actuality === 'Popular');
    const featureZCard = userData?.filter((slide) => slide.movie_category === 'Heartmarming');
    const featureACard = userData?.filter((slide) => slide.movie_category === 'Thrilling');

  const handleCategoryChange = () => {
    // const newSelectedOption = event.target.value;
  
    // const updatedSections = sections.map((section, index) =>
    //   index === sectionIndex ? { ...section, selectedOption: newSelectedOption } : section
    // );
    // setSections(updatedSections);
  
    // Filter the cards based on the selected option for the section
    if (tab === 'Home') {
      const filteredCards = userData.filter((sMovies) => sMovies.movie_actuality === 'Popular');
      setFilteredCards(filteredCards);
      props.watch(false);
      console.log("home" +props.watch)
    } else if (tab === 'Movie') {
      const filteredCards = movie.filter((sMovies) => sMovies.category === 'Action');
      setFilteredCards(filteredCards);
      props.watch(false);
      console.log("Movie" +props.watch)
    } else if (tab === 'Show') {
      const filteredCards = show.filter((sMovies) => sMovies.category === 'Action');
      setFilteredCards(filteredCards);
      props.watch(false);
      console.log(props.watch)
    }
  };
  

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

  const genres = [
    <option key={1}>Action</option>,
    <option key={2}>Comedy</option>,
    <option key={3}>Drama</option>,
    <option key={4}>Sci-Fi</option>,
    <option key={5}>Fantasy</option>,
    <option key={6}>Adventure</option>,
    <option key={7}>Adventure</option>,
    <option key={8}>Romance</option>,
    <option key={9}>Thriller</option>,
    <option key={10}>Horror</option>,
    <option key={11}>Superhero</option>,
    <option key={12}>Animation</option>,
    <option key={13}>Family</option>,
    <option key={14}>Mystery</option>,
    <option key={15}>Crime</option>,
    <option key={16}>Historical</option>,
    <option key={17}>Sports</option>,
    <option key={18}>Biographical</option>,
    <option key={19}>Psychological</option>,
    <option key={20}>Suspense</option>,
    <option key={21}>Time Travel</option>,
    <option key={22}>Documentary</option>,
    <option key={23}>War</option>,
    <option key={24}>Musical</option>,
    <option key={25}>Western</option>,
    <option key={26}>Coming of Age</option>,
    <option key={27}>Dystopian</option>,
    <option key={28}>Disaster</option>,
    <option key={29}>Spy/Espionage</option>,
    <option key={30}>Martial Arts</option>,
    <option key={31}>Supernatural</option>,
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
  const show = [
    {
      Class: 'Scard',
      imgSrc: comingTo,
      alter: 'Movie Poster',
      title: 'Avengers',
      year: 2023,
      hours: 2, 
      category: "Comedy",
      actuality: "Popular",

      country:"dd" ,
      rated: "dd",
      genre: "dsi",
      production: "hdhd",
      hours: "jjd",
      rating: "haja",
      director: "jjj",
      actors: "hsg",
      boxoffice: "jjj",
      description: "jshd",
      video: "hdgf",
      comments: "adad",
      questions: "hafa",
      episodes: "hahsj"
    },
    {
      Class: 'Scard',
      imgSrc:  comingTo,
      alter: 'Movie Poster',
      title: 'expendable',
      year: 2023,
      hours: 2, 
      category: "Comedy",
      actuality: "Popular",

      country:"dd" ,
      rated: "dd",
      genre: "dsi",
      production: "hdhd",
      hours: "jjd",
      rating: "haja",
      director: "jjj",
      actors: "hsg",
      boxoffice: "jjj",
      description: "jshd",
      video: "hdgf",
      comments: "adad",
      questions: "hafa",
      episodes: "hahsj"
    },
    {
      Class: 'Scard',
      imgSrc:  comingTo,
      alter: 'Movie Poster',
      title: 'creators',
      year: 2023,
      hours: 2, // Duration of the movie in hours
      category: "Comedy",
      actuality: "Popular",

      country:"dd" ,
      rated: "dd",
      genre: "dsi",
      production: "hdhd",
      hours: "jjd",
      rating: "haja",
      director: "jjj",
      actors: "hsg",
      boxoffice: "jjj",
      description: "jshd",
      video: "hdgf",
      comments: "adad",
      questions: "hafa",
      episodes: "hahsj"
    },
    {
      Class: 'Scard',
      imgSrc:  comingTo,
      alter: 'Movie Poster',
      title: 'godly',
      year: 2023,
      hours: 2, // Duration of the movie in hours
      category: "Comedy",
      actuality: "Popular",

      country:"dd" ,
      rated: "dd",
      genre: "dsi",
      production: "hdhd",
      hours: "jjd",
      rating: "haja",
      director: "jjj",
      actors: "hsg",
      boxoffice: "jjj",
      description: "jshd",
      video: "hdgf",
      comments: "adad",
      questions: "hafa",
      episodes: "hahsj"
    },
    {
      Class: 'Scard',
      imgSrc:  comingTo,
      alter: 'Movie Poster',
      title: 'death',
      year: 2023,
      hours: 2, // Duration of the movie in hours
      category: "Comedy",
      actuality: "Popular",

      country:"dd" ,
      rated: "dd",
      genre: "dsi",
      production: "hdhd",
      hours: "jjd",
      rating: "haja",
      director: "jjj",
      actors: "hsg",
      boxoffice: "jjj",
      description: "jshd",
      video: "hdgf",
      comments: "adad",
      questions: "hafa",
      episodes: "hahsj"
    },
    {
      Class: 'Scard',
      imgSrc:  comingTo,
      alter: 'Movie Poster',
      title: 'karma',
      year: 2023,
      hours: 2, // Duration of the movie in hours
      category: "Comedy",
      actuality: "Popular",

      country:"dd" ,
      rated: "dd",
      genre: "dsi",
      production: "hdhd",
      hours: "jjd",
      rating: "haja",
      director: "jjj",
      actors: "hsg",
      boxoffice: "jjj",
      description: "jshd",
      video: "hdgf",
      comments: "adad",
      questions: "hafa",
      episodes: "hahsj"
    },
    {
      Class: 'Scard',
      imgSrc:  comingTo,
      alter: 'Movie Poster',
      title: 'shavir',
      year: 2023,
      hours: 2, // Duration of the movie in hours
      category: "Comedy",
      actuality: "Popular",

      country:"dd" ,
      rated: "dd",
      genre: "dsi",
      production: "hdhd",
      hours: "jjd",
      rating: "haja",
      director: "jjj",
      actors: "hsg",
      boxoffice: "jjj",
      description: "jshd",
      video: "hdgf",
      comments: "adad",
      questions: "hafa",
      episodes: "hahsj"
    },
    {
      Class: 'Scard',
      imgSrc:  comingTo,
      alter: 'Movie Poster',
      title: 'chalissa',
      year: 2023,
      hours: 2, // Duration of the movie in hours
      category: "Comedy",

      country:"dd" ,
      rated: "dd",
      genre: "dsi",
      production: "hdhd",
      hours: "jjd",
      rating: "haja",
      director: "jjj",
      actors: "hsg",
      boxoffice: "jjj",
      description: "jshd",
      video: "hdgf",
      comments: "adad",
      questions: "hafa",
      episodes: "hahsj"
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
      category: "Comedy",
      actuality: "Popular",

      country:"dd" ,
      rated: "dd",
      genre: "dsi",
      production: "hdhd",
      hours: "jjd",
      rating: "haja",
      director: "jjj",
      actors: "hsg",
      boxoffice: "jjj",
      description: "jshd",
      video: "hdgf",
      comments: "adad",
      questions: "hafa",
      episodes: "hahsj"
    },
    {
      Class: 'Scard',
      imgSrc:  comingTo,
      alter: 'Movie Poster',
      title: 'expendable',
      year: 2023,
      hours: 2, // Duration of the movie in hours
      category: "Comedy",
      actuality: "Popular",

      country:"dd" ,
      rated: "dd",
      genre: "dsi",
      production: "hdhd",
      hours: "jjd",
      rating: "haja",
      director: "jjj",
      actors: "hsg",
      boxoffice: "jjj",
      description: "jshd",
      video: "hdgf",
      comments: "adad",
      questions: "hafa",
      episodes: "hahsj"
    },
    {
      Class: 'Scard',
      imgSrc:  comingTo,
      alter: 'Movie Poster',
      title: 'creators',
      year: 2023,
      hours: 2, // Duration of the movie in hours
      category: "Comedy",
      actuality: "Popular",

      country:"dd" ,
      rated: "dd",
      genre: "dsi",
      production: "hdhd",
      hours: "jjd",
      rating: "haja",
      director: "jjj",
      actors: "hsg",
      boxoffice: "jjj",
      description: "jshd",
      video: "hdgf",
      comments: "adad",
      questions: "hafa",
      episodes: "hahsj"
    },
    {
      Class: 'Scard',
      imgSrc:  comingTo,
      alter: 'Movie Poster',
      title: 'godly',
      year: 2023,
      hours: 2, 
      category: "Comedy",
      actuality: "Popular",

      country:"dd" ,
      rated: "dd",
      genre: "dsi",
      production: "hdhd",
      hours: "jjd",
      rating: "haja",
      director: "jjj",
      actors: "hsg",
      boxoffice: "jjj",
      description: "jshd",
      video: "hdgf",
      comments: "adad",
      questions: "hafa",
      episodes: "hahsj"
    },
    {
      Class: 'Scard',
      imgSrc:  comingTo,
      alter: 'Movie Poster',
      title: 'death',
      year: 2023,
      hours: 2, 
      category: "Comedy",
      actuality: "Popular",

      country:"dd" ,
      rated: "dd",
      genre: "dsi",
      production: "hdhd",
      hours: "jjd",
      rating: "haja",
      director: "jjj",
      actors: "hsg",
      boxoffice: "jjj",
      description: "jshd",
      video: "hdgf",
      comments: "adad",
      questions: "hafa",
      episodes: "hahsj"
    },
    {
      Class: 'Scard',
      imgSrc:  comingTo,
      alter: 'Movie Poster',
      title: 'karma',
      year: 2023,
      hours: 2,
      category: "Comedy",
      actuality: "Popular",

      country:"dd" ,
      rated: "dd",
      genre: "dsi",
      production: "hdhd",
      hours: "jjd",
      rating: "haja",
      director: "jjj",
      actors: "hsg",
      boxoffice: "jjj",
      description: "jshd",
      video: "hdgf",
      comments: "adad",
      questions: "hafa",
      episodes: "hahsj"
    },
    {
      Class: 'Scard',
      imgSrc:  comingTo,
      alter: 'Movie Poster',
      title: 'shavir',
      year: 2023,
      hours: 2, 
      category: "Comedy",
      actuality: "Popular",

      country:"dd" ,
      rated: "dd",
      genre: "dsi",
      production: "hdhd",
      hours: "jjd",
      rating: "haja",
      director: "jjj",
      actors: "hsg",
      boxoffice: "jjj",
      description: "jshd",
      video: "hdgf",
      comments: "adad",
      questions: "hafa",
      episodes: "hahsj"
    },
    {
      Class: 'Scard',
      imgSrc:  comingTo,
      alter: 'Movie Poster',
      title: 'chalissa',
      year: 2023,
      hours: 2, 
      category: "Comedy",
      actuality: "Popular",

      country:"dd" ,
      rated: "dd",
      genre: "dsi",
      production: "hdhd",
      hours: "jjd",
      rating: "haja",
      director: "jjj",
      actors: "hsg",
      boxoffice: "jjj",
      description: "jshd",
      video: "hdgf",
      comments: "adad",
      questions: "hafa",
      episodes: "hahsj"
    },

  ]



  const baseUrlimage = "https://myworklm.com/Afrowatch_admin/server/movie_images/";

  const baseUrlMovie = "https://myworklm.com/Afrowatch_admin/server/movie_files/";

  const baseUrlTrailler = "https://myworklm.com/Afrowatch_admin/server/trailer_files/";

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
          {featuresCard?.map((slide, index) => {
  if (index < 3) {
    return (
      <Slide
        poster={baseUrlimage + slide.movie_image}
        alter={slide.movie_name}
        video={baseUrlTrailler + slide.movie_trailler_file}
        title={slide.movie_name}
        date={slide.movie_year_release}
        className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
        key={index}
        read={() => handleCardClick(slide)}
        page={props.page}
        log={props.logged}
      />
    );
  }
  return null; 
})}

         </div>}
        {userInfo&& <div>
          {props.tab === 'Home' ? (
              <div className='homeCategory'>
                <FeaturedMovies>
        <h2 className="title">Popular</h2>
        {
          featuresCard.length >1?<Slider {...settings1}> 
         {featuresCard?.map((slide, index)=>{
          
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
        </Slider>:<div> {featuredCard.map((slide, index)=>{
          
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index*2}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
          </div>
        }
        
      </FeaturedMovies>
      <FeaturedMovies>
        <h2 className="title">Trending</h2>
        {
          featuresCard.length >1?<Slider {...settings1}> 
         {featuresCard?.map((slide, index)=>{
         
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
        </Slider>:<div> {featuredCard.map((slide, index)=>{
          console.log("slide", slide)
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index*2}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
          </div>
        }
        
      </FeaturedMovies>
      <FeaturedMovies>
        <h2 className="title">Thriller</h2>
        {
          featuresCard.length >1?<Slider {...settings1}> 
         {featuresCard?.map((slide, index)=>{
         
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
        </Slider>:<div> {featuredCard.map((slide, index)=>{
          
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index*2}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
          </div>
        }
        
      </FeaturedMovies>
      <FeaturedMovies>
        <h2 className="title">Adventure</h2>
        {
          featuresCard.length >1?<Slider {...settings1}> 
         {featuresCard?.map((slide, index)=>{
         
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
        </Slider>:<div> {featuredCard.map((slide, index)=>{
      
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index*2}
              read={() => handleCardClick(slide)}
              log = {props.logged}
            /> 
            )
          })} 
          </div>
        }
        
      </FeaturedMovies>
      <FeaturedMovies>
        <h2 className="title">Crime scene</h2>
        {
          featuresCard.length >1?<Slider {...settings1}> 
         {featuresCard?.map((slide, index)=>{
       
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
        </Slider>:<div> {featuredCard.map((slide, index)=>{
        
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index*2}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
          </div>
        }
        
      </FeaturedMovies>
      <FeaturedMovies>
        <h2 className="title">Romantic</h2>
        {
          featuresCard.length >1?<Slider {...settings1}> 
         {featuresCard?.map((slide, index)=>{
      
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
        </Slider>:<div> {featuredCard.map((slide, index)=>{
         
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index*2}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
          </div>
        }
        
      </FeaturedMovies>
      <FeaturedMovies>
        <h2 className="title">Horror</h2>
        {
          featuresCard.length >1?<Slider {...settings1}> 
         {featuresCard?.map((slide, index)=>{
          
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
        </Slider>:<div> {featuredCard.map((slide, index)=>{
       
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index*2}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
          </div>
        }
        
      </FeaturedMovies>
      <FeaturedMovies>
        <h2 className="title">Comedy</h2>
        {
          featuresCard.length >1?<Slider {...settings1}> 
         {featuresCard?.map((slide, index)=>{
    
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
        </Slider>:<div> {featuredCard.map((slide, index)=>{
         
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index*2}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
          </div>
        }
        
      </FeaturedMovies>
      <FeaturedMovies>
        <h2 className="title">Adventure</h2>
        {
          featuresCard.length >1?<Slider {...settings1}> 
         {featuresCard?.map((slide, index)=>{
      
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
        </Slider>:<div> {featuredCard.map((slide, index)=>{
        
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index*2}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
          </div>
        }
        
      </FeaturedMovies>
      <FeaturedMovies>
        <h2 className="title">Reality Show</h2>
        {
          featuresCard.length >1?<Slider {...settings1}> 
         {featuresCard?.map((slide, index)=>{
      
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index}
              read={() => handleCardClick(slide)}
              log = {props.logged}
              page = { props.page}
            /> 
            )
          })} 
        </Slider>:<div> {featuredCard.map((slide, index)=>{
   
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index*2}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
          </div>
        }
        
      </FeaturedMovies>
      <FeaturedMovies>
        <h2 className="title">Drama</h2>
        {
          featuresCard.length >1?<Slider {...settings1}> 
         {featuresCard?.map((slide, index)=>{

          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
        </Slider>:<div> {featuredCard.map((slide, index)=>{
    
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index*2}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
          </div>
        }
        
      </FeaturedMovies>
              </div>
            ) : props.tab === 'Movie' ? (
              <div className='movieCategory'>
        <FeaturedMovies>
        <h2 className="title">HEARTMARMING</h2>
        {
          featureZCard.length >1?<Slider {...settings1}> 
         {featureZCard?.map((slide, index)=>{
          
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
        </Slider>:<div> {featuredCard.map((slide, index)=>{
          
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index*2}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
          </div>
        }
        
      </FeaturedMovies>
      <FeaturedMovies>
        <h2 className="title">THRILLING</h2>
        {
          featureACard.length >1?<Slider {...settings1}> 
         {featureACard?.map((slide, index)=>{
         
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
        </Slider>:<div> {featuredCard.map((slide, index)=>{
          console.log("slide", slide)
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index*2}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
          </div>
        }
        
      </FeaturedMovies>
      <FeaturedMovies>
        <h2 className="title">HUMOROUSE</h2>
        {
          featuresCard.length >1?<Slider {...settings1}> 
         {featuresCard?.map((slide, index)=>{
         
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
        </Slider>:<div> {featuredCard.map((slide, index)=>{
          
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index*2}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
          </div>
        }
        
      </FeaturedMovies>
      <FeaturedMovies>
        <h2 className="title">SCARY</h2>
        {
          featuresCard.length >1?<Slider {...settings1}> 
         {featuresCard?.map((slide, index)=>{
         
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
        </Slider>:<div> {featuredCard.map((slide, index)=>{
      
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index*2}
              read={() => handleCardClick(slide)}
              log = {props.logged}
            /> 
            )
          })} 
          </div>
        }
        
      </FeaturedMovies>
      <FeaturedMovies>
        <h2 className="title">THOUGHT-PROVOKING</h2>
        {
          featuresCard.length >1?<Slider {...settings1}> 
         {featuresCard?.map((slide, index)=>{
       
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
        </Slider>:<div> {featuredCard.map((slide, index)=>{
        
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index*2}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
          </div>
        }
        
      </FeaturedMovies>
      <FeaturedMovies>
        <h2 className="title">TIMELESS</h2>
        {
          featuresCard.length >1?<Slider {...settings1}> 
         {featuresCard?.map((slide, index)=>{
      
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
        </Slider>:<div> {featuredCard.map((slide, index)=>{
         
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index*2}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
          </div>
        }
        
      </FeaturedMovies>
      <FeaturedMovies>
        <h2 className="title">MYSTICAL</h2>
        {
          featuresCard.length >1?<Slider {...settings1}> 
         {featuresCard?.map((slide, index)=>{
          
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
        </Slider>:<div> {featuredCard.map((slide, index)=>{
       
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index*2}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
          </div>
        }
        
      </FeaturedMovies>
      <FeaturedMovies>
        <h2 className="title">EMPOWERING</h2>
        {
          featuresCard.length >1?<Slider {...settings1}> 
         {featuresCard?.map((slide, index)=>{
    
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
        </Slider>:<div> {featuredCard.map((slide, index)=>{
         
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index*2}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
          </div>
        }
        
      </FeaturedMovies>
      <FeaturedMovies>
        <h2 className="title">HOPEFUL</h2>
        {
          featuresCard.length >1?<Slider {...settings1}> 
         {featuresCard?.map((slide, index)=>{
      
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
        </Slider>:<div> {featuredCard.map((slide, index)=>{
        
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index*2}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
          </div>
        }
        
      </FeaturedMovies>
      <FeaturedMovies>
        <h2 className="title">COURAGEOUS</h2>
        {
          featuresCard.length >1?<Slider {...settings1}> 
         {featuresCard?.map((slide, index)=>{
      
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index}
              read={() => handleCardClick(slide)}
              log = {props.logged}
              page = { props.page}
            /> 
            )
          })} 
        </Slider>:<div> {featuredCard.map((slide, index)=>{
   
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index*2}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
          </div>
        }
        
      </FeaturedMovies>
      <FeaturedMovies>
        <h2 className="title">MYSTERIOUS</h2>
        {
          featuresCard.length >1?<Slider {...settings1}> 
         {featuresCard?.map((slide, index)=>{

          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
        </Slider>:<div> {featuredCard.map((slide, index)=>{
    
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index*2}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
          </div>
        }
        
      </FeaturedMovies>
      <FeaturedMovies>
        <h2 className="title">FASCINATING</h2>
        {
          featuresCard.length >1?<Slider {...settings1}> 
         {featuresCard?.map((slide, index)=>{
          
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
        </Slider>:<div> {featuredCard.map((slide, index)=>{
          
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index*2}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
          </div>
        }
        
      </FeaturedMovies>
      <FeaturedMovies>
        <h2 className="title">GLAMOROUSE</h2>
        {
          featuresCard.length >1?<Slider {...settings1}> 
         {featuresCard?.map((slide, index)=>{
         
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
        </Slider>:<div> {featuredCard.map((slide, index)=>{
          console.log("slide", slide)
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index*2}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
          </div>
        }
        
      </FeaturedMovies>
      <FeaturedMovies>
        <h2 className="title">GLAMOROUSE</h2>
        {
          featuresCard.length >1?<Slider {...settings1}> 
         {featuresCard?.map((slide, index)=>{
         
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
        </Slider>:<div> {featuredCard.map((slide, index)=>{
          console.log("slide", slide)
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index*2}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
          </div>
        }
        
      </FeaturedMovies>
              </div>
            ) : props.tab === 'show' ? (
              <div className='showCategory'>
                <FeaturedMovies>
        <h2 className="title">FASCINATING</h2>
        {
          featuresCard.length >1?<Slider {...settings1}> 
         {featuresCard?.map((slide, index)=>{
          
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
        </Slider>:<div> {featuredCard.map((slide, index)=>{
          
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index*2}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
          </div>
        }
        
      </FeaturedMovies>
      <FeaturedMovies>
        <h2 className="title">GLAMOROUSE</h2>
        {
          featuresCard.length >1?<Slider {...settings1}> 
         {featuresCard?.map((slide, index)=>{
         
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
        </Slider>:<div> {featuredCard.map((slide, index)=>{
          console.log("slide", slide)
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index*2}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
          </div>
        }
        
      </FeaturedMovies>
      <FeaturedMovies>
        <h2 className="title">Thriller</h2>
        {
          featuresCard.length >1?<Slider {...settings1}> 
         {featuresCard?.map((slide, index)=>{
         
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
        </Slider>:<div> {featuredCard.map((slide, index)=>{
          
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index*2}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
          </div>
        }
        
      </FeaturedMovies>
      <FeaturedMovies>
        <h2 className="title">Adventure</h2>
        {
          featuresCard.length >1?<Slider {...settings1}> 
         {featuresCard?.map((slide, index)=>{
         
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
        </Slider>:<div> {featuredCard.map((slide, index)=>{
      
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index*2}
              read={() => handleCardClick(slide)}
              log = {props.logged}
            /> 
            )
          })} 
          </div>
        }
        
      </FeaturedMovies>
      <FeaturedMovies>
        <h2 className="title">Crime scene</h2>
        {
          featuresCard.length >1?<Slider {...settings1}> 
         {featuresCard?.map((slide, index)=>{
       
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
        </Slider>:<div> {featuredCard.map((slide, index)=>{
        
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index*2}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
          </div>
        }
        
      </FeaturedMovies>
      <FeaturedMovies>
        <h2 className="title">Romantic</h2>
        {
          featuresCard.length >1?<Slider {...settings1}> 
         {featuresCard?.map((slide, index)=>{
      
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
        </Slider>:<div> {featuredCard.map((slide, index)=>{
         
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index*2}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
          </div>
        }
        
      </FeaturedMovies>
      <FeaturedMovies>
        <h2 className="title">Horror</h2>
        {
          featuresCard.length >1?<Slider {...settings1}> 
         {featuresCard?.map((slide, index)=>{
          
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
        </Slider>:<div> {featuredCard.map((slide, index)=>{
       
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index*2}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
          </div>
        }
        
      </FeaturedMovies>
      <FeaturedMovies>
        <h2 className="title">Comedy</h2>
        {
          featuresCard.length >1?<Slider {...settings1}> 
         {featuresCard?.map((slide, index)=>{
    
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
        </Slider>:<div> {featuredCard.map((slide, index)=>{
         
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index*2}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
          </div>
        }
        
      </FeaturedMovies>
      <FeaturedMovies>
        <h2 className="title">Adventure</h2>
        {
          featuresCard.length >1?<Slider {...settings1}> 
         {featuresCard?.map((slide, index)=>{
      
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
        </Slider>:<div> {featuredCard.map((slide, index)=>{
        
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index*2}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
          </div>
        }
        
      </FeaturedMovies>
      <FeaturedMovies>
        <h2 className="title">Reality Show</h2>
        {
          featuresCard.length >1?<Slider {...settings1}> 
         {featuresCard?.map((slide, index)=>{
      
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index}
              read={() => handleCardClick(slide)}
              log = {props.logged}
              page = { props.page}
            /> 
            )
          })} 
        </Slider>:<div> {featuredCard.map((slide, index)=>{
   
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index*2}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
          </div>
        }
        
      </FeaturedMovies>
      <FeaturedMovies>
        <h2 className="title">Drama</h2>
        {
          featuresCard.length >1?<Slider {...settings1}> 
         {featuresCard?.map((slide, index)=>{

          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
        </Slider>:<div> {featuredCard.map((slide, index)=>{
    
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index*2}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
          </div>
        }
        
      </FeaturedMovies>
              </div>
            ) : (
              <h1>No such category</h1>
            )}
        
    </div>}
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
                    imgSrc={baseUrlimage + sMovies.movie_image}
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
                    imgSrc={baseUrlimage + sMovies.movie_image}
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
            Poster={baseUrlimage +selectedCard.movie_image}
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
        <FooterLink>
          <a href="#">Jobs</a>
        </FooterLink>
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

const Card = ({Class, imgSrc, alter, title, year, hours, onClick})=>{
  return (
    
    <div className={Class} onClick={onClick}>
          <div>
            <img src={imgSrc} alt={alter}/>
          </div>

          <h2>{title}</h2>
          <h3>{year} . {hours} mn</h3>
          </div>
  )
};

// const Modal = (props)=>{
//   const viewMovie = {
//     video: props.movie,
//     comments: props.comments,
//     episodes: props.episodes
//   }
//   const handlePlayClick = () => {
//     props.onPlayClick(viewMovie);
//   };
//   return (
    
//       <div className='show-expand'>
      
//       <div className='show-content'>
//         <i class="show-close fas fa-times" onClick={props.closePop} >X</i>
//         <div className='show-poster'>
//           <span className='show-poster-bg' onClick={handlePlayClick}>
//             <img src={props.Poster !== 'N/A' ? props.Poster : 'https://via.placeholder.com/163x240/111217/FFFFFF/?text=No%20Image'} alt={props.Title} />
//           </span>
//           <span className='show-poster-main'>
//             <img src={props.Poster !== 'N/A' ? props.Poster : 'https://via.placeholder.com/163x240/111217/FFFFFF/?text=No%20Image'} alt={props.Title} />
//           </span>
//         </div>
        
//         <div className='show-detail'>
//           <h2>{props.Title}</h2>
//           <ul className="show-tags">
//             <li className="show-rated">{props.Country}</li>
//             <li className="show-rated">{props.Year}</li>
//             <li className="show-year">{props.Rated}</li>
//             <li className="show-year">{props.Genre}</li>
//           </ul>
//           <div className="show-plot">
//             <p>{props.Plot}</p>
//           </div>
          
//           <div class="show-credits">
//             <p><strong>Production:</strong> {props.Production || 'N/A '}</p>
//             <p><strong>Runtime:</strong> {props.Runtime || 'N/A '} minutes</p>
//             <p><strong>Rating:</strong> {props.imdbRating}</p>
//             <p><strong>Director:</strong> {props.Director}</p>
//             <p><strong>Actors:</strong> {props.Actors}</p>
//             <p><strong>BoxOffice:</strong> {props.BoxOffice || 'N/A '}</p>
//           </div>
//         </div>
//         {/* <button onClick={handlePlayClick}>Play</button> */}
//       </div>
      
//     </div>
//   )
// }

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



const Watch = ({ selectedCard, identity }) => {
  const [activeTab, setActiveTab] = useState('comments');
  const identification = identity;
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const baseUrlMovie = "https://myworklm.com/Afrowatch_admin/server/movie_files/";

  // Check if selectedCard is null or undefined before accessing its properties
  if (!selectedCard) {
     return <div>No video selected</div>;
  }

  return (
    <WatchContainer>
      <Cinema>
        <video controls>
          <source
            src={baseUrlMovie + selectedCard.movie_file}
            type="video/mp4"
          />
          <source
            src={baseUrlMovie + selectedCard.movie_file} 
            type="video/ogg"/>
        </video>
      </Cinema>

      <TabsContainer>
        <li
          onClick={() => handleTabClick('comments')}
          className={activeTab === 'comments' ? 'active' : ''}
          style={{color: `white`}}
        >
          Comments
        </li>
        <li
          onClick={() => handleTabClick('questions')}
          className={activeTab === 'questions' ? 'active' : ''}
          style={{color: `white`}}
        >
          Questions
        </li>
        <li
          onClick={() => handleTabClick('episodes')}
          className={activeTab === 'episodes' ? 'active' : ''}
          style={{color: `white`}}
        >
          Episodes
        </li>
      </TabsContainer>

      {activeTab === 'comments' && (
        <CommentsContainer>
          {/* Render comments here */}
          <Comments movieId = {selectedCard.movie_id} userId = {identification}/>
        </CommentsContainer>
      )}

      {activeTab === 'questions' && (
        <CommentsContainer>
          {/* Render questions here */}
          <Questions movieId = {selectedCard.movie_id} userId = {identification}/>
        </CommentsContainer>
      )}

      {activeTab === 'episodes' && (
        <CommentsContainer>
          {/* Render episodes here */}
          <h2>Episodes</h2>
        </CommentsContainer>
      )}
    </WatchContainer>
  );
};