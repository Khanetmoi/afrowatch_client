import React, { useState, useEffect } from 'react';

const Modal = (props) => {
  const { identity, onPlayClick, closePop } = props;
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
    onPlayClick({
      video: movie.server_movie,
      comments: movie.movie_comments,
      episodes: movie.movie_episodes
    });
  };

  return (
    <div className='show-expand'>
      {movieData.map((uData, index) => (
        <div className='show-content' key={index}>
          <i className="show-close fas fa-times" onClick={closePop}>X</i>
          <div className='show-poster'>
            <span className='show-poster-bg' onClick={() => handlePlayClick(uData)}>
              <img src={baseUrl + uData.movie_folder + baseLink + uData.movie_image} alt={uData.movie_name} />
            </span>
            <span className='show-poster-main'>
              <img src={baseUrl + uData.movie_folder + baseLink + uData.movie_image} alt={uData.movie_name} />
              <button>Watch Later</button>
              <button>Play</button>
            </span>
          </div>
          <div className='show-detail'>
            <h2>{uData.movie_name}</h2>
            <ul className="show-tags">
              {/* <li className="show-rated">{uData.Country}</li> */}
              <li className="show-rated">{uData.movie_year_release}</li>
              <li className="show-year">{uData.movie_rating}</li>
              <li className="show-year">{uData.movie_genre}</li>
            </ul>
            <div className="show-plot">
              <p>{uData.movie_description}</p>
            </div>
            <div className="show-credits">
              {/* <p><strong>Production:</strong> {uData.movie_producer || 'N/A'}</p> */}
              <p><strong>Runtime:</strong> {uData.movie_length || 'N/A'} minutes</p>
              <p><strong>Rating:</strong> {uData.movie_rating}</p>
              <p><strong>Director:</strong> {uData.movie_producer}</p>
              <p><strong>Actors:</strong> {uData.movie_actor}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Modal;
