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
  overflow-x: hidden;
  .combination {
    height: 80vh;
    display: flex;
    align-items: center;
  }
  .hermit {
    display: flex;
    flex-direction: column;
    align-items: center;
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
  // const [videoPlaying, setVideoPlaying] = useState(selectedCard.movie_movie);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  const episodes = [
    {
      link: "https://myworklm.com/Afrowatch_admin/server/Le_parlement_du_rire/Le_parlement_du_rire_1.mp4",
      likes: 45
    },
    {
      link: "https://myworklm.com/Afrowatch_admin/server/Le_parlement_du_rire/Le_parlement_du_rire_2.mp4",
      likes: 45
    },
    {
      link: "https://myworklm.com/Afrowatch_admin/server/Le_parlement_du_rire/Le_parlement_du_rire_3.mp4",
      likes: 45
    },
    {
      link: "https://myworklm.com/Afrowatch_admin/server/Le_parlement_du_rire/Le_parlement_du_rire_4.mp4",
      likes: 45
    },
    {
      link: "https://myworklm.com/Afrowatch_admin/server/Le_parlement_du_rire/Le_parlement_du_rire_5.mp4",
      likes: 45
    },
    {
      link: "https://myworklm.com/Afrowatch_admin/server/Le_parlement_du_rire/Le_parlement_du_rire_6.mp4",
      likes: 45
    },
    {
      link: "https://myworklm.com/Afrowatch_admin/server/Le_parlement_du_rire/Le_parlement_du_rire_7.mp4",
      likes: 45
    },
    {
      link: "https://myworklm.com/Afrowatch_admin/server/Le_parlement_du_rire/Le_parlement_du_rire_8.mp4",
      likes: 45
    },
    {
      link: "https://myworklm.com/Afrowatch_admin/server/Le_parlement_du_rire/Le_parlement_du_rire_9.mp4",
      likes: 45
    },
    {
      link: "https://myworklm.com/Afrowatch_admin/server/Le_parlement_du_rire/Le_parlement_du_rire_10.mp4",
      likes: 45
    },
    {
      link: "https://myworklm.com/Afrowatch_admin/server/Le_parlement_du_rire/Le_parlement_du_rire_11.mp4",
      likes: 45
    },
    {
      link: "https://myworklm.com/Afrowatch_admin/server/Le_parlement_du_rire/Le_parlement_du_rire_12.mp4",
      likes: 45
    }
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
  console.log('movie_id ',selectedCard.movie_id )
  const types_id = selectedCard.types_id;
  console.log('type_id ',selectedCard.types_id )
  const category_id = selectedCard.category_id;
  console.log('category_id ',selectedCard.category_id )
  // const movieId = selectedCard.movie_id;
  // const types_id = selectedCard.types_id;
  // const category_id = selectedCard.category_id;
  const userId = JSON.parse(localStorage.getItem('loggedInStatus')).matchedUserId;

  

  const [suggestion, setSuggestion] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [suggestedCard, setSuggestedCard]= useState(null);
  const [movieData, setMovieData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  

  useEffect(() => {
    setIsLoaded(false);
    const fetchMovieData = async () => {
      try {
        const response = await fetch(`https://myworklm.com/Afrowatch_admin/api/movie/afrowatch_api_movie_watch.php?id=${movieId}`);
        const data = await response.json();
        console.log('movie ',data);
        setMovieData(data);
        setIsLoaded(true);
        console.log('triad', movieId, '2nd', types_id, '3rd', category_id)
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieData();
  }, []);
  
  // setVideoPlaying(movieData);
  useEffect(() => {
    setIsLoad(false);
    const fetchMovieData = async () => {
      try {
        const response = await fetch(`https://myworklm.com/Afrowatch_admin/api/movie/afrowatch_api_movie_suggestion.php?movie_id=${movieId}&category_id=${category_id}&type_id=${types_id}`);
        const data = await response.json();
        
        setSuggestion(data);
        console.log('suggestion',suggestion);
        setIsLoad(true);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieData();
  }, []);


  const handlePlayClick = () => {
    console.log('suggesetion', suggestion)
    // setVideoPlaying(suggestion)
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
  // const liked = ()=>{
  //   setLikeColor(likeColor === 'blue' ? 'red' : 'blue');
  // }

  const api_video_like_post = 'https://myworklm.com/Afrowatch_admin/api/likes/afrowatch_api_video_like_post';
  const liked = ()=>{
    setLikeColor(likeColor === 'blue' ? 'red' : 'blue');
    // Créer un objet pour représenter le nouveau commentaire
  const newCommentObject = {
    is_liked: 1,     // Indiquer que le commentaire est aimé (1)
    movie_id: movieId, // L'ID du film concerné
    user_id: userId,   // L'ID de l'utilisateur qui aime le film
  };

  // Envoyer le nouveau commentaire à l'API
  try {
    fetch(api_video_like_post, {
      method: 'POST',   // Utiliser la méthode POST
      headers: {
        'Content-Type': 'application/json', // Définir le type de contenu
      },
      body: JSON.stringify(newCommentObject), // Convertir l'objet en chaîne JSON
    })
    .then((response) => response.json()) // Convertir la réponse en objet JSON
    .then((data) => {
      console.log('API response:', data); // Afficher la réponse de l'API
    })
    .catch((error) => {
      console.error('Error:', error); // Gérer les erreurs
    });
  } catch (error) {
    console.error('Error:', error); // Gérer les erreurs
  }
}

    

    
  return (
    <WatchContainer>
    {isLoaded && movieData.map((uData, index) => (
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
            <div key={index} value={episode.link} likes={episode.likes}>
              <div style={{ backgroundColor: "white", margin: `10px` }}>
                ep: {index + 1}
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
      {/* <Suggestions>
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
            Poster={baseUrl + suggestedCard.movie_path + baseLink +suggestedCard.movie_image}
            alter={suggestedCard.movie_name}
            Title={suggestedCard.movie_name}
            Year={suggestedCard.movie_year_release}
            hours={suggestedCard.hours}
            Country = {suggestedCard.country}
            Rated= {suggestedCard.rated}
            Genre = {suggestedCard.movie_genre}
            Production = {suggestedCard.production}
            Runtime = {suggestedCard.movie_length}
            imdbRating = {suggestedCard.movie_rating}
            Director = {suggestedCard.movie_producer}
            Actors = {suggestedCard.movie_actor}
            BoxOffice = {suggestedCard.boxoffice}
            Plot = {suggestedCard.movie_description}
            movie = {suggestedCard.movie_movie}
            // onPlayClick={handlePlayClick}
            // watching={true}
            // closePop={() => setSelectedCard(null)}
            // watching={true}
            closePop={() => setSuggestedCard(null)} // Function to close the modal
          />}
      </Suggestions> */}
      
    </WatchContainer>
  );
};

export default Watch;