import React, { useState, useEffect } from "react";
import Slide from "./Slide";
import styled from 'styled-components';

const SearchedContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const SearchPage = ({searchedMovie})=>{
  const [content, setContent] = useState([]);

  useEffect(() => {
    // Fetch movie data from your API endpoint using fetch
    fetch(`https://myworklm.com/Afrowatch_admin/api/movie/afrowatch_api_movie_search?search=${searchedMovie}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      setContent(data);
    })
    .catch(error => {
      console.error("Error fetching movie data:", error);
    });
  }, [searchedMovie]);

  const handleCardClick = (sMovies) =>{
    // setSelectedCard({...sMovies});
  };

  const baseUrlimage = "https://myworklm.com/Afrowatch_admin/server/movie_images/";
  const baseUrlTrailler = "https://myworklm.com/Afrowatch_admin/server/trailer_files/";

  return (
    <SearchedContent>
      {content.map(item => (
        <Slide
          key={item.movie_id}
          poster={baseUrlimage + item.movie_image}
          alter={item.movie_name}
          video={baseUrlTrailler + item.movie_trailler_file}
          title={item.movie_name}
          date={item.movie_year_release}
          read={() => handleCardClick(item)}
        />
      ))}
    </SearchedContent>
  )
}

export default SearchPage;