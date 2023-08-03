import React from 'react';
import styled from 'styled-components';

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #4CAF50;
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
  background-color: #4CAF50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
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
`;


const SignUp = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    props.page('Subscription')
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
      <SignUpForm onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <Input type="text" placeholder="Full Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="tel" placeholder="Phone Number" />
        <div>
          <label htmlFor="countryCode">Country Code</label>
          <CountryCodeSelect id="countryCode">
            {africanCountries.map((country) => (
              <CountryCodeOption key={country.code} value={country.code}>
                {country.name}
              </CountryCodeOption>
            ))}
          </CountryCodeSelect>
        </div>
        <Button type="submit">Sign Up</Button>
      </SignUpForm>
      <div>
        <Button onClick={handleSignUpWithGoogle}>Sign Up with Google</Button>
        <Button onClick={handleSignUpWithFacebook}>Sign Up with Facebook</Button>
      </div>
    </SignUpContainer>
  );
};

export default SignUp;