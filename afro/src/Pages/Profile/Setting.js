import React from "react";
import styled from 'styled-components';

const Flex = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-right: 40%;
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

const Setting = styled.div`
margin: 0 2%;
`;
const Title = styled.div`
  margin: 40px 0;
`;
const Settings = ()=>{
    return (
        <Setting>
            <Title>
            <h4>Profile Settings</h4>
             <hr/>
            </Title>
        <UserInfo>
            <h5>User Info</h5>
                              <table style={{width: `100%`}}>
                                <tr style={{backgroundColor: `#f4f7f9`}}>
                                  <td style={{width:`18%`}}></td>
                                  <td style={{width:`19%`}}>Full Name</td>
                                  <td style={{width:`18%`}}></td>
                                  <td style={{width:`27%`}}><input type="text" placeholder="first name"/>   <input type="text" placeholder="last name"/></td>
                                  <td style={{width:`18%`}}></td>
                                </tr>
                                <tr>
                                  <td style={{width:`18%`}}></td>
                                  <td style={{width:`19%`}}>Email</td>
                                  <td style={{width:`18%`}}></td>
                                  <td style={{width:`27%`}}>elya@gmail.com</td>
                                  <td style={{width:`18%`}}></td>
                                </tr>
                                <tr style={{backgroundColor: `#f4f7f9`}}>
                                  <td style={{width:`18%`}}></td>
                                  <td style={{width:`19%`}}>password</td>
                                  <td style={{width:`18%`}}></td>
                                  <td style={{width:`27%`}}><input type="text" placeholder="password"/></td>
                                  <td style={{width:`18%`}}></td>
                                </tr>
                                <tr>
                                  <td style={{width:`18%`}}></td>
                                  <td style={{width:`19%`}}>Phone number</td>
                                  <td style={{width:`18%`}}></td>
                                  <td style={{width:`27%`}}><input type="text" placeholder="Country Code"/>  <input type="text" placeholder="phone number"/></td>
                                  <td style={{width:`18%`}}></td>
                                </tr>
                                </table>
        </UserInfo>
        
        <Subscription>
            {/* <h2>Subscription</h2> */}
            {/* <Flex>
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
            </Flex> */}
            
        </Subscription>
        {/* <PaymentInfo>
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
        </PaymentInfo> */}
        </Setting>
    )
}

export default Settings