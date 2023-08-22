import React, { useState, useEffect } from "react";
import Slide from "./Slide";
import styled from 'styled-components';
import Slider from "react-slick";
import Modal from "./Modal";

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

const SearchPage = ({searchedMovie, selectedCard, setSelectedCard, watch})=>{
    const [currentSlide, setCurrentSlide] = useState(0);
    const [content, setContent] = useState([]);
    
    const handlePlayClick = () => {
        watch(true);
        console.log(watch)
      };
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
  
    const getSlidesToShow = (dataLength) => {
        // Your logic here, for example:
        if (dataLength == 2) return 1;
        if (dataLength == 3) return dataLength-1;
        if (dataLength == 4) return dataLength-1;
        if (dataLength == 5) return dataLength-1;
        if (dataLength == 6) return dataLength-1;
        if (dataLength == 7) return dataLength-1;
        if (dataLength == 8) return 8;
        if (dataLength >= 9) return 8;
      };
    
    const heartmarming = content?.filter((slide) => slide.movie_category === 'Heartmarming');
    const Thrilling = content?.filter((slide) => slide.movie_category === 'Thrilling');
    const Humorouse = content?.filter((slide) => slide.movie_category === 'Humorouse');
    const Scary = content?.filter((slide) => slide.movie_category === 'Scary');
    const Thoughtprovoking= content?.filter((slide) => slide.movie_category === 'Thoughtprovoking');
    const Timeless= content?.filter((slide) => slide.movie_category === 'Timeless');
    const Mystical= content?.filter((slide) => slide.movie_category === 'Mystical');
    const Empowering= content?.filter((slide) => slide.movie_category === 'Empowering');
    const Hopeful= content?.filter((slide) => slide.movie_category === 'Hopeful');
    const Courageous= content?.filter((slide) => slide.movie_category === 'Courageous');

    var settings1 = {
        dots: true,
        customPaging: (i) => (
          <div
            style={{
              width: '5px',
              height: '5px',
              backgroundColor: i === currentSlide ? 'black' : 'white', // Change color based on current slide
              borderRadius: '50%', // Round the dots if you want
              transition: 'background-color 0.3s ease', // Add transition effect
              margin: '2px'
            }}
          ></div>
        ),
        infinite: true,
        speed: 500,
        slidesToShow: getSlidesToShow (heartmarming.length),
        slidesToScroll: 1,
        swipeToSlide: true,
        centerMode: true,
        // variableWidth: true,
        centerPadding: '0',
        afterChange: (current) => setCurrentSlide(current),
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

      var settings2 = {
        dots: true,
        customPaging: (i) => (
          <div
            style={{
              width: '5px',
              height: '5px',
              backgroundColor: i === currentSlide ? 'black' : 'white', // Change color based on current slide
              borderRadius: '50%', // Round the dots if you want
              transition: 'background-color 0.3s ease', // Add transition effect
            }}
          ></div>
        ),
        infinite: true,
        speed: 500,
        slidesToShow: getSlidesToShow (Thrilling.length),
        slidesToScroll: 1,
        swipeToSlide: true,
        centerMode: true,
        // variableWidth: true,
        centerPadding: '0',
        afterChange: (current) => setCurrentSlide(current),
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

      var settings3 = {
        dots: true,
        customPaging: (i) => (
          <div
            style={{
              width: '5px',
              height: '5px',
              backgroundColor: i === currentSlide ? 'black' : 'white', // Change color based on current slide
              borderRadius: '50%', // Round the dots if you want
              transition: 'background-color 0.3s ease', // Add transition effect
            }}
          ></div>
        ),
        infinite: true,
        speed: 500,
        slidesToShow: getSlidesToShow (Humorouse.length),
        slidesToScroll: 1,
        swipeToSlide: true,
        centerMode: true,
        // variableWidth: true,
        centerPadding: '0',
        afterChange: (current) => setCurrentSlide(current),
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

      var settings4 = {
        dots: true,
        customPaging: (i) => (
          <div
            style={{
              width: '5px',
              height: '5px',
              backgroundColor: i === currentSlide ? 'black' : 'white', // Change color based on current slide
              borderRadius: '50%', // Round the dots if you want
              transition: 'background-color 0.3s ease', // Add transition effect
            }}
          ></div>
        ),
        infinite: true,
        speed: 500,
        slidesToShow: getSlidesToShow (Scary.length),
        slidesToScroll: 1,
        swipeToSlide: true,
        centerMode: true,
        // variableWidth: true,
        centerPadding: '0',
        afterChange: (current) => setCurrentSlide(current),
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

      var settings5 = {
        dots: true,
        customPaging: (i) => (
          <div
            style={{
              width: '5px',
              height: '5px',
              backgroundColor: i === currentSlide ? 'black' : 'white', // Change color based on current slide
              borderRadius: '50%', // Round the dots if you want
              transition: 'background-color 0.3s ease', // Add transition effect
            }}
          ></div>
        ),
        infinite: true,
        speed: 500,
        slidesToShow: getSlidesToShow (Thoughtprovoking.length),
        slidesToScroll: 1,
        swipeToSlide: true,
        centerMode: true,
        // variableWidth: true,
        centerPadding: '0',
        afterChange: (current) => setCurrentSlide(current),
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

      var settings6 = {
        dots: true,
        customPaging: (i) => (
          <div
            style={{
              width: '5px',
              height: '5px',
              backgroundColor: i === currentSlide ? 'black' : 'white', // Change color based on current slide
              borderRadius: '50%', // Round the dots if you want
              transition: 'background-color 0.3s ease', // Add transition effect
            }}
          ></div>
        ),
        infinite: true,
        speed: 500,
        slidesToShow: getSlidesToShow (Timeless.length),
        slidesToScroll: 1,
        swipeToSlide: true,
        centerMode: true,
        // variableWidth: true,
        centerPadding: '0',
        afterChange: (current) => setCurrentSlide(current),
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

      var settings7 = {
        dots: true,
        customPaging: (i) => (
          <div
            style={{
              width: '5px',
              height: '5px',
              backgroundColor: i === currentSlide ? 'black' : 'white', // Change color based on current slide
              borderRadius: '50%', // Round the dots if you want
              transition: 'background-color 0.3s ease', // Add transition effect
            }}
          ></div>
        ),
        infinite: true,
        speed: 500,
        slidesToShow: getSlidesToShow (Mystical.length),
        slidesToScroll: 1,
        swipeToSlide: true,
        centerMode: true,
        // variableWidth: true,
        centerPadding: '0',
        afterChange: (current) => setCurrentSlide(current),
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

      var settings8 = {
        dots: true,
        customPaging: (i) => (
          <div
            style={{
              width: '5px',
              height: '5px',
              backgroundColor: i === currentSlide ? 'black' : 'white', // Change color based on current slide
              borderRadius: '50%', // Round the dots if you want
              transition: 'background-color 0.3s ease', // Add transition effect
            }}
          ></div>
        ),
        infinite: true,
        speed: 500,
        slidesToShow: getSlidesToShow (Hopeful.length),
        slidesToScroll: 1,
        swipeToSlide: true,
        centerMode: true,
        // variableWidth: true,
        centerPadding: '0',
        afterChange: (current) => setCurrentSlide(current),
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

      var settings9 = {
        dots: true,
        customPaging: (i) => (
          <div
            style={{
              width: '5px',
              height: '5px',
              backgroundColor: i === currentSlide ? 'black' : 'white', // Change color based on current slide
              borderRadius: '50%', // Round the dots if you want
              transition: 'background-color 0.3s ease', // Add transition effect
            }}
          ></div>
        ),
        infinite: true,
        speed: 500,
        slidesToShow: getSlidesToShow (Empowering.length),
        slidesToScroll: 1,
        swipeToSlide: true,
        centerMode: true,
        // variableWidth: true,
        centerPadding: '0',
        afterChange: (current) => setCurrentSlide(current),
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

      var settings10 = {
        dots: true,
        customPaging: (i) => (
          <div
            style={{
              width: '5px',
              height: '5px',
              backgroundColor: i === currentSlide ? 'black' : 'white', // Change color based on current slide
              borderRadius: '50%', // Round the dots if you want
              transition: 'background-color 0.3s ease', // Add transition effect
            }}
          ></div>
        ),
        infinite: true,
        speed: 500,
        slidesToShow: getSlidesToShow (Courageous.length),
        slidesToScroll: 1,
        swipeToSlide: true,
        centerMode: true,
        // variableWidth: true,
        centerPadding: '0',
        afterChange: (current) => setCurrentSlide(current),
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

      var settings11 = {
        dots: true,
        customPaging: (i) => (
          <div
            style={{
              width: '5px',
              height: '5px',
              backgroundColor: i === currentSlide ? 'black' : 'white', // Change color based on current slide
              borderRadius: '50%', // Round the dots if you want
              transition: 'background-color 0.3s ease', // Add transition effect
            }}
          ></div>
        ),
        infinite: true,
        speed: 500,
        slidesToShow: getSlidesToShow (Courageous.length),
        slidesToScroll: 1,
        swipeToSlide: true,
        centerMode: true,
        // variableWidth: true,
        centerPadding: '0',
        afterChange: (current) => setCurrentSlide(current),
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


  
  
  

  const baseUrlimage = "https://myworklm.com/Afrowatch_admin/server/movie_images/";
  const baseUrlTrailler = "https://myworklm.com/Afrowatch_admin/server/trailer_files/";

  return (
    <SearchedContent>
      <div className='movieCategory'>
      {heartmarming.length > 0 ? (
  <FeaturedMovies>
    <h2 className="title">HEARTWARMING</h2>
    {heartmarming.length > 1 ? (
      <Slider {...settings1}>
        {heartmarming?.map((item, index) => (
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
      </Slider>
    ) : (
      <div>
        {heartmarming.map((item, index) => (
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
      </div>
    )}
  </FeaturedMovies>
) : (
  <div></div>
)}

{Thrilling.length > 0 ? (
  <FeaturedMovies>
    <h2 className="title">Thrilling</h2>
    {Thrilling.length > 1 ? (
      <Slider {...settings2}>
        {Thrilling.map((item, index) => (
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
      </Slider>
    ) : (
      <div>
        {Thrilling.map((item, index) => (
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
      </div>
    )}
  </FeaturedMovies>
) : (
  <div></div>
)}


{Humorouse.length > 0 ? (
  <FeaturedMovies>
    <h2 className="title">Humorouse</h2>
    {Humorouse.length > 1 ? (
      <Slider {...settings3}>
        {Humorouse.map((item, index) => (
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
      </Slider>
    ) : (
      <div>
        {Humorouse.map((item, index) => (
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
      </div>
    )}
  </FeaturedMovies>
) : (
  <div></div>
)}

      {Scary.length > 0 ?<FeaturedMovies>
        <h2 className="title">SCARY</h2>
        {
          Scary.length >1?<Slider {...settings4}> 
         {Scary?.map((item, index)=>{
          
          return(
            <Slide
          key={item.movie_id}
          poster={baseUrlimage + item.movie_image}
          alter={item.movie_name}
          video={baseUrlTrailler + item.movie_trailler_file}
          title={item.movie_name}
          date={item.movie_year_release}
          read={() => handleCardClick(item)}
        />
            )
          })} 
        </Slider>:<div> {Scary.map((item, index)=>{
          
          return(
            <Slide
          key={item.movie_id}
          poster={baseUrlimage + item.movie_image}
          alter={item.movie_name}
          video={baseUrlTrailler + item.movie_trailler_file}
          title={item.movie_name}
          date={item.movie_year_release}
          read={() => handleCardClick(item)}
        />
            )
          })} 
          </div>
        }
        
      </FeaturedMovies>:<div></div>
      }
      
      {Thoughtprovoking.length > 0 ?<FeaturedMovies>
        <h2 className="title">Thoughtprovoking</h2>
        {
          Thoughtprovoking.length >1?<Slider {...settings6}> 
         {Thoughtprovoking?.map((item, index)=>{
          
          return(
            <Slide
          key={item.movie_id}
          poster={baseUrlimage + item.movie_image}
          alter={item.movie_name}
          video={baseUrlTrailler + item.movie_trailler_file}
          title={item.movie_name}
          date={item.movie_year_release}
          read={() => handleCardClick(item)}
        />
            )
          })} 
        </Slider>:<div> {Thoughtprovoking.map((item, index)=>{
          
          return(
            <Slide
          key={item.movie_id}
          poster={baseUrlimage + item.movie_image}
          alter={item.movie_name}
          video={baseUrlTrailler + item.movie_trailler_file}
          title={item.movie_name}
          date={item.movie_year_release}
          read={() => handleCardClick(item)}
        />
            )
          })} 
          </div>
        }
        
      </FeaturedMovies>:<div></div>
      }

{Timeless.length > 0 ?<FeaturedMovies>
        <h2 className="title">Timeless</h2>
        {
          Timeless.length >1?<Slider {...settings7}> 
         {Timeless?.map((item, index)=>{
          
          return(
            <Slide
          key={item.movie_id}
          poster={baseUrlimage + item.movie_image}
          alter={item.movie_name}
          video={baseUrlTrailler + item.movie_trailler_file}
          title={item.movie_name}
          date={item.movie_year_release}
          read={() => handleCardClick(item)}
        />
            )
          })} 
        </Slider>:<div> {Thoughtprovoking.map((item, index)=>{
          
          return(
            <Slide
          key={item.movie_id}
          poster={baseUrlimage + item.movie_image}
          alter={item.movie_name}
          video={baseUrlTrailler + item.movie_trailler_file}
          title={item.movie_name}
          date={item.movie_year_release}
          read={() => handleCardClick(item)}
        />
            )
          })} 
          </div>
        }
        
      </FeaturedMovies>:<div></div>
      }

{Mystical.length > 0 ?<FeaturedMovies>
        <h2 className="title">Mystical</h2>
        {
          Mystical.length >1?<Slider {...settings8}> 
         {Mystical?.map((item, index)=>{
          
          return(
            <Slide
          key={item.movie_id}
          poster={baseUrlimage + item.movie_image}
          alter={item.movie_name}
          video={baseUrlTrailler + item.movie_trailler_file}
          title={item.movie_name}
          date={item.movie_year_release}
          read={() => handleCardClick(item)}
        />
            )
          })} 
        </Slider>:<div> {Thoughtprovoking.map((item, index)=>{
          
          return(
            <Slide
          key={item.movie_id}
          poster={baseUrlimage + item.movie_image}
          alter={item.movie_name}
          video={baseUrlTrailler + item.movie_trailler_file}
          title={item.movie_name}
          date={item.movie_year_release}
          read={() => handleCardClick(item)}
        />
            )
          })} 
          </div>
        }
        
      </FeaturedMovies>:<div></div>
      }

{Empowering.length > 0 ?<FeaturedMovies>
        <h2 className="title">Empowering</h2>
        {
          Empowering.length >1?<Slider {...settings9}> 
         {Empowering?.map((item, index)=>{
          
          return(
            <Slide
          key={item.movie_id}
          poster={baseUrlimage + item.movie_image}
          alter={item.movie_name}
          video={baseUrlTrailler + item.movie_trailler_file}
          title={item.movie_name}
          date={item.movie_year_release}
          read={() => handleCardClick(item)}
        />
            )
          })} 
        </Slider>:<div> {Empowering.map((item, index)=>{
          
          return(
            <Slide
          key={item.movie_id}
          poster={baseUrlimage + item.movie_image}
          alter={item.movie_name}
          video={baseUrlTrailler + item.movie_trailler_file}
          title={item.movie_name}
          date={item.movie_year_release}
          read={() => handleCardClick(item)}
        />
            )
          })} 
          </div>
        }
        
      </FeaturedMovies>:<div></div>
      }
      {Hopeful.length > 0 ?<FeaturedMovies>
        <h2 className="title">Empowering</h2>
        {
          Hopeful.length >1?<Slider {...settings10}> 
         {Hopeful?.map((item, index)=>{
          
          return(
            <Slide
          key={item.movie_id}
          poster={baseUrlimage + item.movie_image}
          alter={item.movie_name}
          video={baseUrlTrailler + item.movie_trailler_file}
          title={item.movie_name}
          date={item.movie_year_release}
          read={() => handleCardClick(item)}
        />
            )
          })} 
        </Slider>:<div> {Hopeful.map((item, index)=>{
          
          return(
            <Slide
          key={item.movie_id}
          poster={baseUrlimage + item.movie_image}
          alter={item.movie_name}
          video={baseUrlTrailler + item.movie_trailler_file}
          title={item.movie_name}
          date={item.movie_year_release}
          read={() => handleCardClick(item)}
        />
            )
          })} 
          </div>
        }
        
      </FeaturedMovies>:<div></div>
      }
      {Courageous.length > 0 ?<FeaturedMovies>
        <h2 className="title">Courageous</h2>
        {
          Courageous.length >1?<Slider {...settings11}> 
         {Courageous?.map((item, index)=>{
          
          return(
            <Slide
          key={item.movie_id}
          poster={baseUrlimage + item.movie_image}
          alter={item.movie_name}
          video={baseUrlTrailler + item.movie_trailler_file}
          title={item.movie_name}
          date={item.movie_year_release}
          read={() => handleCardClick(item)}
        />
            )
          })} 
        </Slider>:<div> {Courageous.map((item, index)=>{
          
          return(
            <Slide
          key={item.movie_id}
          poster={baseUrlimage + item.movie_image}
          alter={item.movie_name}
          video={baseUrlTrailler + item.movie_trailler_file}
          title={item.movie_name}
          date={item.movie_year_release}
          read={() => handleCardClick(item)}
        />
            )
          })} 
          </div>
        }
        
      </FeaturedMovies>:<div></div>
      }
      {selectedCard && (
          <Modal
            Class='Scard'
            Poster={baseUrlimage +selectedCard.movie_image}
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
      
      {/* <FeaturedMovies>
        <h2 className="title">COURAGEOUS</h2>
        {
          featuresCard.length >1?<Slider {...settings1}> 
         {featuresCard?.map((slide, index)=>{
      
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index}
              read={() => handleCardClick(slide)}
              log = {props.logged}
              page = { props.page}
            /> 
            )
          })} 
        </Slider>:<div> {featuredCard.map((slide, index)=>{
   
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index*2}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
          </div>
        }
        
      </FeaturedMovies>
      <FeaturedMovies>
        <h2 className="title">MYSTERIOUS</h2>
        {
          featuresCard.length >1?<Slider {...settings1}> 
         {featuresCard?.map((slide, index)=>{

          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
        </Slider>:<div> {featuredCard.map((slide, index)=>{
    
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index*2}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
          </div>
        }
        
      </FeaturedMovies>
      <FeaturedMovies>
        <h2 className="title">FASCINATING</h2>
        {
          featuresCard.length >1?<Slider {...settings1}> 
         {featuresCard?.map((slide, index)=>{
          
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
        </Slider>:<div> {featuredCard.map((slide, index)=>{
          
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index*2}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
          </div>
        }
        
      </FeaturedMovies>
      <FeaturedMovies>
        <h2 className="title">GLAMOROUSE</h2>
        {
          featuresCard.length >1?<Slider {...settings1}> 
         {featuresCard?.map((slide, index)=>{
         
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
        </Slider>:<div> {featuredCard.map((slide, index)=>{
          console.log("slide", slide)
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index*2}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
          </div>
        }
        
      </FeaturedMovies>
      <FeaturedMovies>
        <h2 className="title">GLAMOROUSE</h2>
        {
          featuresCard.length >1?<Slider {...settings1}> 
         {featuresCard?.map((slide, index)=>{
         
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
        </Slider>:<div> {featuredCard.map((slide, index)=>{
          console.log("slide", slide)
          return(
            <Slide
              poster={baseUrlimage + slide.movie_image}
              alter={slide.movie_name}
              video={baseUrlTrailler + slide.movie_trailler_file}
              title = {slide.movie_name}
              date = {slide.movie_year_release}
              className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
              key={index*2}
              read={() => handleCardClick(slide)}
              page = { props.page}
              log = {props.logged}
            /> 
            )
          })} 
          </div>
        }
        
      </FeaturedMovies> */}
              </div>
    </SearchedContent>
  )
}

export default SearchPage;