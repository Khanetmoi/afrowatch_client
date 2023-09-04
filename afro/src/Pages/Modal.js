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

  const baseUrl = "https://myworklm.com/Afrowatch_admin/server/";
  const baseLink = "/";

  const handlePlayClick = (movie) => {
    // send watched to the Api
    onPlayClick({
      video: movie,
      // comments: movieData.movie_comments,
      // episodes: movieData.movie_episodes
    });
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
          <div className='playWatchLater'>
            <button>Watch Later</button>
            <div><FaPlay/></div>
              
          </div>
        </div>
      
    </div>
  );
};

export default Modal;
