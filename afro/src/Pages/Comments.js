import React, { useState } from "react";
import styled from "styled-components";
import logo from '../Images/logo.png';
import { AiFillLike,AiFillDislike } from 'react-icons/ai';

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: hsla(278, 78%, 40%, 0.98);
  background-image: radial-gradient(650px circle at 0% 0%, hsl(219, 44%, 14%) 15%,
  hsl(219, 91%, 13%) 35%);
`;

const ShowComments = styled.div`
   position: relative;
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
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const sampleComments = [
  {
    id: 1,
    profileImage: logo,
    alter: "Profile 1",
    profileName: "User 1",
    comment: "This is a great post!",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2,
    profileImage: logo,
    alter: "Profile 2",
    profileName: "User 2",
    comment: "Thanks for sharing this.",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 3,
    profileImage: logo,
    alter: "Profile 2",
    profileName: "User 2",
    comment: "Thanks for sharing this.",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 4,
    profileImage: logo,
    alter: "Profile 2",
    profileName: "User 2",
    comment: "Thanks for sharing this.",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 5,
    profileImage: logo,
    alter: "Profile 2",
    profileName: "User 2",
    comment: "Thanks for sharing this.",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 6,
    profileImage: logo,
    alter: "Profile 2",
    profileName: "User 2",
    comment: "Thanks for sharing this.",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 7,
    profileImage: logo,
    alter: "Profile 2",
    profileName: "User 2",
    comment: "Thanks for sharing this.",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 8,
    profileImage: logo,
    alter: "Profile 2",
    profileName: "User 2",
    comment: "Thanks for sharing this.",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 9,
    profileImage: logo,
    alter: "Profile 2",
    profileName: "User 2",
    comment: "Thanks for sharing this.",
    likes: 0,
    dislikes: 0,
  },
  {
    id: 10,
    profileImage: logo,
    alter: "Profile 2",
    profileName: "User 2",
    comment: "Thanks for sharing this.",
    likes: 0,
    dislikes: 0,
  },
  // Add more sample comment objects as needed
];

// const Comments = (props) => {
//   const [newComment, setNewComment] = useState("");
//   const [comments, setComments] = useState(sampleComments);

//   const handleCommentChange = (event) => {
//     setNewComment(event.target.value);
//   };

//   const handleAddComment = () => {
//     if (newComment.trim() !== "") {
//       const newCommentObject = {
//         id: comments.length + 1,
//         profileImage: props.image,
//         alter: props.alter,
//         profileName: "Your Name",
//         comment: newComment,
//       };

//       setComments([...comments, newCommentObject]);
//       setNewComment("");
//     }
//   };

//   return (
//     <CommentContainer>
    //   <ShowComments>
    //     {comments.map((comment) => (
    //       <InComments key={comment.id}>
    //         <Commenter>
    //           <ProfileImage src={comment.profileImage} alt={comment.alter} />
    //         </Commenter>
    //         <div>
    //           <ProfileName>{comment.profileName}</ProfileName>
    //           <CommentText>{comment.comment}</CommentText>
    //         </div>
    //       </InComments>
    //     ))}
    //   </ShowComments>
//       <WriteComments>
//         <Commenter>
//           {/* <ProfileImage src={props.image} alt={props.alter} /> */}
//           <ProfileImage src={logo} alt={props.alter} />
//         </Commenter>
//         <div>
//           <CommentInput
//             type="text"
//             placeholder="Add a comment"
//             value={newComment}
//             onChange={handleCommentChange}
//           />
//           <button onClick={handleAddComment}>Add Comment</button>
//         </div>
//       </WriteComments>
//     </CommentContainer>
//   );
// };

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
    const [newComment, setNewComment] = useState("");
    const [comments, setComments] = useState(sampleComments);
  
    const handleCommentChange = (event) => {
      setNewComment(event.target.value);
    };
  
    const handleAddComment = () => {
      if (newComment.trim() !== "") {
        const newCommentObject = {
          id: comments.length + 1,
          profileImage: logo,
        //   profileImage: props.image,
          alter: props.alter,
          profileName: "Van",
        //   profileName: props.name,
          comment: newComment,
        };
  
        setComments([...comments, newCommentObject]);
        setNewComment("");
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
            comment.id === commentId ? { ...comment, likes: comment.likes + 1 } : comment
          )
        );
      };
    
      const handleDislike = (commentId) => {
        setComments((prevComments) =>
          prevComments.map((comment) =>
            comment.id === commentId ? { ...comment, dislikes: comment.dislikes + 1 } : comment
          )
        );
      };
    
      const handleReport = (commentId) => {
        // Implement your report logic here
      };
  
    return (
      <CommentContainer>
              <ShowComments>
        {comments.map((comment) => (
          <InComments key={comment.id}>
            <Commenter>
              <ProfileImage src={comment.profileImage} alt={comment.alter} />
            </Commenter>
            <div>
              <ProfileName>{comment.profileName}</ProfileName>
              <CommentText>{comment.comment}</CommentText>
              <div>
                <button onClick={() => handleLike(comment.id)}>
                  <AiFillLike/> ({formatNumber(comment.likes)})
                </button>
                <button onClick={() => handleDislike(comment.id)}>
                  <AiFillDislike/> ({formatNumber(comment.dislikes)})
                </button>
                <button onClick={() => handleReport(comment.id)}>Report</button>
              </div>
            </div>
          </InComments>
        ))}
      </ShowComments>
        <WriteComments>
          <Commenter>
            {/* <ProfileImage src={props.image} alt={props.alter} /> */}
            <ProfileImage src={logo} alt={props.alter} />
          </Commenter>
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
