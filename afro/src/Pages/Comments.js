import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from '../Images/logo.png';
import { AiFillLike,AiFillDislike } from 'react-icons/ai';

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #18200e;
  // background-color: hsla(278, 78%, 40%, 0.98);
  // background-image: radial-gradient(650px circle at 0% 0%, hsl(219, 44%, 14%) 15%,
  hsl(219, 91%, 13%) 35%);
`;

const ShowComments = styled.div`
position: relative;
height: 50vh;
max-height: 50vh; /* Restrict the maximum height */
overflow-y: auto; /* Enable vertical scrolling */
  /* Add your styles for showing comments */
`;

const InComments = styled.div`
  display: flex;
  align-items: center;
  margin-block: 40px;
`;

const Commenter = styled.div`
  margin-right: 10px;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const ProfileName = styled.h4`
color: white;
  margin: 0;
`;

const CommentText = styled.p`
color: white;
  margin: 0;
`;

const WriteComments = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  position: sticky;
  // top: 1;
  left: 0;
`;

const CommentInput = styled.input`
  width: 100%;
  padding: 5px;
  // border: 1px solid #ccc;
  // border-radius: 5px;
`;

// ... (previous imports and styled-components definitions)
const formatNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return num;
};

const Comments = (props) => {
  const storedUserId = JSON.parse(localStorage.getItem('loggedInStatus'));

  // Code For API POST
  const [newComment, setNewComment] = useState("");

  //Movie ID
  const movie_id = props.movieId;

  //const user_id = props.userId;
  const user_id = storedUserId.matchedUserId;

  //console.log('localValue = '+ storedUserId.matchedUserId);

  const [commentCount, setCommentCount] = useState(0);

  // API Link comment
  const api_link_comment_get = 'https://myworklm.com/Afrowatch_admin/api/comments/afrowatch_api_comment_get.php?movie_id='+movie_id;
  const api_link_comment_post = 'https://myworklm.com/Afrowatch_admin/api/comments/afrowatch_api_comment_post.php';

  // API Link comment get
  const api_link_user = 'https://myworklm.com/Afrowatch_admin/api/user/afrowatch_api_user_get.php?user_id='+user_id;

  // Code For API GET
  const [comments, setComments] = useState([]);
  useEffect(() => {
    async function fetchComments() {
      try {
        const response = await fetch(api_link_comment_get);
        const data = await response.json();
        setComments(data); // Update the state with fetched comments
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    } 
    fetchComments();
  }, [commentCount]);

  // user get All info
  const [informations, setInformation] = useState([]);
  useEffect(() => {
    async function fetchInformation() {
      try {
        const response = await fetch(api_link_user);
        const data = await response.json();
        setInformation(data); // Update the state with fetched users
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    }
    fetchInformation();
  }, []);

  

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };
  
  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      const newCommentObject = {
        user_id: user_id,    // Replace with the actual user ID
        movie_id: movie_id,  // Replace with the actual movie ID
        comment: newComment, // Replace with the actual comment text
      };

      try {
        fetch(api_link_comment_post, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newCommentObject), // Convert the object to a JSON string
        })
        .then((response) => response.json())
        .then((data) => {
          console.log('API response:', data);
          setCommentCount(commentCount + 1);
        })
        .catch((error) => {
          console.error('Error adding comment:', error);
        });
      } catch (error) {
        console.error('Error adding comment:', error);
      }
    }
  };
  
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddComment();
    }
  };

  const handleLike = (commentId) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.commentsId === commentId
          ? {
              ...comment,
              commentsLikes: comment.isLiked
                ? parseInt(comment.commentsLikes) - 1
                : parseInt(comment.commentsLikes) + 1,
              isLiked: !comment.isLiked,
            }
          : comment
      )
    );
  };
  
  const handleDislike = (commentId) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.commentsId === commentId
          ? {
              ...comment,
              commentsDislikes: comment.isDisliked
                ? parseInt(comment.commentsDislikes) - 1
                : parseInt(comment.commentsDislikes) + 1,
              isDisliked: !comment.isDisliked,
            }
          : comment
      )
    );
  };
    
  const handleReport = (commentId) => {
    // Implement your report logic here
  };

  const photo_link = "https://myworklm.com/Afrowatch_admin/profiles/user/";
  
  return (
    <CommentContainer>
      <ShowComments>
        {
          comments.length > 0 ? (
            comments.map(
              (comment, index) => (
                <InComments key={comment.commentsId}>
                  <Commenter>
                    <ProfileImage src={photo_link + comment.userImage} alt={comment.userFirstname} />
                  </Commenter>

                  <div>
                    <ProfileName>{comment.userFirstname} {comment.userLastname}</ProfileName>
                    <CommentText>{comment.commentsContents}</CommentText>

                    <div>
                      <button
                        onClick={() => handleLike(comment.commentsId)}
                        disabled={comment.isDisliked}
                      >
                        <AiFillLike /> ({formatNumber(comment.commentsLikes)})
                      </button>

                      <button
                        onClick={() => handleDislike(comment.commentsId)}
                        disabled={comment.isLiked}
                      >
                        <AiFillDislike /> ({formatNumber(comment.commentsDislikes)})
                      </button>

                      <button onClick={() => handleReport(comment.commentsId)}>Report</button>
                    </div>
                  </div>
                </InComments>
              )
            )
          ) : (
            <h1 style={{ textAlign: 'center', fontSize: '24px', color: 'white' }}>No comments available.</h1>
          )
        }
      </ShowComments>

      <WriteComments>
        {
          informations.map(
            (user, index) => (
              <Commenter>
                <ProfileImage src={photo_link + user.userImage} alt={props.alter} />
              </Commenter>
            )
          )
        }

        <div>
          <CommentInput
            type="text"
            placeholder="Add a comment"
            value={newComment}
            onChange={handleCommentChange}
            onKeyDown={handleKeyPress} // Trigger handleAddComment on Enter key
          />
        </div>
      </WriteComments>
    </CommentContainer>
  );
};
  
export default Comments;
