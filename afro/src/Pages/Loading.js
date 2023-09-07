import React from 'react';
import styled, { keyframes } from 'styled-components';

// Create a keyframe animation for spinning
const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Styled components for the loading animation
const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const Spinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #007bff; /* Change the color as desired */
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: ${spinAnimation} 1s linear infinite;
`;

const LoadingAnimation = () => {
  return (
    <LoadingWrapper>
      <Spinner />
    </LoadingWrapper>
  );
};

export default LoadingAnimation;
