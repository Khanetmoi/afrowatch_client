import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import SLide from './styles'

// const Slide = (props)=>{
//     return (
//       <SLide>
//         <div className='SPcard'>
//           <div>
//             <img src={props.poster} alt={props.alter} onClick={props.read}/>
//             <video controls>
//               <source src={props.video} type="video/mp4"/>
//             </video>
//           </div>
//         </div>
//       </SLide>
//     )
//  }
const SlideContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const ContentContainer = styled.div`
  position: relative;

  .info {
    color: white;
    margin: 10px 33%;
  }
`;

// const Media = styled.div`
//   position: relative;
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
// `;

const Media = styled.div`
  position: relative;
  // width: 100%;
  height: 300px; /* You can adjust the height as needed */
  overflow: hidden;
  margin: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover; 
// max-width: 100px;
`;

const Video = styled.video`
  width: 100%;
  height: 500px;
  object-fit: cover;
  // max-width: 100px;
`;

const SignInOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  opacity: 0.9;
`;

const Slide = (props) => {
  const [hovered, setHovered] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [videoTime, setVideoTime] = useState(0);
  const videoRef = useRef(null);

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  const handleVideoTimeUpdate = () => {
    setVideoTime(videoRef.current.currentTime);
  };

  const handleSignIn = () => {
    // Implement your sign-in logic here
    props.page("log In")
    setSignedIn(true);
  };

  const handleVideoClick = () => {
    if (!signedIn && videoTime >= 5) {
      setSignedIn(true);
    }
  };

  return (
    <SlideContainer>
      <ContentContainer
        className={`SPcard${hovered ? ' hovered' : ''}`}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <Media onClick={props.read}>
          {hovered && (
            <Video
              ref={videoRef}
              controls
              onTimeUpdate={handleVideoTimeUpdate}
              onClick={handleVideoClick}
              autoPlay
            >
              <source src={props.video} type="video/mp4" />
            </Video>
          )}
          {!hovered && <Image src={props.poster} alt={props.alter} />}
          {!signedIn && videoTime >= 5 && hovered && (
            <SignInOverlay>
              <p>Sign in to continue reading</p>
              <button onClick={handleSignIn}>Sign In</button>
            </SignInOverlay>
          )}
        </Media>
        <div>
          <h6 className='info'> title: {props.title} date: {props.date}</h6>
          {/* <p>{props.date}</p> */}
        </div>
      </ContentContainer>
    </SlideContainer>
  );
};
 export default Slide;