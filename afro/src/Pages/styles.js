import styled from 'styled-components';

 const Slide = styled.div`
  flex: 0 0 calc(50% - 10px); /* Show 5 slides at a time with 10px spacing between them */
  margin: 0 5px;
  /* Add your slide styles here */
   .SPcard {
    div {
      display: flex;
      justify-content: center;
       img{
        width: 30%
       }
       video {
        width: 100%;
       }
    }
   }
`;

export const Navigation = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color: rgba(255, 128, 0, 1);
color: white;
width: 95%;
padding: 1rem 2.5%;
font-size: 20px;
   ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;

      li {
        margin: 0 2rem;
      }
   }
`;

export const LoginButton = styled.div`
  padding: 8px 16px;
  color: #fff;
  border: 2px solid white;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #FFC857;
  }
`;

export const Intro = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 2rem 0;

`;

export const AfroLogo =  styled.img`
width: 33%;
 h3 {
  font-size: 25px;
  @media (max-width: 768px) {
    margin: 5%;
    font-size: 15px;
  }
 }
`;

export const SearchBar = styled.input`
width: 40vw;
height: 5vh;
border-radius: 20%;

@media (max-width: 768px) {
  width: 80vw;
}
 
`;

export const SearchButton = styled.button`
height: 5vh;
border-radius: 50%;
`;
export const Category = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: no-wrap;
overflow-x: auto;
.left_arrow {
  // height: 50%;
}

    .Scard {
        // flex: 0 0 12%;
        width: 12%;
        // height: 12%;
        margin: 0 .5%;
        // background-color: #874C3C;
        color: white;
        border-radius: 20% 20% 0 0;

        @media (max-width: 768px) {
          flex: 0 0 50%
        }

        h2 {
           margin: 0;
           padding: 0;
           font-size: 25px;
           @media (max-width: 768px) {
            font-size: 15px;;
          }
        }

        h3 {
          margin: 0;
           padding: 0;
           font-size: 15px;
           @media (max-width: 768px) {
            font-size: 8px;;
          }
        }
      
     div {
         position:relative;
        img {
            width: 100%;
            height: 60%;
            border-radius: 20px;
            
        }

        button {
          position: absolute;
          top: 50%;
          left: 45%;
          width: 10%;
          aspect-ratio: 1;
          background-color: rgba(0,0,0, 0.5);
          color: white;
          border-radius: 50%;
        }
     }
   }
`;


export const MovieList = styled.div`
  width: 95%;
  margin: 0 2.5%;
  padding: 20px 0;

  section {
    margin: 20px 0;
    // border: 10px solid black;
    //  padding: 10px;
    .flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
       
      .flex1 {

      }
    }
  }

 
`;
export const Popular = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: no-wrap;
overflow-x: auto;
    .MovieCard {

      // flex: 0 0 12%;
        width: 12%;
        // height: 12%;
        margin: 0 .5%;
        // background-color: #874C3C;
        color: white;
        border-radius: 20% 20% 0 0;
        
        @media (max-width: 768px) {
          flex: 0 0 50%
        }

        h2 {
           margin: 0;
           padding: 0;
           font-size: 25px;
           @media (max-width: 768px) {
            font-size: 15px;
          }
        }

        h3 {
          margin: 0;
           padding: 0;
           font-size: 15px;
           @media (max-width: 768px) {
            font-size: 8px;
          }
        }
    
   div {
       position:relative;
      //  height: 70vh;
      img {
          width: 100%;
          height: 40vh;
          // height: 100%;
          
      }

      button {
        position: absolute;
        top: 50%;
        left: 45%;
        width: 10%;
        aspect-ratio: 1;
        background-color: rgba(0,0,0, 0.5);
        color: white;
        border-radius: 50%;
      }
    `;

    export const NewMovies = styled.div`
    display: flex;
justify-content: space-between;
flex-wrap: no-wrap;
overflow-x: auto;
    .MovieCard {

      // flex: 0 0 12%;
        width: 12%;
        // height: 12%;
        margin: 0 .5%;
        // background-color: #874C3C;
        color: white;
        border-radius: 20% 20% 0 0;
        
        @media (max-width: 768px) {
          flex: 0 0 50%
        }

        h2 {
           margin: 0;
           padding: 0;
           font-size: 25px;
           @media (max-width: 768px) {
            font-size: 20px;
          }
        }

        h3 {
          margin: 0;
           padding: 0;
           font-size: 15px;
           @media (max-width: 768px) {
            font-size: 10px;
          }
        }
    
   div {
       position:relative;
      //  height: 70vh;
      img {
          width: 100%;
          height: 40vh;
          // height: 100%;
          
      }

      button {
        position: absolute;
        top: 50%;
        left: 45%;
        width: 10%;
        aspect-ratio: 1;
        background-color: rgba(0,0,0, 0.5);
        color: white;
        border-radius: 50%;
      }
    `;

    export const FooterContainer = styled.footer`
  // background-color: #874C3C;
  background-color: rgba(255, 128, 0, 1);
  color: #fff;
  padding: 0px;
`;

export const FooterLinks = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0px;
  padding: 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Adjust the grid for smaller screens */
  }
`;

export const FooterLink = styled.li`
  a {
    color: #fff;
    text-decoration: none;
    font-size: 20px;
    margin: 0;

    &:hover {
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;




export const SlideshowContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow-x: auto;
  scroll-behavior: smooth;
`;




export const FeaturedMovies = styled.div`
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

export const NavItem = styled.li`
  /* Your styles for each navigation item here */
  display: inline-block;
  margin-right: 20px;

  /* You can add more styles as needed */
`;



export default Slide