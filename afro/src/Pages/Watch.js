import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { AiFillHeart } from 'react-icons/ai';
import { BsDownload} from 'react-icons/bs';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LoadingAnimation from "./Loading";
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
    height: 90vh;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      display: block;
    }
  }
  .hermit {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    // background-color: white;
    width: 25vw;
    // height: 25vh;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

const Cinema = styled.div`
  width: ${props => props.commentShow ? '70vw' : '95vw'};
  height: 75vh;
  margin: 2.5vw;
  border-radius: 20px;
  background-color: black;
  padding: 5px;
  position: sticky;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0 0 80px 0;
  }
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
    object-fit: contain;
  }
`;

const TabsContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  width: 100%;
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
  const [commentShow, setCommentShow] = useState(true)
  // const [videoPlaying, setVideoPlaying] = useState(selectedCard.movie_movie);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  const getSlidesToShow = (dataLength) => {
    if (dataLength <= 2) {
      return 1;
    } else if (dataLength > 9) {
      return 8;
    } else {
      return dataLength - 1;
    }
  };
  const movie_episode = selectedCard.movie_episode;
  var settings1 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: getSlidesToShow(movie_episode),
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
  
  console.log('movie episode',movie_episode)
  // const movieId = selectedCard.movie_id;
  // const types_id = selectedCard.types_id;
  // const category_id = selectedCard.category_id;
  const userId = JSON.parse(localStorage.getItem('loggedInStatus')).matchedUserId;

  

  const [suggestion, setSuggestion] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [suggestedCard, setSuggestedCard]= useState(null);
  const [movieData, setMovieData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [episode, setEpisode] = useState(1)
  

  useEffect(() => {
    setIsLoaded(false);
    const fetchMovieData = async () => {
      try {
        const response = await fetch(`https://myworklm.com/Afrowatch_admin/api/movie/afrowatch_api_movie_watch.php?id=${movieId}&episode_id=${episode}`);
        const data = await response.json();
        console.log('movie ',data);
        setMovieData(data);
      
        setIsLoaded(true);
        // console.log('triad', movieId, '2nd', types_id, '3rd', category_id)
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovieData();
  }, [movieId, episode]);
  
  isLoaded&& console.log('movieData',movieData[0].movie_id)
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
  

  const baseUrl = "https://afrowatch-file.s3.amazonaws.com/";
  const baseLink = "/";

  console.log('Show id: '+movieData)
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

    const changeEp = (value)=>{
      setEpisode(value)
    }

    const handleCinemaButtonClick = () => {
      setCommentShow(false);
    };
  
    const handleCommentsButtonClick = () => {
      setCommentShow(true);
    };

    async function handleDownloadClick() {
      try {
        // Request access to the directory where you want to create the folder.
        const directoryHandle = await window.showDirectoryPicker();
    
        // Create a folder named "AfroWatchDownloaded" if it doesn't exist.
        const folderName = 'AfroWatchDownloaded';
        const folderHandle = await directoryHandle.getDirectoryHandle(folderName, { create: true });
    
        // Get the video source URL.
        const videoSource = movieData[0].movie_movie;
    
        // Fetch the video file.
        const response = await fetch(videoSource); 
        const blob = await response.blob();
    
        // Create a file inside the folder and write the video content.
        const fileHandle = await folderHandle.getFileHandle(movieData[0].movie_movie, { create: true });
        const writable = await fileHandle.createWritable();
        await writable.write(blob);
        await writable.close();
    
        console.log(`Video "${movieData[0].movie_movie}" downloaded successfully.`);
      } catch (error) {
        console.error(`Error downloading video: ${error}`);
      }
    }

    // async function handleDownloadClick() {
    //   try {
    //     // Create a folder named "AfroWatchDownloaded" if it doesn't exist.
    //     const folderName = 'AfroWatchDownloaded';
    
    //     // Create a link element to trigger the download.
    //     const a = document.createElement('a');
    //     a.style.display = 'none';
    //     document.body.appendChild(a);
    
    //     // Get the video source URL.
    //     const videoSource = baseUrl + movieData[0].movie_path + baseLink + movieData[0].movie_movie;
    
    //     // Fetch the video file.
    //     const response = await fetch(videoSource);
    //     const blob = await response.blob();
    
    //     // Create a Blob URL for the video content.
    //     const blobUrl = URL.createObjectURL(blob);
    
    //     // Set the download link's href and filename attributes.
    //     a.href = blobUrl;
    //     a.download = `${folderName}/${movieData[0].movie_movie}`;
    
    //     // Trigger the download by simulating a click on the link.
    //     a.click();
    
    //     // Clean up by removing the link element and revoking the Blob URL.
    //     document.body.removeChild(a);
    //     URL.revokeObjectURL(blobUrl);
    
    //     console.log(`Video "${movieData[0].movie_movie}" downloaded successfully.`);
    //   } catch (error) {
    //     console.error(`Error downloading video: ${error}`);
    //   }
    // }
    

    // function DownloadButton({ movieData, baseUrl, baseLink }) {
    //   const handleDownloadClick = () => {
    //     // Get the video source URL.
    //     const videoSource = baseUrl + movieData[0].movie_path + baseLink + movieData[0].movie_movie;
    
    //     // Fetch the video file.
    //     fetch(videoSource)
    //       .then((response) => response.blob())
    //       .then((blob) => {
    //         // Create a Blob URL for the video content.
    //         const blobUrl = URL.createObjectURL(blob);
    
    //         // Create a temporary <a> element for downloading the video.
    //         const a = document.createElement('a');
    //         a.href = blobUrl;
    //         a.download = movieData[0].movie_movie; // Set the desired file name.
    //         a.style.display = 'none';
    
    //         // Add the <a> element to the DOM and trigger the download.
    //         document.body.appendChild(a);
    //         a.click();
    
    //         // Clean up by removing the <a> element and revoking the Blob URL.
    //         document.body.removeChild(a);
    //         URL.revokeObjectURL(blobUrl);
    
    //         console.log(`Video "${movieData[0].movie_movie}" downloaded successfully.`);
    //       })
    //       .catch((error) => {
    //         console.error(`Error downloading video: ${error}`);
    //       });
    //   };
    
    
  return (
    <WatchContainer>
    {isLoaded?(
      <div className="combination">
      <Cinema commentShow={commentShow}>
        <div className="likeName">
        <span style={{color:`white`}}>{movieData[0].movie_name}</span>
        <div style={{display:`flex`, justifyContent:`space-between`,alignItems:`center`,width:`30%`}}>
        <BsDownload style={{color:`whitesmoke`,fontSize:`20px`, fontWeight:`bold`}} onClick={handleDownloadClick}/>
        <div style={{display:`flex`,alignItems:`center`}}><span style={{color:`white`}}>240</span>
        <AiFillHeart className="like"  onClick={liked} style={{ color: likeColor }}/>
        </div>
        
        {commentShow?<button onClick={handleCinemaButtonClick}>cinema</button>:<button onClick={handleCommentsButtonClick}>comments</button>}
        </div>
        </div>
        <video controls>
          <source
            src={movieData[0].movie_movie}
            type="video/mp4"
          />
        </video>
        {movie_episode>=2?
        <Slider {...settings1}>
                  {Array.from({ length: movie_episode}, (_, index) => (
                                <div key={index} value={`Episode ${index + 1}`} onClick={() => changeEp(`${index + 1}`)}>
                                <div style={{ backgroundColor: "white", margin: `10px` }}>
                                 episode: {index + 1}
                                </div>
                                </div>
                  ))}
        </Slider>:<div></div>}

        {/* <Description></Description> */}
      </Cinema>

      <div className="hermit" style={{ display: commentShow ? 'flex' : 'none' }}>
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
            <Comments movieId={movieData[0].movie_id} userId={identification} />
          </CommentsContainer>
        )}

        {activeTab === "questions" && (
          <CommentsContainer>
            {/* Render questions here */}
            <Questions
              movieId={movieData[0].movie_id}
              userId={identification}
            />
          </CommentsContainer>
        )}
      </div>
      </div>
      ):<LoadingAnimation/>}
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