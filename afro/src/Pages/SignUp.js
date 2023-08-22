import React, { useState } from 'react';
import styled from 'styled-components';
import logoBlanc from '../Images/logoBlanc.png';
import {FcGoogle} from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai';

const SignUpContainer = styled.div`
  display: flex;
  // flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #18200e;
  
  div {
    justify-content: center;
    margin: 30px;
    width: 50%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
      margin: 30px;
      width: 90%;
    }
  }
`;

const SignUpForm = styled.form`
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
  margin-block: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: red;
  color: #fff;
  padding: 10px 20px;
  border: 2px solid black;
  width: 15%;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px;
  @media (max-width: 768px) {
    width: 30%;
  }
`;

const CountryCodeSelect = styled.select`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-block: 8px;
`;

const CountryCodeOption = styled.option`
  /* Your country code option styles here */
  background-color: white;
`;

const Logo =styled.div`
  width: 10%;
  img {
    font-size: 10px;
    width: 80%;
  }
`;  

const SignUp = (props) => {
  const [error, setError] = useState(' ');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
    countryCode: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const haveAccount = ()=>{
    props.page('log In')
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (
      formData.firstName.trim() === '' ||
      formData.lastName.trim() === '' ||
      formData.email.trim() === '' ||
      formData.password.trim() === '' ||
      formData.phoneNumber.trim() === ''
    ) {
      setError('Please fill out all fields');
      // console.error('Please fill out all fields');
      return;
    }
    fetch('https://myworklm.com/Afrowatch_admin/api/user/afrowatch_api_user_signup.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      
    })
      .then((response) => response.json())
      .then((data) => {
        props.log(true)
        props.page('Subscription')
        // props.page('home')
        // Handle the API response as needed
        // console.log('API response:', data);
        localStorage.setItem('loggedInStatus', JSON.stringify({ email: data.user_mail, password: data.user_password, matchedUserId: data.user_id }));
        console.log('dafaf'+ data)

      })
      .catch((error) => {
        // Handle errors
        console.error('Error:', error);
      });
    
    
    // Handle form submission here (e.g., form validation and API call)
  };

  const africanCountries = [
    { name: 'Algeria', code: '+213' },
    { name: 'Angola', code: '+244' },
    { name: 'Benin', code: '+229' },
    { name: 'Botswana', code: '+267' },
    { name: 'Burkina Faso', code: '+226' },
    { name: 'Burundi', code: '+257' },
    { name: 'Cameroon', code: '+237' },
    { name: 'Cape Verde', code: '+238' },
    { name: 'Central African Republic', code: '+236' },
    { name: 'Chad', code: '+235' },
    { name: 'Comoros', code: '+269' },
    { name: 'Congo', code: '+242' },
    { name: 'Djibouti', code: '+253' },
    { name: 'Egypt', code: '+20' },
    { name: 'Equatorial Guinea', code: '+240' },
    { name: 'Eritrea', code: '+291' },
    { name: 'Eswatini', code: '+268' },
    { name: 'Ethiopia', code: '+251' },
    { name: 'Gabon', code: '+241' },
    { name: 'Gambia', code: '+220' },
    { name: 'Ghana', code: '+233' },
    { name: 'Guinea', code: '+224' },
    { name: 'Guinea-Bissau', code: '+245' },
    { name: 'Ivory Coast', code: '+225' },
    { name: 'Kenya', code: '+254' },
    { name: 'Lesotho', code: '+266' },
    { name: 'Liberia', code: '+231' },
    { name: 'Libya', code: '+218' },
    { name: 'Madagascar', code: '+261' },
    { name: 'Malawi', code: '+265' },
    { name: 'Mali', code: '+223' },
    // Add more African countries and their codes as needed
  ];

  const handleSignUpWithGoogle = () => {
    // Handle sign up with Google here
  };

  const handleSignUpWithFacebook = () => {
    // Handle sign up with Facebook here
  };

  return (
    <SignUpContainer>
      <Logo>
          <img src={logoBlanc} alt="Logo" />
        </Logo>
        <div>
      <SignUpForm onSubmit={handleSubmit}>
        <p style={{color: `red`}}>{error}</p>
        <h2>Sign Up</h2>
        <Input
         type="text"
          placeholder="First Name"
          name="firstName"
           value={formData.firstName}
            onChange={handleInputChange} 
           />
           <Input
         type="text"
          placeholder="Last Name"
          name="lastName"
           value={formData.lastName}
            onChange={handleInputChange} 
           />
        <Input
         type="email"
          placeholder="Email"
          name="email"
           value={formData.email}
            onChange={handleInputChange}
             />
        <Input
         type="password"
          placeholder="Password"
          name="password"
           value={formData.password}
            onChange={handleInputChange}
            />
            {/* <div>
          <label htmlFor="countryCode">Country Code</label>
          <CountryCodeSelect
           id="countryCode"
            name="countryCode"
             value={formData.countryCode}
              onChange={handleInputChange}
              >
            {africanCountries.map((country) => (
              <CountryCodeOption key={country.code} value={country.code}>
                {country.name}
              </CountryCodeOption>
            ))}
          </CountryCodeSelect>
        </div> */}
        <Input
         type="tel"
          placeholder="Country Code + Phone Number"
          name="phoneNumber"
           value={formData.phoneNumber}
            onChange={handleInputChange}
             />
        
        <Button type="submit">Sign Up</Button>
        <span>already have an account? <button onClick={haveAccount}>sign In</button></span>
        <h4> Or Sign Up with</h4>
      
        <Button onClick={handleSignUpWithGoogle} style={{ backgroundColor: 'white', color: 'black' }}> <FcGoogle/> Google</Button>
        <Button onClick={handleSignUpWithFacebook} style={{ backgroundColor: 'white', color: 'black' }}><AiFillFacebook/> Facebook</Button>
      
      </SignUpForm>
      
      </div>
      
    </SignUpContainer>
  );
};

export default SignUp;