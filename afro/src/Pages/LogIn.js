import React, { useState } from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  // background-color: hsla(278, 78%, 40%, 0.98);
  // background-image: radial-gradient(650px circle at 0% 0%, hsl(219, 44%, 14%) 15%,
  background-color: #18200e;
  hsl(219, 91%, 13%) 35%);
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: red;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
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
        <LoginForm onSubmit={handleSubmit}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="Email" onChange={handleUsernameChange}/>
          <Input type="password" name="password" placeholder="Password" onChange={handlePasswordChange} />
          <Button type="submit">Login</Button>
          <p>{error}</p>
        </LoginForm>
        <span style={{color: `white`}}>
          Don't have an account yet? <span onClick={() => gotoLogUp()} style={{color: `red`}}>Sign Up</span>
        </span>
      </LoginContainer>
    );
  };
  
  export default Login;
