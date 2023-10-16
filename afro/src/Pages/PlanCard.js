import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  padding: 20px;
  border: 2px solid ${props => (props.selected ? '#007bff' : '#ccc')};
  border-radius: 5px;
  cursor: pointer;

  h2 {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 5px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 5px;
    }
  }
`;

const PlanCard = ({ title, duration, price, categories, selected, onSelect }) => {
  return (
    <CardWrapper selected={selected} onClick={onSelect}>
      <h2>{title}</h2>
      <p>{duration}</p>
      <p>{price} ghc</p>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </CardWrapper>
  );
};

export default PlanCard;
