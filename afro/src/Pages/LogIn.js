import React, { useState } from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: rgba(128, 128, 0, 1);
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
  background-color: rgba(255, 128, 0, 1);
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

  const handleUsernameChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

    const handleSubmit = async (event) => {
      event.preventDefault();

      

      try {
        // Make an API request to fetch user credentials
        const response = await fetch('https://myworklm.com/afrowatch/api/user/afrowatch_api_user_login.php');
        const data = await response.json();
  
        const match = data.some((user) => {
          return user.user_mail === email && user.user_password === password;
        });
  
        if (match) {
          console.log('Login successful');
          // Call the props.logged function to indicate successful login
          props.logged(true);
        } else {
          console.log('Invalid username or password');
          // Handle invalid login attempt here
        }
      } catch (error) {
        console.error('Error fetching user credentials:', error);
        // Handle error here
      }
  
      // Reset the form
      setEmail('');
      setPassword('');
      // Save the email and password in the localStorage
      localStorage.setItem('loggedInStatus', JSON.stringify({ email, password }));
  
      props.page('home');
      // Handle login here (e.g., form validation and API call)
    };
  
    const gotoLogUp = () => {
      props.page('log Up');
    };
  
    return (
      <LoginContainer>
        <LoginForm onSubmit={handleSubmit}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="Email" />
          <Input type="password" name="password" placeholder="Password" />
          <Button type="submit">Login</Button>
        </LoginForm>
        <span>
          Don't have an account yet? <button onClick={() => gotoLogUp()} background-color={`rgba(255, 128, 0, 1)`}>Sign Up</button>
        </span>
      </LoginContainer>
    );
  };
  
  export default Login;