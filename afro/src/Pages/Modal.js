
import React from "react";

const Modal = (props)=>{
    
    const viewMovie = {
      video: props.movie,
      comments: props.comments,
      episodes: props.episodes
    }
    const handlePlayClick = () => {
      props.onPlayClick(viewMovie);
    };
    return (
      
        <div className='show-expand'>
        
        <div className='show-content'>
          <i class="show-close fas fa-times" onClick={props.closePop} >X</i>
          <div className='show-poster'>
            <span className='show-poster-bg' onClick={handlePlayClick}>
              <img src={props.Poster !== 'N/A' ? props.Poster : 'https://via.placeholder.com/163x240/111217/FFFFFF/?text=No%20Image'} alt={props.Title} />
            </span>
            <span className='show-poster-main'>
              <img src={props.Poster !== 'N/A' ? props.Poster : 'https://via.placeholder.com/163x240/111217/FFFFFF/?text=No%20Image'} alt={props.Title} />
            </span>
          </div>
          
          <div className='show-detail'>
            <h2>{props.Title}</h2>
            <ul className="show-tags">
              <li className="show-rated">{props.Country}</li>
              <li className="show-rated">{props.Year}</li>
              <li className="show-year">{props.Rated}</li>
              <li className="show-year">{props.Genre}</li>
            </ul>
            <div className="show-plot">
              <p>{props.Plot}</p>
            </div>
            
            <div class="show-credits">
              <p><strong>Production:</strong> {props.Production || 'N/A '}</p>
              <p><strong>Runtime:</strong> {props.Runtime || 'N/A '} minutes</p>
              <p><strong>Rating:</strong> {props.imdbRating}</p>
              <p><strong>Director:</strong> {props.Director}</p>
              <p><strong>Actors:</strong> {props.Actors}</p>
              {/* <p><strong>BoxOffice:</strong> {props.BoxOffice || 'N/A '}</p> */}
            </div>
          </div>
          {/* <button onClick={handlePlayClick}>Play</button> */}
        </div>
        
      </div>
    )
  }


  export default Modal;