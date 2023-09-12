import React, { useState, useEffect } from "react";
import Slide from "./Slide";
import styled from 'styled-components';
import Slider from "react-slick";
import Modal from "./Modal";
import Card from "./Card";
import LoadingAnimation from "./Loading";


const Category = styled.div`

border-radius: 10px;
//background-color:  blue;
width: 100%;
    .Scard {
        color: white;
        @media (max-width: 768px) {
          flex: 0 0 50%
        }

        h2 {
           margin: 0;
           padding: 0;
           font-size: 25px;
           @media (max-width: 768px) {
            font-size: 15px;;
          }
        }

        h3 {
          margin: 0;
           padding: 0;
           font-size: 15px;
           @media (max-width: 768px) {
            font-size: 8px;;
          }
        }
      
     div {
         position:relative;
        img {
            width: 90%;
            border-radius: 20px;

            @media (max-width: 768px) {
              width: 90%;
            }
            
        }

        button {
          position: absolute;
          top: 50%;
          left: 45%;
          width: 10%;
          aspect-ratio: 1;
          background-color: rgba(0,0,0, 0.5);
          color: white;
          border-radius: 50%;
        }
     }
   }
`;
const SearchedContent = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// //   flex-wrap: wrap;
`;

const FeaturedMovies = styled.div`
  position: relative;
  width: 95%;
  margin: 2.5%;
   #left {
    position: relative;
    top 10%;
    left: 0%;
    width: 0; 
    height: 0; 
    border-left: 30px solid transparent;
    border-right: 30px solid rgba(255, 128, 0, 1);
      
    border-bottom: 30px solid transparent;
    border-top: 30px solid transparent;
    background-color: transparent;
    margin: 2rem;

    cursor: pointer;
    outline: none;
   }

   #right {
    position: absolute;
    top 0%;
    left: 95%;
    margin: 2rem;
    width: 0; 
    height: 0; 
    
    border-left: 30px solid rgba(255, 128, 0, 1);
    border-right: 50px solid transparent;
    cursor: pointer;
    outline: none;
    border-bottom: 30px solid transparent;
    border-top: 30px solid transparent;
    background-color: transparent;
   }

   #play {
    position: absolute;
    top: 87%;
    left: 45%;
    height: 30px;
    background-color: rgba(255, 128, 0, 1);
    color: white;
   }
