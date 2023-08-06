import React from 'react';
import styled from 'styled-components';
import SLide from './styles'

const Slide = (props)=>{
    return (
      <SLide>
        <div className='SPcard'>
          <div>
            <img src={props.poster} alt={props.alter}/>
            <video controls>
              <source src="https://app.sipconsult.net/afrowatch/EXTRACTION%202%20_%20Official%20Trailer%20_%20Netflix.mp4" type="video/mp4"/>
              <source src={props.video} type="video/mp4"/>
            </video>
          </div>
        </div>
      </SLide>
    )
 }

 export default Slide;