import React from "react";
import { BsCheck2All } from "react-icons/bs";
import styled from "styled-components";

const categoriesData = [
  { title: "HEARTWARMING", elements: ["Romance", "Family"] },
  {
    title: "THRILLING",
    elements: ["Thriller", "Suspense", "Psychological", "Action"],
  },
  { title: "HUMOROUSE", elements: ["Comedy"] },
  { title: "SCARY", elements: ["Horror"] },
  {
    title: "THOUGHT-PROVOKING",
    elements: ["Drama (Historical, Biographical)", "Documentary"],
  },
  { title: "TIMELESS", elements: ["Classic", "Western"] },
  { title: " MYSTICAL", elements: ["Supernatural"] },
  { title: "EMPOWERING", elements: ["Superhero", "Martial Arts"] },
  { title: "HOPEFUL", elements: ["Fantasy", "Adventure"] },
  { title: "COURAGEOUS", elements: ["War"] },
  { title: "MYSTERIOUS", elements: ["Mystery", "Crime", "Spy/Espionage"] },
  { title: "FASCINATING", elements: ["Sci-Fi"] },
  { title: "GLAMOROUSE", elements: ["Musical"] },
  // Add other categories here...
];

const plans = [
  {
    title: "Basic",
    time: "1 Month ",
    price: "100Ghc",
    categories: categoriesData.slice(0, 5),
  },
  {
    title: "Standard",
    time: "6 Months",
    price: "500Ghc",
    categories: categoriesData.slice(5, 10),
  },
  {
    title: "Premium",
    time: "1 year",
    price: "1000Ghc",
    categories: categoriesData,
  },
];

// DEFINED BUT NEVER USED
const getGridColumnCount = (categories) => {
  const categoryCount = categories.reduce(
    (total, category) => total + category.elements.length,
    0
  );
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
background-color: #18200e;
hsl(219, 91%, 13%) 35%);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const PlansContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 90%;
  margin-top: 50px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  // gap: 50px;
  grid-column-gap: 200px;
  @media (max-width: 768px) {
    // gap: 1px;
    grid-column-gap: 2px;
    margin: 10px;
  }
  width:100%;
`;

const GridItem = styled.div`
  background-color: transparent;
  border: 1px solid #ccc;
  color: red;
  border: 0px;
  padding-block: 5vh;
  margin-block: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &.basic:hover, &.Premium:hover, &.Standard:hover {
    background-color: red;
    color: white;
  }
`;

const Subscription = ({ page }) => {
  const gohome = () => {
    page("payment");
  };
  return (
    <SubscriptionContainer>
      <h1 style={{ color: `white` }}>Choose the Plan that's right for you</h1>
      <ul>
        <li style={{ color: `white` }}>
          <BsCheck2All style={{ color: `red` }} /> Watch all you want add free
        </li>
        <li style={{ color: `white` }}>
          <BsCheck2All style={{ color: `red` }} /> Recommandations just for you
        </li>
        <li style={{ color: `white` }}>
          <BsCheck2All style={{ color: `red` }} /> change Or cancel your plan
          anytime
        </li>
      </ul>
      <PlansContainer>
        <GridContainer>
          <GridItem> </GridItem>
          <GridItem style={{ backgroundColor: `black`, color: `white` }} className="basic">
            {plans[0].title}
          </GridItem>
          <GridItem style={{ backgroundColor: `black`, color: `white` }} className="Standard">
            {plans[1].title}
          </GridItem>
          <GridItem style={{ backgroundColor: `black`, color: `white` }} className="Premium">
            {plans[2].title}
          </GridItem>
          <GridItem style={{ backgroundColor: `black`, color: `white` }}>Monthly price</GridItem>
          <GridItem className="basic">{plans[0].price}</GridItem>
          <GridItem className="Standard">{plans[1].price}</GridItem>
          <GridItem className="Premium">{plans[2].price}</GridItem>
          <GridItem style={{ backgroundColor: `black`, color: `white` }}>Duration</GridItem>
          <GridItem className="basic">{plans[0].time}</GridItem>
          <GridItem className="Standard">{plans[1].time}</GridItem>
          <GridItem className="Premium">{plans[2].time}</GridItem>
          <GridItem></GridItem>
          <GridItem className="basic">
            <button style={{width: `100%`, height: `10vh`,color:`white`, backgroundColor:`red`}} onClick={gohome}>Suscribe</button>
          </GridItem>
          <GridItem className="Standard">
            <button style={{width: `100%`, height: `10vh`,color:`white`, backgroundColor:`red`}} onClick={gohome}>Suscribe</button>
          </GridItem>
          <GridItem style={{width: `100%`, backgrounColor: `red`}} className="Premium">
            <button style={{width: `100%`, height: `10vh`,color:`white`, backgroundColor:`red`}} onClick={gohome}>Suscribe</button>
          </GridItem>
        </GridContainer>
      </PlansContainer>
    </SubscriptionContainer>
  );
};

export default Subscription;
