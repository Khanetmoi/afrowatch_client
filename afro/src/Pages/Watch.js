import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { AiFillHeart } from 'react-icons/ai';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "./Slide";
import Modal from "./Modal";
// import Suggestions from "./Suggestions";
import Comments from "./Comments";
import Questions from "./Questions";

const WatchContainer = styled.div`
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  .combination {
    height: 80vh;
    display: flex;
    align-items: center;
  }
  .hermit {
    display: flex;
    flex-direction: column;
    // background-color: white;
    width: 25vw;
    // height: 25vh;
  }
`;

const Cinema = styled.div`
  width: 70vw;
  height: 75vh;
  margin: 2.5vw;
  border-radius: 20px;
  background-color: black;
  padding: 5px;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  position: sticky;
  .likeName {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .like{
      color: blue;
      font-size: 40px;
    }
  }
  video {
    width: 100%;
    height: 90%;
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
const Description = styled.div`
`;

const Suggestions = styled.div`
`;

const Watch = ({ selectedCard, identity, page, watch}) => {
  const [activeTab, setActiveTab] = useState("comments");
  const identification = identity;
  const [likeColor, setLikeColor] = useState('blue');
  const [videoPlaying, setVideoPlaying] = useState(null);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  const episodes = [
    "episode1",
    "episode2",
    "episode3",
    "episode1",
    "episode1",
    "episode1",
    "episode1",
    "episode1",
    "episode1",
    "episode1",
    "episode1",
    "episode1",
    "episode1",
  ];
  const getSlidesToShow = (dataLength) => {
    if (dataLength <= 2) {
      return 1;
    } else if (dataLength > 9) {
      return 8;
    } else {
      return dataLength - 1;
    }
  };

  var settings1 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: getSlidesToShow(episodes.length),
    slidesToScroll: 1,
    swipeToSlide: true,
    centerMode: false,
    // variableWidth: true,
    centerPadding: "0",
    // afterChange: (current) => setCurrentSlide(current),
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

  const movieId = selectedCard.movie_id;
  const types_id = selectedCard.types_id;
  const category_id = selectedCard.category_id;


  const [suggestion, setSuggestion] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const [suggestedCard, setSuggestedCard]= useState(null);
  const [movieData, setMovieData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // const [suggestion, setSuggestion] = useState([])
  // const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    const fetchMovieData = async () => {
      try {
        const response = await fetch(`https://myworklm.com/Afrowatch_admin/api/movie/afrowatch_api_movie_watch.php?id=${movieId}`);
        const data = await response.json();
        console.log('movie ',data);
        setMovieData(data);
        setIsLoaded(true);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieData();
  }, []);

  setVideoPlaying(movieData);
  useEffect(() => {
    setIsLoad(false);
    const fetchMovieData = async () => {
      try {
        const response = await fetch(`https://myworklm.com/Afrowatch_admin/api/movie/afrowatch_api_movie_suggestion.php?movie_id=${movieId}&category_id=${category_id}&type_id=${types_id}`);
        const data = await response.json();
        console.log('suggestion',data);
        setSuggestion(data);
        setIsLoad(true);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieData();
  }, [videoPlaying]);


  const handlePlayClick = () => {
    console.log('suggesetion', suggestion)
    setVideoPlaying(suggestion)
    setSuggestedCard(null)
  };
  

  const baseUrl = "https://myworklm.com/Afrowatch_admin/server/";
  const baseLink = "/";

  console.log('Show id: '+movieData.movie_name)
  const handleCardClick = (sMovies) => {
    setSuggestedCard({...sMovies});
  };


  if (!selectedCard) {
    return <div>No video selected</div>;
  }
  const liked = ()=>{
    setLikeColor(likeColor === 'blue' ? 'red' : 'blue');
  }

    

    
  return (
    <WatchContainer>
    {isLoaded && videoPlaying.map((uData, index) => (
      <div className="combination">
      <Cinema>
        <div className="likeName">
        <span style={{color:`white`}}>{uData.movie_name}</span>
        <AiFillHeart className="like"  onClick={liked} style={{ color: likeColor }}/>
        </div>
        <video controls>
          <source
            src={baseUrl+uData.movie_path+baseLink+uData.movie_movie}
            type="video/mp4"
          />
          <source
            src={baseUrl+uData.movie_path+baseLink+uData.movie_movie}
            type="video/ogg"
          />
        </video>
        <Slider {...settings1}>
          {episodes.map((episode, index) => (
            <div key={index} value={episode}>
              <div style={{ backgroundColor: "white", margin: `10px` }}>
                {index + 1}
              </div>
            </div>
          ))}
        </Slider>
        {/* <Description></Description> */}
      </Cinema>

      <div className="hermit">
        <TabsContainer>
          <li
            onClick={() => handleTabClick("comments")}
            className={activeTab === "comments" ? "active" : ""}
            style={{ color: `white` }}
          >
            Comments
          </li>
          <li
            onClick={() => handleTabClick("questions")}
            className={activeTab === "questions" ? "active" : ""}
            style={{ color: `white` }}
          >
            Questions
          </li>
          {/* <li
          onClick={() => handleTabClick('episodes')}
          className={activeTab === 'episodes' ? 'active' : ''}
          style={{color: `white`}}
        >
          Episodes
        </li> */}
        </TabsContainer>

        {activeTab === "comments" && (
          <CommentsContainer>
            {/* Render comments here */}
            <Comments movieId={uData.movie_id} userId={identification} />
          </CommentsContainer>
        )}

        {activeTab === "questions" && (
          <CommentsContainer>
            {/* Render questions here */}
            <Questions
              movieId={uData.movie_id}
              userId={identification}
            />
          </CommentsContainer>
        )}
      </div>
      </div>
      ))}
      {/* <Suggestions selectedCard={selectedCard}/> */}
      <Suggestions>
      <h3>suggestions</h3>
        {isLoad && suggestion.map((suggest, index)=>{
          return (
            <Slide
            poster={baseUrl + suggest.movie_folder + baseLink + suggest.movie_image}
                    alter={suggest.movie_name}
                    video={baseUrl + suggest.movie_folder + baseLink + suggest.movie_trailer}
                    title={suggest.movie_name}
                    date={suggest.movie_year_release}
                    genre={suggest.movie_genre}
                    // className={`suggest ${index === currentSlide ? 'slick-center' : ''}`}
                    key={index}
                    read={() => handleCardClick(suggest)}
                    // page={props.page}
            />
            )
            
        })}
        {suggestedCard &&<Modal
            Class='Scard'
            identity = {suggestedCard.movie_id}
            onPlayClick={handlePlayClick}
            // watching={true}
            closePop={() => setSuggestedCard(null)} // Function to close the modal
          />}
      </Suggestions>
      
    </WatchContainer>
  );
};

export default Watch;