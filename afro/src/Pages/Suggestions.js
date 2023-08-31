import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { AiFillHeart } from 'react-icons/ai';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "./Modal";
import Slide from "./Slide";

const Suggestion = styled.div`

`;

const Suggestions = ({selectedCard})=>{
    const [suggestion, setSuggestion] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const [suggestedCard, setSuggestedCard]= useState(null);

    const movieId = selectedCard.movie_id;
    const types_id = selectedCard.types_id;
    const category_id = selectedCard.category_id;
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
      }, []);

      const baseUrl = "https://myworklm.com/Afrowatch_admin/server/";
      const baseLink = "/";

      const handleCardClick = (sMovies) => {
        setSuggestedCard({...sMovies});
      };

      const handlePlayClick = () => {
        // page('watch')
        // watch(true);
        // console.log(watch)
      };

    return (
        <Suggestion>
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
      </Suggestion>
    )
}

export default Suggestions