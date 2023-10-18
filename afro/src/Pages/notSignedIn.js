import React, { useState } from 'react';
import styled from 'styled-components';
import logo from './../Images/logo.png'


const First = styled.div`
background-image: url('https://s3.youthkiawaaz.com/wp-content/uploads/2014/01/06102816/2014-movie-releases-1024x731.jpg');
img {
    width: 300px;
}

.kuber {
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;

  button {
        background-color: red;
        color: white;
        border-radius: 10px;
        width: 100px;
        height: 50px;
        margin:  14px;
        border: none;
    }
} 
  
`
const FirstDiv = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh; 

  .sign {
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
        background-color: red;
        color: white;
        border-radius: 10px;
        width: 100px;
        height: 50px;
        margin:  14px;
        border: none;
    }
  }
  @media (max-width: 768px) {
    justify-coontent: center;
    align-items: center;
    flex-direction: column;
    padding: 0 15px;
  }
`;

const SecondDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: white;
background-color: black;
height: 90vh;
@media (max-width: 768px) {
  flex-direction: column;
  padding: 0 15px;
}

imVid {
  img {
    width: 90%;
  }
  
}
`

const ThirdDiv = styled.div`
background-color: black;
color: white;
height: 90vh;
display: flex;
flex-direction: row-reverse;
justify-content: center;
align-items: center;
@media (max-width: 768px) {
  flex-direction: column;
  padding: 0 15px; 
}
`;

const Cane = styled.div`
display: flex;
justify-content: center;
color: white;
border: 1px solid white;
border-radius: 5px;
height: 90px;
width: 40vw;

`
const Garden = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`;
const FourthDiv = styled.div`
color: white;
height: 90vh;
background-color: black;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0 50% 0 20%;
@media (max-width: 768px) {
  flex-direction: column; 
  padding: 0 15px;
}
`;

const FifthDiv = styled.div`
background-color: black;
color: white;
display: flex;
justify-content: center;
align-items: center;
@media (max-width: 768px) {
  flex-direction: column;
  padding: 0 15px;
}
`;

const SixthDiv = styled.div`
background-color: black;
color: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
.card {
    background-color: #414141;
    margin: 20px 25%;
}
.kuber {
    background-color: #414141;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
} 

.toggle-button {
    cursor: pointer;
    transition: transform 0.3s ease;
  }

.rotated {
    transform: rotate(360deg); 
  }

  .drop-down-p {
    padding: 0 10px;
    min-height: 0;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }

  .visible {
    max-height: 1000px;
  }

  .sign {
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
        background-color: red;
        color: white;
        border-radius: 10px;
        width: 100px;
        height: 50px;
        margin:  14px;
        border: none;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 15px;
       .card {
        margin: 10px 10%;
       }
  }
`;


const FooterContainer = styled.footer`
background-color: black;
width: 100%;
bottom: 0;
color: #fff;
padding: 0px;
`;


const FooterLinks = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: auto;
  padding: 0;
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`;

