import React from "react";
import styled from 'styled-components';

const Flex = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 2px;
`;

const UserInfo = styled.div`
  :nth-child(odd):nth-child(2){
    background-color: grey;
  }
`;
const PaymentInfo = styled.div`
// :nth-child(2){
//     background-color: grey;
//   }
  `;
const Subscription = styled.div`
// :nth-child(3){
//     background-color: grey;
//   }
`;
const Settings = ()=>{
    return (
        <div>
        <UserInfo>
            <h2>User Info</h2>
            <Flex>
                <h3>First Name</h3>
                <input type="text" placeholder="Bitsindou Van"/>
            </Flex>
            <Flex>
                <h3>Last Name</h3>
                <input type="text" placeholder="Inayat-khan"/>
            </Flex>
            <Flex>
                <h3>Email</h3>
                <input type="text" placeholder="elya@gmail.com"/>
            </Flex>
            <Flex>
                <h3>password</h3>
                <input type="text" placeholder="1234"/>
            </Flex>
            <Flex>
                <h3>Phone number</h3>
                <input type="text" placeholder="+233 55 711 1234"/>
            </Flex>
        </UserInfo>
        <PaymentInfo>
            <h2>Payment Info</h2>
            <Flex>
                <h3>First Name</h3>
                <input type="text" placeholder="Bitsindou Van"/>
            </Flex>
            <Flex>
                <h3>Last Name</h3>
                
                <input type="text" placeholder="Inayat-khan"/>
            </Flex>
            <Flex>
                <h3>Card Number</h3>
                <input type="text" placeholder="elya@gmail.com"/>
            </Flex>
            <Flex>
                <h3>Zip code</h3>
                <input type="text" placeholder="1234"/>
            </Flex>
            <Flex>
                <h3>Expiration Date</h3>
                <input type="text" placeholder="2/o1/2024"/>
            </Flex>
            <Flex>
                <h3>Security code</h3>
                <input type="text" placeholder="2034887"/>
            </Flex>
        </PaymentInfo>
        <Subscription>
            <h2>Subscription</h2>
            <Flex>
                <h3>First Name</h3>
                <input type="text" placeholder="Bitsindou Van"/>
            </Flex>
            <Flex>
                <h3>Last Name</h3>
                <input type="text" placeholder="Inayat-khan"/>
            </Flex>
            <Flex>
                <h3>Formula</h3>
                <input type="text" placeholder="1 month"/>
            </Flex>
            <Flex>
                <h3>Time Left</h3>
                <input type="text" placeholder="23 days"/>
            </Flex>
        </Subscription>
        </div>
    )
}

export default Settings