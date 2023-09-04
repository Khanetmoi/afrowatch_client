import React, { useState, useEffect } from "react";
import Card from "../Card";

const History = () => {
  const profile = JSON.parse(localStorage.getItem('loggedInStatus'));
  const [isLoaded, setIsLoaded] = useState(false);
  const [liked, setLiked] = useState([]);
  const [watched, setWatched] = useState([]);
  const [watchLater, setWatchLater] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  const baseUrl = "https://myworklm.com/Afrowatch_admin/server/";
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
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    fetchWatchLaterMovie();
  }, []); // Fetch watch later data separately

  const handleCardClick = (sMovies) => {
    setSelectedCard({ ...sMovies });
  };

  return (
    <div>
      <h2>Liked Movies</h2>
      {liked.length > 0 ? (
        liked.map((slide, index) => (
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
    </div>
  );
};

export default History;
