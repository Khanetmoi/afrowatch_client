import React, { useState } from 'react';
import styled from 'styled-components';
import logoBlanc from '../Images/logoBlanc.png'

const LoginContainer = styled.div`
  display: flex;
  // flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  background-color: #18200e;
  // hsl(219, 91%, 13%) 35%);
  div {
    margin: 30px;
    width: 50%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
      margin: 30px;
      width: 95%;
    }
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 5% 10%;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  //  width: 420px;
   height: 40vh;
   margin: 10px;
   padding: 50px;

   div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;

    @media (max-width: 768px) {
      margin-block: 10px;
      h4 {
        display: none;
      }
    }
   }

   
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  // margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  // margin: 30px ; 
  width: 180px;
`;

const Button = styled.button`
  background-color: red;
  color: #fff;
  padding: 10px 20px;
  width: 50%;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 30px 0;
  @media (max-width: 768px) {
    width: 80%;
`;

const Logo =styled.div`
  width: 10%;
  img {
    font-size: 10px;
    width: 80%;
  }
`;

// ... (other imports and styles)

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [error, setError] = useState('');
  const [identification, setIdentification] = useState(null);
  let matchedUserId = null;
  const handleUsernameChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
    
    const handleSubmit = async (event) => {
      event.preventDefault();
      setEmail('');
      setPassword('');
      

      try {
        // Make an API request to fetch user credentials
        const response = await fetch('https://myworklm.com/Afrowatch_admin/api/user/afrowatch_api_user_login.php');
        const data = await response.json();
  
        const match = data.some((userData) => {
          // console.log('the users id is :'+ userData.user_id)
          // identification(userData.user_id);          
          // return userData.user_mail === email && userData.user_password === password;
          if (userData.user_mail === email && userData.user_password === password) {
            matchedUserId = userData.user_id; 
            localStorage.setItem('loggedInStatus', JSON.stringify({ email, password, matchedUserId }));
            return true;
          }
          return false; 
        });
       
        if (match) {
          console.log('Login successful');
          setError('Login successful')
          // localStorage.setItem('loggedInStatus', JSON.stringify({ email, password }));
          props.log(true);
          props.page('home');
        } else {
          console.log('Invalid username or password');
          setError('Invalid username or password')
          setEmail('');
          setPassword('');
          console.log(email)
          console.log(password)
          // Handle invalid login attempt here
        }
      } catch (error) {
        console.error('Error fetching user credentials:', error);
        setError('Error fetching user credentials')
        // Handle error here
      }
      
  
      // Reset the form
      
      
      // Save the email and password in the localStorage
      
  
      
      // Handle login here (e.g., form validation and API call)
    };
  
    const gotoLogUp = () => {
      props.log(true)
      props.page('log Up');
    };
    
    return (
      <LoginContainer>
        <Logo>
          <img src={logoBlanc} alt="Logo" />
          
        </Logo>
        <div>
        <LoginForm onSubmit={handleSubmit}>
          <h2>Sign In</h2>
          <div>
            <h4>email: </h4>
             <Input type="email" name="email" placeholder="Email" onChange={handleUsernameChange}/>
           </div>
           <div>
           <h4>password: </h4>
          <Input type="password" name="password" placeholder="Password" onChange={handlePasswordChange} />
          </div>
          <Button type="submit">Login</Button>
          <p>{error}</p>
        </LoginForm>
        <span style={{color: `white`}}>
          Don't have an account yet? <span onClick={() => gotoLogUp()} style={{color: `red`}}>Sign Up</span>
        </span>
        </div>
      </LoginContainer>
    );
  };
  
  export default Login;
