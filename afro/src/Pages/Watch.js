import React, { useState, useRef, useEffect } from "react";
import styled from 'styled-components';
import Comments from './Comments';
import Questions from './Questions';

const WatchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Cinema = styled.div`
  width: 100%;
  height: 75vh;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TabsContainer = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin: 10px;
    padding: 10px 20px;
    cursor: pointer;
    border: 1px solid #ccc;
    // border-radius: 5px;
  }

  li.active {
    background-color: #4caf50;
    color: #fff;
    border-color: transparent;
  }
`;

const CommentsContainer = styled.div`
  width: 100%;
  // max-width: 800px;
  padding: 20px;
  // background-color: #f9f9f9;
  // border: 1px solid #ccc;
  // border-radius: 5px;
`;

const Watch = ({ selectedCard, identity }) => {
  const [activeTab, setActiveTab] = useState('comments');
  const identification = identity;
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const baseUrlMovie = "https://myworklm.com/Afrowatch_admin/server/movie_files/";

  // Check if selectedCard is null or undefined before accessing its properties
  if (!selectedCard) {
     return <div>No video selected</div>;
  }

  return (
    <WatchContainer>
      <Cinema>
        <video controls>
          <source
            src={baseUrlMovie + selectedCard.movie_file}
            type="video/mp4"
          />
          <source
            src={baseUrlMovie + selectedCard.movie_file} 
            type="video/ogg"/>
        </video>
      </Cinema>

      <TabsContainer>
        <li
          onClick={() => handleTabClick('comments')}
          className={activeTab === 'comments' ? 'active' : ''}
          style={{color: `white`}}
        >
          Comments
        </li>
        <li
          onClick={() => handleTabClick('questions')}
          className={activeTab === 'questions' ? 'active' : ''}
          style={{color: `white`}}
        >
          Questions
        </li>
        <li
          onClick={() => handleTabClick('episodes')}
          className={activeTab === 'episodes' ? 'active' : ''}
          style={{color: `white`}}
        >
          Episodes
        </li>
      </TabsContainer>

      {activeTab === 'comments' && (
        <CommentsContainer>
          {/* Render comments here */}
          <Comments movieId = {selectedCard.movie_id} userId = {identification}/>
        </CommentsContainer>
      )}

      {activeTab === 'questions' && (
        <CommentsContainer>
          {/* Render questions here */}
          <Questions movieId = {selectedCard.movie_id} userId = {identification}/>
        </CommentsContainer>
      )}

      {activeTab === 'episodes' && (
        <CommentsContainer>
          {/* Render episodes here */}
          <h2>Episodes</h2>
        </CommentsContainer>
      )}
    </WatchContainer>
  );
};

export default Watch;