const FooterLink = styled.li`
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

const NotSignedIn = ({page}) => {

    const [showAnswers, setShowAnswers] = useState(Array(6).fill(false));
    const [isRotated, setIsRotated] = useState(Array(6).fill(false));


  const toggleAnswer = (index) => {
    const newShowAnswers = [...showAnswers];
    const newIsRotated = [...isRotated];
    newShowAnswers[index] = !newShowAnswers[index];
    newIsRotated[index] = !newIsRotated[index];
    setShowAnswers(newShowAnswers);
    setIsRotated(newIsRotated);
  };
const gotoSignIn = ()=>{
  page('log In');
  console.log('sign In clicked')
}
const gotoSignUp = ()=>{
  page('log Up')
  console.log('sign Up clicked')
}
  return (
    <div>
      <First>
        <div className="kuber">
        <img src={logo}/>
        <button onClick={gotoSignIn}>Sign In</button>
        </div>
        
      <FirstDiv className='container1'>
        <h1>Unlimited movies, TV shows, and more</h1>
        <h3>Watch anywhere. Cancel anytime.</h3>
        <h4>Ready to watch? Sign In or Sign up</h4>
        <div className="sign">
        <button onClick={gotoSignIn}>Sign In</button>
        <button onClick={gotoSignUp}>Sign Up</button>
        </div>
      </FirstDiv>
      </First>
      <SecondDiv>
        <div>
            <h1>Enjoy on your TV</h1>
            <h4>Watch on Smart TVs, Playstation, Xbox, Chromecast,</h4>
            <h4>Apple TV, Blu-ray players, and more.</h4>
        </div>
        <imVid>
            <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png'/>
            {/* <video controls>
                    <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />
            </video> */}
        </imVid>

      </SecondDiv>
      <ThirdDiv>
          <div>
            <h1>Download your shows</h1>
            <h1> to watch offline</h1>
            <h5>Save your favorites easily and always have something to watch.</h5>
         </div>
         <Garden>
            <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg'/>
            <Cane>
              <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png'/>
              <div>
                   <h4>Stranger Things</h4>
                   <h6>Downloading</h6>
              </div>
            </Cane>
         </Garden>
         
      </ThirdDiv>
      <FourthDiv>
            <h1>Watch everywhere</h1>
            <h4>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h4>
      </FourthDiv>
      <FifthDiv>
        <img src='https://occ-0-3680-358.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55'/>
         <div>
            <h1>Create profiles for kids</h1>
            <h3>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h3>
         </div>
      </FifthDiv>
      <SixthDiv>
      <h1>Frequently Asked Questions?</h1>
      {faqData.map((item, index) => (
        <div className="card" key={index}>
          <div className="kuber">
            <h3>{item.question}</h3>
            <button
              className={`toggle-button ${isRotated[index] ? 'rotated' : ''}`}
              onClick={() => toggleAnswer(index)}
            >
              {isRotated[index] ? '-' : '+'}
            </button>
          </div>
          <p className={`drop-down-p ${showAnswers[index] ? 'visible' : ''}`}>
            {item.answer}
          </p>
        </div>
      ))}
      <h1>Ready to watch?</h1>
      <div className="sign">
      <button onClick={gotoSignIn}>Sign In</button>
      <button onClick={gotoSignUp}>Sign Up</button>
      </div>
      
    </SixthDiv>
    <FooterContainer>
      <FooterLinks>
        <FooterLink>
          <a href="#">FAQ</a>
        </FooterLink>
        <FooterLink>
          <a href="#">Help Center</a>
        </FooterLink>
        <FooterLink>
          <a href="#">Account</a>
        </FooterLink>
        <FooterLink>
          <a href="#">Media Center</a>
        </FooterLink>
        <FooterLink>
          <a href="#">Investor Relations</a>
        </FooterLink>
        {/* <FooterLink>
          <a href="#">Jobs</a>
        </FooterLink> */}
        <FooterLink>
          <a href="#">Ways to Watch</a>
        </FooterLink>
        <FooterLink>
          <a href="#">Terms of Use</a>
        </FooterLink>
        <FooterLink>
          <a href="#">Privacy</a>
        </FooterLink>
        <FooterLink>
          <a href="#">Cookie Preferences</a>
        </FooterLink>
        <FooterLink>
          <a href="#">Corporate Information</a>
        </FooterLink>
        <FooterLink>
          <a href="#">Contact Us</a>
        </FooterLink>
        <FooterLink>
          <a href="#">Speed Test</a>
        </FooterLink>
        <FooterLink>
          <a href="#">Legal Notices</a>
        </FooterLink>
        <FooterLink>
          <a href="#">Only on Afrowatch</a>
        </FooterLink>
      </FooterLinks>
    </FooterContainer>
    </div>
  );
};

const faqData = [
    {
      question: 'What is Afro Watch?',
      answer: 'Afro Watch is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There\'s always something new to discover, and new TV shows and movies are added every week!',
    },
    {
      question: 'How much does Afro Watch cost?',
      answer: 'Watch Afro Watch on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from US$9.99 to US$2.99 a month. No extra costs, no contracts.',
    },
    {
      question: 'Where can I watch?',
      answer: 'Watch anywhere, anytime. Sign in with your Afro Watch account to watch instantly on the web at afrowatch.com from your personal computer or on any internet-connected device that offers the Afro Watch app, including smart TVs, smartphones, tablets, streaming media players, and game consoles. You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you\'re on the go and without an internet connection. Take Afro Watch with you anywhere.',
    },
    {
      question: 'How do I cancel?',
      answer: 'Afro Watch is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.',
    },
    {
      question: 'What can I watch on Afro Watch?',
      answer: 'Afro Watch has an extensive library of feature films, documentaries, TV shows, anime, award-winning Afro Watch originals, and more. Watch as much as you want, anytime you want.',
    },
    {
      question: 'Is Afro Watch good for kids?',
      answer: 'The Afro Watch Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.',
    },
  ];

export default NotSignedIn;
