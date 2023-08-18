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
  border-radius: 30px;
  .info {
    color: white;
    margin: 10px;
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
  border-radius: 20px;
  // width: 100%;
  height: 120px; /* You can adjust the height as needed */
  width: ${({ userInfo }) => (userInfo ? '80%' : '200px')};
  overflow: hidden;
  margin: 5%;
  max-width: 700px;
`;

const Image = styled.img`

width: ${({ userInfo }) => (userInfo ? '100%' : '200px')};
  // height: 100vh;
  object-fit: contain; 
  // max-width: 100px;
`;

const Video = styled.video`
width: ${({ userInfo }) => (userInfo ? '100%' : '200px')};
  // height: 100vh;
  object-fit: contain;
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
  const userInfo = JSON.parse(localStorage.getItem('loggedInStatus'));

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

  const handleVideoClick = (e) => {
    e.preventDefault();
    if(!userInfo){
      props.page("log In")
    }
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
        <Media onClick={props.read} userInfo={userInfo}>
          {hovered && (<div>
            <Video
              ref={videoRef}
              controls
              onTimeUpdate={handleVideoTimeUpdate}
              onClick={handleVideoClick}
              // onClick={props.read}
              autoPlay
            >
              <source src={props.video} type="video/mp4" />
            </Video>
              <button
                onClick={handleVideoClick}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '100%',
                  height: '100%',
                  opacity: 0, // Make the button invisible
                  cursor: 'pointer',
                  zIndex: 1, // Place the button above the video
                }}
              >
                {/* Content of the invisible button */}
              </button>
            </div>
          )}
          {!hovered && <Image src={props.poster} alt={props.alter} />}
          {!signedIn && videoTime >= 5 && hovered && !props.log && (
            <SignInOverlay>
              <p>Sign in to continue reading</p>
              <button onClick={handleSignIn}>Sign In</button>
            </SignInOverlay>
          )}
        </Media>
        <div>
          <h6 className='info'> title: {props.title} <br/> date: {props.date}</h6>
          {/* <p>{props.date}</p> */}
        </div>
      </ContentContainer>
    </SlideContainer>
  );
};
 export default Slide;