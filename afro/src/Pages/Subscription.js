import React from 'react';
import styled from 'styled-components';

const categoriesData = [
    { title: 'HEARTMARMING', elements: ['Romance', 'Family'] },
    { title: 'THRILLING', elements: ['Thriller', 'Suspense', 'Psychological', 'Action'] },
    { title: 'HUMOROUSE', elements: ['Comedy'] },
    { title: 'SCARY', elements: ['Horror'] },
    { title: 'THOUGHT-PROVOKING', elements: ['Drama (Historical, Biographical)', 'Documentary'] },
    { title: 'TIMELESS', elements: ['Classic', 'Western'] },
    { title: ' MYSTICAL', elements: ['Supernatural'] },
    { title: 'EMPOWERING', elements: ['Superhero', 'Martial Arts'] },
    { title: 'HOPEFUL', elements: ['Fantasy', 'Adventure'] },
    { title: 'COURAGEOUS', elements: ['War'] },
    { title: 'MYSTERIOUS', elements: ['Mystery', 'Crime', 'Spy/Espionage'] },
    { title: 'FASCINATING', elements: ['Sci-Fi'] },
    // { title: 'REFLECTIVE', elements: ['Biographical'] },
    // { title: 'SPIRITUAL', elements: ['Drama'] },
    { title: 'GLAMOROUSE', elements: ['Musical'] },

    // Add other categories here...
  ];

// const SubscriptionContainer = styled.div`
//   background-color: green;
//   padding: 20px;
// `;

// const PlansContainer = styled.div`
//    display: flex;
//    justify-content: center;
//    align-items: flex-start
//   justify-items: center;
 
// `;

// const PlanCard = styled.div`lanTitle
//   // background-color: #fff;
//   background-color: orange;
//   padding: 20px;
//   border-radius: 10px;
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
//   height: 100%;
// `;

// const PlanTitle = styled.h3`
//   text-align: center;
//   background-color: orange;
// `;

// const PlanPrice = styled.p`
//   font-size: 24px;
//   font-weight: bold;
//   text-align: center;
// `;

// const PlanCategories = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin: 20px 0;
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); /* Change here */
//   grid-gap: 5px;
// `;

// const CategoryItem = styled.li`
//   text-align: center;
//   background-color: #f5f5f5; /* Add background color for each category item */
//   padding: 8px;
//   border-radius: 5px;
//   list-style-type: none;
// `;

// const SubscribeButton = styled.button`
//   background-color: orange;
//   color: #fff;
//   padding: 10px 20px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   width: 100%;
// `;

// const CategoryTitle = styled.h4`
//   font-size: 16px;
// `;

const plans = [
    { title: 'Basic',time: '1 Month ', price: '100Ghc' ,categories: categoriesData.slice(0, 5) },
    { title: 'Standard',time: '6 Months',price: '500Ghc' , categories: categoriesData.slice(5, 10) },
    { title: 'Premium',time: '1 year', price: '1000Ghc' ,categories: categoriesData },
  ];

  const getGridColumnCount = (categories) => {
    const categoryCount = categories.reduce((total, category) => total + category.elements.length, 0);
    return Math.ceil(categoryCount / 4); // Adjust the number 4 to control the number of columns per grid
  };

//   const GridContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(5, 1fr);
//   grid-gap: 5px;
//   margin-bottom: 20px;
// `;

// const GridItem = styled.div`
//   text-align: center;
//   background-color: ${({ color }) => color}; /* Use a dynamic color prop for background color */
//   padding: 8px;
//   border-radius: 5px;
//   list-style-type: none;
// `;

// const Subscription = () => {
//     return (
//       <SubscriptionContainer>
//         <h1>Categories</h1>
//         <GridContainer>
//         {categoriesData.map((category, index) => (
//           <GridItem 
//           key={index}
//            color={'lightgreen'}
//            >
//             <CategoryTitle>{category.title}</CategoryTitle>
//             {category.elements.map((element, elementIdx) => (
//               <CategoryItem key={elementIdx}>{element}</CategoryItem>
//             ))}
//           </GridItem>
//         ))}
//       </GridContainer>
//         <PlansContainer>
//           {plans.map((plan, index) => (
//             <PlanCard key={index} style={{ gridTemplateColumns: `repeat(${getGridColumnCount(plan.categories)}, 1fr)` }}>
//               <PlanTitle>{plan.title}</PlanTitle>
//               <h3>Price: {plan.price}</h3>
//               <SubscribeButton>Subscribe</SubscribeButton>
//             </PlanCard>
//           ))}
//         </PlansContainer>
//       </SubscriptionContainer>
//     );
//   };



const SubscriptionContainer = styled.div`
// background-color: hsla(278, 78%, 40%, 0.98);
// background-image: radial-gradient(650px circle at 0% 0%, hsl(219, 44%, 14%) 15%,
background-color: #18200e;
hsl(219, 91%, 13%) 35%);
  padding: 20px;
`;

const PlansContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const PlanCard = styled.div`
  background-color: black;
  color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  min-width: 280px;
  margin: 10px;
`;

const PlanTitle = styled.h5`
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
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-gap: 5px;
`;

const CategoryItem = styled.li`
  text-align: center;
  background-color: #f5f5f5;
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
  color: white;
  font-size: 16px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 5px;
  margin-bottom: 40px 0;
`;

const GridItem = styled.div`
  text-align: center;
  background-color: ${({ color }) => color};
  padding: 8px;
  border-radius: 5px;
  margin: 20px 10px;
`;

const Subscription = () => {
  return (
    <SubscriptionContainer>
        <h1 style={{color: `white`}}>Categories</h1>
        <GridContainer>
        {categoriesData.map((category, index) => (
          <GridItem 
          key={index}
            color={'black'}
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
            <PlanCard key={index}>
              <PlanTitle>{plan.title}</PlanTitle>
              <h3>Duration: {plan.time}</h3>
              <h3>Price: {plan.price}</h3>
              <SubscribeButton>Subscribe</SubscribeButton>
              {/* <GridContainer>
               <GridItem>Item 1</GridItem>
               <GridItem>{plan.title}</GridItem>
               <GridItem>{plan.title}</GridItem>
               <GridItem>{plan.title}</GridItem>
               <GridItem>Item 5</GridItem>
               <GridItem>Item 6</GridItem>
               <GridItem>Item 7</GridItem>
               <GridItem>Item 8</GridItem>
              <GridItem>Item 9</GridItem>
              <GridItem>Item 10</GridItem>
              <GridItem>Item 11</GridItem>
              <GridItem>Item 12</GridItem>
              <GridItem>Item 13</GridItem>
              <GridItem>Item 14</GridItem>
              <GridItem>Item 15</GridItem>
              <GridItem>Item 16</GridItem>
    </GridContainer> */}
            </PlanCard>
          ))}
        </PlansContainer>
      </SubscriptionContainer>
  );
};

export default Subscription;