`;

const SearchPage = ({searchedMovie, selectedCard, setSelectedCard, watch, page, currentPage })=>{
    const [currentSlide, setCurrentSlide] = useState(0);
    const [content, setContent] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [pastPage, setPastPage] = useState(currentPage);
    const handlePlayClick = () => {
        page('watch')
        watch(true);
        console.log(watch)
      };
    useEffect(() => {
      setIsLoaded(false)
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
        console.log('api content'+ content.length)
        setIsLoaded(true)
      })
      .catch(error => {
        console.error("Error fetching movie data:", error);
      });
    }, [searchedMovie]);

    isLoaded?console.log('api content'+ content):console.log('not yet')

    if (searchedMovie.length<1) {
        page(pastPage)
      }
    
    const handleCardClick = (sMovies) =>{
      setSelectedCard({...sMovies});
    };
  
    const getSlidesToShow = (dataLength) => {
        // Your logic here, for example:
        if (dataLength == 2) return 1;
        if (dataLength == 3) return dataLength-1;
        if (dataLength == 4) return dataLength-1;
        if (dataLength == 5) return dataLength-1;
        if (dataLength == 6) return dataLength-1;
        if (dataLength == 7) return dataLength-1;
        if (dataLength == 8) return 7;
        if (dataLength >= 9) return 8;
      };

    // var settings1 = {
    //     dots: true,
    //     customPaging: (i) => (
    //       <div
    //         style={{
    //           width: '5px',
    //           height: '5px',
    //           backgroundColor: i === currentSlide ? 'black' : 'white', // Change color based on current slide
    //           borderRadius: '50%', // Round the dots if you want
    //           transition: 'background-color 0.3s ease', // Add transition effect
    //           margin: '2px'
    //         }}
    //       ></div>
    //     ),
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: getSlidesToShow (heartmarming.length),
    //     slidesToScroll: 1,
    //     swipeToSlide: true,
    //     centerMode: true,
    //     // variableWidth: true,
    //     centerPadding: '0',
    //     afterChange: (current) => setCurrentSlide(current),
    //     responsive: [
    //       {
    //         breakpoint: 1024, // Screen width 1024px and above
    //         settings: {
    //           slidesToShow: 2,
    //         },
    //       },
    //       {
    //         breakpoint: 768, // Screen width 768px and above
    //         settings: {
    //           slidesToShow: 2,
    //           arrows: false,
    //         },
    //       },
    //       {
    //         breakpoint: 480, // Screen width 480px and above
    //         settings: {
    //           slidesToShow: 2,
    //           arrows: false,
    //         },
    //       },
    //     ],
    //   };

  const baseUrlimage = "https://myworklm.com/Afrowatch_admin/server/movie_images/";
  const baseUrlTrailler = "https://myworklm.com/Afrowatch_admin/server/trailer_files/";
  const baseUrl = "https://afrowatch-file.s3.amazonaws.com/";
  const baseLink = "/";

  return (
    <SearchedContent>
      <div className='movieCategory'>
      <div>
  {isLoaded?  ((content.length !=0? (
    
    Object.keys(content.type).map((typeKey) => (
      <div key={typeKey}>
        {Object.keys(content.type[typeKey].category).map((categoryK) => (
          <div>
            {content.type[typeKey].category[categoryK].movies > 9 ||
            (window.innerWidth <= 720 &&
              content.type[typeKey].category[categoryK].movies > 2) ? (
              <FeaturedMovies key={categoryK}>
                <h2 className="title">{categoryK}</h2>
                <Slider>
                  {content.type[typeKey].category[categoryK].movies.map(
                    (slide, index) => (
                      <Slide
                        poster={
                          baseUrl + slide.movie_path + baseLink + slide.movie_image
                        }
                        alter={slide.movie_name}
                        video={
                          baseUrl +
                          slide.movie_path +
                          baseLink +
                          slide.movie_trailler_file
                        }
                        title={slide.movie_name}
                        date={slide.movie_year_release}
                        genre={slide.movie_genre}
                        className={`slide ${
                          index === currentSlide ? 'slick-center' : ''
                        }`}
                        key={index}
                        read={() => handleCardClick(slide)}
                        page={page}
                        // log={logged}
                      />
                    )
                  )}
                </Slider>
              </FeaturedMovies>
            ) : (
              <Category>
                <h2 className="title">{categoryK}</h2>
                {content.type[typeKey].category[categoryK].movies.map(
                  (slide, index) => (
                    <Card
                      poster={
                        baseUrl + slide.movie_path + baseLink + slide.movie_image
                      }
                      alter={slide.movie_name}
                      video={
                        baseUrl +
                        slide.movie_path +
                        baseLink +
                        slide.movie_trailler_file
                      }
                      title={slide.movie_name}
                      date={slide.movie_year_release}
                      genre={slide.movie_genre}
                      className={`slide ${
                        index === currentSlide ? 'slick-center' : ''
                      }`}
                      key={index}
                      read={() => handleCardClick(slide)}
                      page={page}
                      // log={logged}
                    />
                  )
                )}
              </Category>
            )}
          </div>
        ))}
      </div>
    ))
  ):<h1 style={{color:`white`, display: `flex`, justifyContent:`center`, alignItems:`center`}}>No result found</h1>)) : (
    <LoadingAnimation/>
  )}
</div>

  </div> 
  {selectedCard && (
          <Modal
            Class='Scard'
            identity = {selectedCard.movie_id}
            Poster={baseUrl + selectedCard.movie_path + baseLink +selectedCard.movie_image}
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
            onPlayClick={handlePlayClick}
            // watching={true}
            closePop={() => setSelectedCard(null)} // Function to close the modal
          />
        )}
    </SearchedContent>
  )
}

export default SearchPage;