import React from "react";
import styled from 'styled-components';
import { FaCcVisa, FaCcMastercard } from 'react-icons/fa';
import { Checkbox } from "antd";


const Pay = styled.div`
display: flex;
flex-direction: column;
align-items: start;
justify-content: center;
margin: 0 33%;
`;

const Inputs = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color: white;
border-style: solid;
border-color: green;
// padding: 0 15px;
width: 100%;
margin-block: 1rem;
`;
const Payment = ()=>{
  return (
    <Pay>
         <h1 style={{color:`white`}}>Set up your Credit card or Debit card</h1>
         <div className="images"><FaCcVisa style={{fontSize:`50px`, color:`white`}}/>   <FaCcMastercard style={{fontSize:`50px`, color:`white`}}/></div>
         <Inputs>
            <div>
            <h6 style={{margin:`0`}}>Card Number</h6>
            <input type="num" style={{border:`none`}}/>
            </div>
            <div><FaCcVisa/></div>
         </Inputs>
         <div style={{display:`flex`,justifyContent: `space-between`,width:`100%`, margin:`0`}}>
         <Inputs style={{width:`50%`}}>
            <div>
            <h6 style={{margin:`0`}}>Expiration date</h6>
            <input type="num" style={{border:`none`}}/>
            </div>
         </Inputs>
         <Inputs style={{width:`50%`}}>
            <div>
            <h6 style={{margin:`0`}}>CVV</h6>
            <input type="num" style={{border:`none`}}/>
            </div>
         </Inputs>
         </div>
         <Inputs>
            <div>
            <h6 style={{margin:`0`}}>First Name</h6>
            <input type="num" style={{border:`none`}}/>
            </div>
         </Inputs>
         <Inputs>
            <div>
            <h6 style={{margin:`0`}}>Last Name</h6>
            <input type="num" style={{border:`none`}}/>
            </div>
            
         </Inputs>
         <Inputs>
         <div>
         <h6 style={{margin:`0`}}>100Ghc/month</h6>
         <h6 style={{margin:`0`}}>Basic</h6>
         </div>
         <button style={{backgroundColor:`transparent`, border:`none`}}>change</button>
         </Inputs>
         <p style={{color:`white`}}>By checking the checkbox below, you agree to our <a>terms of use</a><a>Privacy Statement</a>, and that you are over 18. Afrowatch will automatically continue your membership
         and cherge the membership fee(currently {`100Ghc/ month`}) to your payment method until you cancel. You may cancel at anytime to avoid future charges</p>
         <div style={{display:`flex`}}>
         <input type="checkbox"/> <span style={{color:`white`}}>I agree</span>
         </div>

         <button style={{width:`100%`,backgroundColor:`red`,height:`2rem`}}>Start Membership</button>
         
    </Pay>
  )
}

export default Payment;