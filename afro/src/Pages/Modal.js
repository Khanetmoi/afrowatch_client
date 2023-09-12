import React, { useState, useEffect } from 'react';
import { FaPlay} from 'react-icons/fa';

const Modal = (props) => {
  const { identity, onPlayClick, closePop,  Poster, alter, Title, Year, movie, hours, Country, Rated, Genre, Production, Runtime, imdbRating, Director, Actors, BoxOffice, Plot, selectedCard  } = props;
  const [movieData, setMovieData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(false);
    const fetchMovieData = async () => {
      try {
        const response = await fetch(`https://myworklm.com/Afrowatch_admin/api/movie/afrowatch_api_movie_modal.php?id=${identity}`);
        const data = await response.json();
        console.log(data);
        setMovieData(data);
        setIsLoaded(true);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieData();
  }, [identity]);
  const userId = JSON.parse(localStorage.getItem('loggedInStatus')).matchedUserId;
  console.log('user Id', userId)
  const movieId =identity
  const baseUrl = "https://myworklm.com/Afrowatch_admin/server/";
  const baseLink = "/";
  const [formData, setFormData] = useState({
    movie_id: movieId,
    user_id: userId,
    
  });
  const handlePlayClick = (movie) => {
    // send watched to the Api
    fetch('https://myworklm.com/Afrowatch_admin/api/movie/afrowatch_api_movie_watched_movie.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('sent')
        // Handle successful response data here
      })
      .catch((error) => {
        console.log('Error:', error);
      });
    onPlayClick({
      video: movie,
      // comments: movieData.movie_comments,
      // episodes: movieData.movie_episodes
    });
  };
  
  const handlewatchlater = (event) => {
    fetch('https://myworklm.com/Afrowatch_admin/api/movie/afrowatch_api_movie_watch_later.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('sent')
        // Handle successful response data here
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  
    // Handle form submission here (e.g., form validation and additional logic)
  };
  
  
  return (
    <div className='show-expand'>
      
        <div className='show-content' >
          <i className="show-close fas fa-times" onClick={closePop}>X</i>
          <div className='show-poster'>
          
            <span className='show-poster-bg' onClick={() => handlePlayClick(selectedCard)}>
              <img src={Poster} alt={alter} />
            </span>
            
              <span className='show-poster-main'>
              <img src={Poster} alt={alter} />
              
              {/* <button>Play</button> */}
            </span>
            {/* </div> */}
            
          </div>
          <div className='show-detail'>
            <h2>{Title}</h2>
            <ul className="show-tags">
              {/* <li className="show-rated">{uData.Country}</li> */}
              <li className="show-rated">{Rated}</li>
              <li className="show-year">{Year}</li>
              <li className="show-year">{Genre}</li>
            </ul>
            <div className="show-plot">
              <p>{Plot}</p>
            </div>
            <div className="show-credits">
              {/* <p><strong>Production:</strong> {uData.movie_producer || 'N/A'}</p> */}
              <p><strong>Runtime:</strong> {Runtime || 'N/A'} minutes</p>
              <p><strong>Rating:</strong> {imdbRating}</p>
              <p><strong>Director:</strong> {Director}</p>
              <p><strong>Actors:</strong> {Actors}</p>
            </div>
          </div>
          <div className='playWatchLater'  style={{margin:`10px 33%`, display:`flex`,justifyContent:`space-between`}}>
            <button onClick={()=>{handlewatchlater()}}>Watch Later</button>
            <button onClick={() => handlePlayClick(selectedCard)} >Play <FaPlay/></button>
          </div>
        </div>
      
    </div>
  );
};

export default Modal;
