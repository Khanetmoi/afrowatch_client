import React from 'react';
import styled from 'styled-components';

const categoriesData = [
    { title: 'Heartwarming', elements: ['Romance', 'Family'] },
    { title: 'Thrilling', elements: ['Thriller', 'Mystery', 'Suspense', 'Psychological', 'Action'] },
    { title: 'Thrilling', elements: ['Thriller', 'Mystery', 'Suspense', 'Psychological', 'Action'] },
    { title: 'Thrilling', elements: ['Thriller', 'Mystery', 'Suspense', 'Psychological', 'Action'] },
    { title: 'Thrilling', elements: ['Thriller', 'Mystery', 'Suspense', 'Psychological', 'Action'] },
    { title: 'Thrilling', elements: ['Thriller', 'Mystery', 'Suspense', 'Psychological', 'Action'] },
    { title: 'Thrilling', elements: ['Thriller', 'Mystery', 'Suspense', 'Psychological', 'Action'] },
    { title: 'Thrilling', elements: ['Thriller', 'Mystery', 'Suspense', 'Psychological', 'Action'] },
    { title: 'Thrilling', elements: ['Thriller', 'Mystery', 'Suspense', 'Psychological', 'Action'] },
    { title: 'Thrilling', elements: ['Thriller', 'Mystery', 'Suspense', 'Psychological', 'Action'] },
    { title: 'Thrilling', elements: ['Thriller', 'Mystery', 'Suspense', 'Psychological', 'Action'] },
    { title: 'Thrilling', elements: ['Thriller', 'Mystery', 'Suspense', 'Psychological', 'Action'] },
    { title: 'Thrilling', elements: ['Thriller', 'Mystery', 'Suspense', 'Psychological', 'Action'] },
    { title: 'Thrilling', elements: ['Thriller', 'Mystery', 'Suspense', 'Psychological', 'Action'] },
    { title: 'Thrilling', elements: ['Thriller', 'Mystery', 'Suspense', 'Psychological', 'Action'] },
    { title: 'Thrilling', elements: ['Thriller', 'Mystery', 'Suspense', 'Psychological', 'Action'] },
    { title: 'Thrilling', elements: ['Thriller', 'Mystery', 'Suspense', 'Psychological', 'Action'] },
    { title: 'Thrilling', elements: ['Thriller', 'Mystery', 'Suspense', 'Psychological', 'Action'] },
    { title: 'Thrilling', elements: ['Thriller', 'Mystery', 'Suspense', 'Psychological', 'Action'] },
    { title: 'Thrilling', elements: ['Thriller', 'Mystery', 'Suspense', 'Psychological', 'Action'] },
    { title: 'Thrilling', elements: ['Thriller', 'Mystery', 'Suspense', 'Psychological', 'Action'] },
    { title: 'Thrilling', elements: ['Thriller', 'Mystery', 'Suspense', 'Psychological', 'Action'] },
    { title: 'Thrilling', elements: ['Thriller', 'Mystery', 'Suspense', 'Psychological', 'Action'] },
    { title: 'Thrilling', elements: ['Thriller', 'Mystery', 'Suspense', 'Psychological', 'Action'] },
    { title: 'Thrilling', elements: ['Thriller', 'Mystery', 'Suspense', 'Psychological', 'Action'] },
    { title: 'Thrilling', elements: ['Thriller', 'Mystery', 'Suspense', 'Psychological', 'Action'] },
    { title: 'Thrilling', elements: ['Thriller', 'Mystery', 'Suspense', 'Psychological', 'Action'] },
    { title: 'Thrilling', elements: ['Thriller', 'Mystery', 'Suspense', 'Psychological', 'Action'] },
    { title: 'Thrilling', elements: ['Thriller', 'Mystery', 'Suspense', 'Psychological', 'Action'] },

    // Add other categories here...
  ];

const SubscriptionContainer = styled.div`
  background-color: green;
  padding: 20px;
`;

const PlansContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   grid-gap: 20px;
   display: flex;
   justify-content: space-between;
   align-items: flex-start
  justify-items: center;
`;

const PlanCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  height: 100%;
//   display: grid;
//   grid-template-rows: auto 1fr auto; /* Define the rows for the title, categories, and button */
display: flex;
justify-content: space-between;
flex-wrap: wrap;
`;

const PlanTitle = styled.h3`
  text-align: center;
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
    { title: '1 Month Plan', categories: categoriesData.slice(0, 5) },
    { title: 'Premium Plan', categories: categoriesData.slice(0, 10) },
    { title: '6 Months Plan', categories: categoriesData.slice(0, 15) },
    { title: '1 Year Plan', categories: categoriesData },
  ];

  const getGridColumnCount = (categories) => {
    const categoryCount = categories.reduce((total, category) => total + category.elements.length, 0);
    return Math.ceil(categoryCount / 4); // Adjust the number 4 to control the number of columns per grid
  };

const Subscription = () => {
    return (
      <SubscriptionContainer>
        <PlansContainer>
          {plans.map((plan, index) => (
            <PlanCard key={index} style={{ gridTemplateColumns: `repeat(${getGridColumnCount(plan.categories)}, 1fr)` }}>
              <PlanTitle>{plan.title}</PlanTitle>
              {plan.categories.map((category, idx) => (
                <div key={idx}>
                  <CategoryTitle>{category.title}</CategoryTitle>
                  {category.elements.map((element, elementIdx) => (
                    <CategoryItem key={elementIdx}>{element}</CategoryItem>
                  ))}
                </div>
              ))}
              <SubscribeButton>Subscribe</SubscribeButton>
            </PlanCard>
          ))}
        </PlansContainer>
      </SubscriptionContainer>
    );
  };

export default Subscription;
