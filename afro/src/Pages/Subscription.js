import React from 'react';
import styled from 'styled-components';

const categoriesData = [
    { title: 'Heartwarming', elements: ['Romance', 'Family'] },
    { title: 'Thrilling', elements: ['Thriller', 'Suspense', 'Psychological', 'Action'] },
    { title: 'Humorous', elements: ['Comedy'] },
    { title: 'Scary', elements: ['Horror'] },
    { title: 'Thought-Provoking', elements: ['Drama (Historical, Biographical)', 'Documentary'] },
    { title: 'Timeless', elements: ['Classic', 'Western'] },
    { title: ' Mystical', elements: ['Supernatural'] },
    { title: 'Empowering', elements: ['Superhero', 'Martial Arts'] },
    { title: 'Hopeful', elements: ['Fantasy', 'Adventure'] },
    { title: 'Courageous', elements: ['War'] },
    { title: 'Mysterious', elements: ['Mystery', 'Crime', 'Spy/Espionage'] },
    { title: 'Fascinating', elements: ['Sci-Fi'] },
    { title: 'Reflective', elements: ['Biographical'] },
    { title: 'Spiritual', elements: ['Drama'] },
    { title: 'Glamorous', elements: ['Musical'] },

    // Add other categories here...
  ];

const SubscriptionContainer = styled.div`
  background-color: green;
  padding: 20px;
`;

const PlansContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: flex-start
  justify-items: center;
 
`;

const PlanCard = styled.div`lanTitle
  // background-color: #fff;
  background-color: orange;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  height: 100%;
`;

const PlanTitle = styled.h3`
  text-align: center;
  background-color: orange;
`;

const PlanPrice = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const PlanCategories = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); /* Change here */
  grid-gap: 5px;
`;

const CategoryItem = styled.li`
  text-align: center;
  background-color: #f5f5f5; /* Add background color for each category item */
  padding: 8px;
  border-radius: 5px;
  list-style-type: none;
`;

const SubscribeButton = styled.button`
  background-color: orange;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
`;

const CategoryTitle = styled.h4`
  font-size: 16px;
`;

const plans = [
    { title: '1 Month Plan', price: '100Ghc' ,categories: categoriesData.slice(0, 5) },
    { title: '6 Months Plan',price: '500Ghc' , categories: categoriesData.slice(5, 10) },
    { title: '1 Year Plan', price: '1000Ghc' ,categories: categoriesData },
  ];

  const getGridColumnCount = (categories) => {
    const categoryCount = categories.reduce((total, category) => total + category.elements.length, 0);
    return Math.ceil(categoryCount / 4); // Adjust the number 4 to control the number of columns per grid
  };

  const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px;
  margin-bottom: 20px;
`;

const GridItem = styled.div`
  text-align: center;
  background-color: ${({ color }) => color}; /* Use a dynamic color prop for background color */
  padding: 8px;
  border-radius: 5px;
  list-style-type: none;
`;

const Subscription = () => {
    return (
      <SubscriptionContainer>
        <h1>Categories</h1>
        <GridContainer>
        {categoriesData.map((category, index) => (
          <GridItem 
          key={index}
           color={'lightgreen'}
           >
            <CategoryTitle>{category.title}</CategoryTitle>
            {category.elements.map((element, elementIdx) => (
              <CategoryItem key={elementIdx}>{element}</CategoryItem>
            ))}
          </GridItem>
        ))}
      </GridContainer>
        <PlansContainer>
          {plans.map((plan, index) => (
            <PlanCard key={index} style={{ gridTemplateColumns: `repeat(${getGridColumnCount(plan.categories)}, 1fr)` }}>
              <PlanTitle>{plan.title}</PlanTitle>
              <h3>Price: {plan.price}</h3>
              <SubscribeButton>Subscribe</SubscribeButton>
            </PlanCard>
          ))}
        </PlansContainer>
      </SubscriptionContainer>
    );
  };

export default Subscription;
