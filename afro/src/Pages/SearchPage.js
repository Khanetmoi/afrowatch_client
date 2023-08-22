import React from "react"
import Slide from "./Slide";
import comingTo from '../Images/comingTo.jpg';
import styled from 'styled-components';


const SearchedContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`
const SearchPage = ({searchedMovie})=>{

    const handleCardClick = (sMovies) => {
   
        // setSelectedCard({...sMovies});
      };
    return (
    //     <Slide
    //     poster={baseUrlimage + slide.movie_image}
    //     alter={slide.movie_name}
    //     video={baseUrlTrailler + slide.movie_trailler_file}
    //     title={slide.movie_name}
    //     date={slide.movie_year_release}
    //     className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
    //     key={index}
    //     read={() => handleCardClick(slide)}
    //     page={props.page}
    //     log={props.logged}
    //   />
 <SearchedContent>
    <Slide
        poster={comingTo}
        alter={`hello`}
        video='changer.mp4'
        title='coming to america'
        date='2021'
        // className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
        key={1}
        read={() => handleCardClick()}
        // page={props.page}
        // log={props.logged}
      />
      <Slide
        poster={comingTo}
        alter={`hello`}
        video='changer.mp4'
        title='coming to america'
        date='2021'
        // className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
        key={1}
        read={() => handleCardClick()}
        // page={props.page}
        // log={props.logged}
      />
      <Slide
        poster={comingTo}
        alter={`hello`}
        video='changer.mp4'
        title='coming to america'
        date='2021'
        // className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
        key={1}
        read={() => handleCardClick()}
        // page={props.page}
        // log={props.logged}
      />
      <Slide
        poster={comingTo}
        alter={`hello`}
        video='changer.mp4'
        title='coming to america'
        date='2021'
        // className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
        key={1}
        read={() => handleCardClick()}
        // page={props.page}
        // log={props.logged}
      />

<Slide
        poster={comingTo}
        alter={`hello`}
        video='changer.mp4'
        title='coming to america'
        date='2021'
        // className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
        key={1}
        read={() => handleCardClick()}
        // page={props.page}
        // log={props.logged}
      />
      <Slide
        poster={comingTo}
        alter={`hello`}
        video='changer.mp4'
        title='coming to america'
        date='2021'
        // className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
        key={1}
        read={() => handleCardClick()}
        // page={props.page}
        // log={props.logged}
      />
      <Slide
        poster={comingTo}
        alter={`hello`}
        video='changer.mp4'
        title='coming to america'
        date='2021'
        // className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
        key={1}
        read={() => handleCardClick()}
        // page={props.page}
        // log={props.logged}
      />
      <Slide
        poster={comingTo}
        alter={`hello`}
        video='changer.mp4'
        title='coming to america'
        date='2021'
        // className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
        key={1}
        read={() => handleCardClick()}
        // page={props.page}
        // log={props.logged}
      />
      <Slide
        poster={comingTo}
        alter={`hello`}
        video='changer.mp4'
        title='coming to america'
        date='2021'
        // className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
        key={1}
        read={() => handleCardClick()}
        // page={props.page}
        // log={props.logged}
      />
      <Slide
        poster={comingTo}
        alter={`hello`}
        video='changer.mp4'
        title='coming to america'
        date='2021'
        // className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
        key={1}
        read={() => handleCardClick()}
        // page={props.page}
        // log={props.logged}
      />
      <Slide
        poster={comingTo}
        alter={`hello`}
        video='changer.mp4'
        title='coming to america'
        date='2021'
        // className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
        key={1}
        read={() => handleCardClick()}
        // page={props.page}
        // log={props.logged}
      />
      <Slide
        poster={comingTo}
        alter={`hello`}
        video='changer.mp4'
        title='coming to america'
        date='2021'
        // className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
        key={1}
        read={() => handleCardClick()}
        // page={props.page}
        // log={props.logged}
      />
      <Slide
        poster={comingTo}
        alter={`hello`}
        video='changer.mp4'
        title='coming to america'
        date='2021'
        // className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
        key={1}
        read={() => handleCardClick()}
        // page={props.page}
        // log={props.logged}
      />
      <Slide
        poster={comingTo}
        alter={`hello`}
        video='changer.mp4'
        title='coming to america'
        date='2021'
        // className={`slide ${index === currentSlide ? 'slick-center' : ''}`}
        key={1}
        read={() => handleCardClick()}
        // page={props.page}
        // log={props.logged}
      />
  </SearchedContent>
    // <h1>search</h1>
    )
}

export default SearchPage;