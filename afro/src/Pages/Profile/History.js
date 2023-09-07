import React, { useState, useEffect } from "react";
import Card from "../Card";
import Modal from "../Modal";

const History = ({page}) => {
  const profile = JSON.parse(localStorage.getItem('loggedInStatus'));
  const [isLoaded, setIsLoaded] = useState(false);
  const [liked, setLiked] = useState([]);
  const [watched, setWatched] = useState([]);
  const [watchLater, setWatchLater] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  const baseUrl = "https://afrowatch-file.s3.amazonaws.com/";
  const baseLink = "/";

  const fetchLikedData = async () => {
    try {
      const response = await fetch(`https://myworklm.com/Afrowatch_admin/api/likes/afrowatch_api_video_like_view?user_id=${profile.matchedUserId}`);
      const data = await response.json();
      console.log(data);
      setLiked(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchWacthedMovie = async () => {
    try {
      const response = await fetch(`https://myworklm.com/Afrowatch_admin/api/movie/afrowatch_api_movie_watched?userId=${profile.matchedUserId}`);
      const data = await response.json();
      console.log(data);
      setWatched(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchWatchLaterMovie = async () => {
    try {
      const response = await fetch(`https://myworklm.com/Afrowatch_admin/api/movie/afrowatch_api_movie_watched_later?userId=${profile.matchedUserId}`);
      const data = await response.json();
      console.log(data);
      setWatchLater(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchLikedData();
    fetchWacthedMovie();
    fetchWatchLaterMovie();
    setIsLoaded(true);
  }, []);

  // useEffect(() => {
  //   fetchWatchLaterMovie();
  // }, []); // Fetch watch later data separately

  const handleCardClick = (sMovies) => {
    setSelectedCard({ ...sMovies });
  };

  const handlePlayClick = () => {
    // props.watch(true);
    // console.log(props.watch)
    page('watch')
  };

  return (
    <div>
      <h2>Liked Movies</h2>
      {liked.length > 0 ? (
        liked.map((slide, index) => (
          <Card
            poster={baseUrl + slide.movie_folder + baseLink + slide.movie_image}
            alter={slide.movie_name}
            video={baseUrl + slide.movie_folder + baseLink + slide.movie_trailer}
            title={slide.movie_name}
            date={slide.movie_year_release}
            genre={slide.movie_genre}
            key={slide.id}
            read={() => handleCardClick(slide)}
          />
        ))
      ) : (
        <div>No liked movies found.</div>
      )}

      <h2>Watch Later</h2>
      {watchLater.length > 0 ? (
        watchLater.map((slide, index) => (
          <Card
            poster={baseUrl + slide.movie_folder + baseLink + slide.movie_image}
            alter={slide.movie_name}
            video={baseUrl + slide.movie_folder + baseLink + slide.movie_trailer_file}
            title={slide.movie_name}
            date={slide.movie_year_release}
            genre={slide.movie_genre}
            key={slide.id}
            read={() => handleCardClick(slide)}
          />
        ))
      ) : (
        <div>No movies in watch later list.</div>
      )}

     <h2>Watched Later</h2>
      {watched.length > 0 ? (
        watched.map((slide, index) => (
          <Card
            poster={baseUrl + slide.movie_folder + baseLink + slide.movie_image}
            alter={slide.movie_name}
            video={baseUrl + slide.movie_folder + baseLink + slide.movie_trailer_file}
            title={slide.movie_name}
            date={slide.movie_year_release}
            genre={slide.movie_genre}
            key={slide.id}
            read={() => handleCardClick(slide)}
          />
        ))
      ) : (
        <div>No movies in watch later list.</div>
      )}
      {selectedCard && (
          <Modal
            Class='Scard'
            identity = {selectedCard.movie_id}
            Poster={baseUrl + selectedCard.movie_folder + baseLink +selectedCard.movie_image}
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
    </div>
  );
};

export default History;
