import React, { useState, useEffect } from "react";
import Slide from "./Slide";
import styled from 'styled-components';
import Slider from "react-slick";

const SearchedContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
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

const SearchPage = ({searchedMovie})=>{
    const [currentSlide, setCurrentSlide] = useState(0);
    var settings1 = {
        dots: true,
        customPaging: (i) => (
          <div
            style={{
              width: '10px',
              height: '10px',
              backgroundColor: i === currentSlide ? 'black' : 'white', // Change color based on current slide
              borderRadius: '50%', // Round the dots if you want
              transition: 'background-color 0.3s ease', // Add transition effect
            }}
          ></div>
        ),
        infinite: true,
        speed: 500,
        slidesToShow: 6,
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

  
  
  

  const baseUrlimage = "https://myworklm.com/Afrowatch_admin/server/movie_images/";
  const baseUrlTrailler = "https://myworklm.com/Afrowatch_admin/server/trailer_files/";

  return (
    <SearchedContent>
      {/* {content.map(item => (
        <Slide
          key={item.movie_id}
          poster={baseUrlimage + item.movie_image}
          alter={item.movie_name}
          video={baseUrlTrailler + item.movie_trailler_file}
          title={item.movie_name}
          date={item.movie_year_release}
          read={() => handleCardClick(item)}
        />
      ))} */}
      <div className='movieCategory'>
        {heartmarming?<FeaturedMovies>
        <h2 className="title">HEARTWARMING</h2>
        {
          heartmarming.length >1?<Slider {...settings1}> 
         {heartmarming?.map((item, index)=>{
          
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
        </Slider>:<div> {heartmarming.map((item, index)=>{
          
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
        
      </FeaturedMovies>:<div>fgfhfghfg</div>
      }
      {Thrilling?<FeaturedMovies>
        <h2 className="title">Thrilling</h2>
        {
          Thrilling.length >1?<Slider {...settings1}> 
         {Thrilling?.map((item, index)=>{
          
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
        </Slider>:<div> {heartmarming.map((item, index)=>{
          
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
        
      </FeaturedMovies>:<div>hgffff</div>
      }

{Humorouse?<FeaturedMovies>
        <h2 className="title">Humorouse</h2>
        {
          Humorouse.length >1?<Slider {...settings1}> 
         {Humorouse?.map((item, index)=>{
          
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
        </Slider>:<div> {heartmarming.map((item, index)=>{
          
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
      {Scary?<FeaturedMovies>
        <h2 className="title">SCARY</h2>
        {
          Scary.length >1?<Slider {...settings1}> 
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
      {Scary?<FeaturedMovies>
        <h2 className="title">SCARY</h2>
        {
          Scary.length >1?<Slider {...settings1}> 
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
      {Thoughtprovoking?<FeaturedMovies>
        <h2 className="title">Thoughtprovoking</h2>
        {
          Thoughtprovoking.length >1?<Slider {...settings1}> 
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

{Timeless?<FeaturedMovies>
        <h2 className="title">Timeless</h2>
        {
          Timeless.length >1?<Slider {...settings1}> 
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

{Mystical?<FeaturedMovies>
        <h2 className="title">Mystical</h2>
        {
          Mystical.length >1?<Slider {...settings1}> 
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

{Empowering?<FeaturedMovies>
        <h2 className="title">Empowering</h2>
        {
          Empowering.length >1?<Slider {...settings1}> 
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
      {Hopeful?<FeaturedMovies>
        <h2 className="title">Empowering</h2>
        {
          Hopeful.length >1?<Slider {...settings1}> 
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
      {Courageous?<FeaturedMovies>
        <h2 className="title">Empowering</h2>
        {
          Courageous.length >1?<Slider {...settings1}> 
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