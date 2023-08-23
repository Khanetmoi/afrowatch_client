import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const Flex = styled.table`
// display: flex;
// justify-content: space-around;
// align-items: flex-start;
// margin-right: 40%;
width: 100%;
`;

const Title = styled.div`
  margin: 40px 0;
`;

const ProfileDetails = styled.div`
margin: 2%;
border-radius: 60px;
// background-color: green;

`;

const Subscription = styled.div`
margin: 40px 0;
`;
const Info = ()=>{
    const storedUserId = JSON.parse(localStorage.getItem('loggedInStatus'));
  
    //const user_id = props.userId;
    const user_id = storedUserId.matchedUserId;

    // API Link comment get
    const api_link_user = 'https://myworklm.com/Afrowatch_admin/api/user/afrowatch_api_user_get.php?user_id='+user_id;

    // user get All info
    const [informations, setInformation] = useState([]);

    useEffect(() => {
        async function fetchInformation() {
            try {
                const response = await fetch(api_link_user);
                const data = await response.json();
                setInformation(data); // Update the state with fetched users
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        }
        fetchInformation();
    }, []);


    return (
        <ProfileDetails>
            <Title>
            <h4>Profile Details</h4>
             <hr/>
            </Title>
             
            <Subscription className="User Info">
                {
                    informations.map(
                        (user, index) => (
                            <div>
                                <h5>User Info</h5>
                                {/* <Flex style={{backgroundColor: `#f4f7f9`}}>
                                  <tr>
                                    <th>Full Name</th>
                                    <th></th>
                                    <th>{user.userFirstname}  {user.userLastname}</th>
                                   </tr>
                                    
                                </Flex>
                                
                                <Flex>
                                <tr>
                                    <th>Email</th>
                                    <th></th>
                                    <th>{user.userMail}</th>
                                   </tr>
                                </Flex>
                                <Flex style={{backgroundColor: `#f4f7f9`}}>
                                    <h3>password</h3>
                                    <h3>{user.userPassword}</h3>
                                </Flex>
                                <Flex>
                                    <h3>Phone number</h3>
                                    <h3>{user.userCode} {user.userPhone}</h3>
                                </Flex> */}
                                <table style={{width: `100%`}}>
                                <tr style={{backgroundColor: `#f4f7f9`}}>
                                  <td style={{width:`18%`}}></td>
                                  <td style={{width:`19%`}}>Full Name</td>
                                  <td style={{width:`18%`}}></td>
                                  <td style={{width:`27%`}}>{user.userFirstname}  {user.userLastname}</td>
                                  <td style={{width:`18%`}}></td>
                                </tr>
                                <tr>
                                  <td style={{width:`18%`}}></td>
                                  <td style={{width:`19%`}}>Email</td>
                                  <td style={{width:`18%`}}></td>
                                  <td style={{width:`27%`}}>{user.userMail}</td>
                                  <td style={{width:`18%`}}></td>
                                </tr>
                                <tr style={{backgroundColor: `#f4f7f9`}}>
                                  <td style={{width:`18%`}}></td>
                                  <td style={{width:`19%`}}>password</td>
                                  <td style={{width:`18%`}}></td>
                                  <td style={{width:`27%`}}>{user.userPassword}</td>
                                  <td style={{width:`18%`}}></td>
                                </tr>
                                <tr>
                                  <td style={{width:`18%`}}></td>
                                  <td style={{width:`19%`}}>Phone number</td>
                                  <td style={{width:`18%`}}></td>
                                  <td style={{width:`27%`}}>{user.userCode} {user.userPhone}</td>
                                  <td style={{width:`18%`}}></td>
                                </tr>
                                </table>
                            </div>
                            )
                        )
                    }
                </Subscription>
                <Subscription className="Subscription">
                    <h5>Subscription</h5>
                    <table style={{width: `100%`}}>
                                <tr style={{backgroundColor: `#f4f7f9`}}>
                                  <td style={{width:`18%`}}></td>
                                  <td style={{width:`19%`}}>Full Name</td>
                                  <td style={{width:`18%`}}></td>
                                  <td style={{width:`27%`}}> Bitsindou Van Inyat-khan</td>
                                  <td style={{width:`18%`}}></td>
                                </tr>
                                <tr>
                                  <td style={{width:`18%`}}></td>
                                  <td style={{width:`19%`}}>Formula</td>
                                  <td style={{width:`18%`}}></td>
                                  <td style={{width:`27%`}}>Basic</td>
                                  <td style={{width:`18%`}}></td>
                                </tr>
                                <tr style={{backgroundColor: `#f4f7f9`}}>
                                  <td style={{width:`18%`}}></td>
                                  <td style={{width:`19%`}}>Time Left</td>
                                  <td style={{width:`18%`}}></td>
                                  <td style={{width:`27%`}}>23 days</td>
                                  <td style={{width:`18%`}}></td>
                                </tr>
                                </table>
                </Subscription>
                
                {/* <div className="Payment Info">
                    <h2>Payment Info</h2>
                    <Flex>
                        <h3>First Name</h3>
                        <h3>Bitsindou Van</h3>
                    </Flex>
                    <Flex>
                        <h3>Last Name</h3>
                        <h3>Inyat-khan</h3>
                    </Flex>
                    <Flex>
                        <h3>Card Number</h3>
                        <h3>Elya@gmail.com</h3>
                    </Flex>
                    <Flex>
                        <h3>Zip code</h3>
                        <h3>1234</h3>
                    </Flex>
                    <Flex>
                        <h3>Expiration Date</h3>
                        <h3>2/01/1995</h3>
                    </Flex>
                    <Flex>
                        <h3>Security code</h3>
                        <h3>2034887</h3>
                    </Flex>
                </div> */}
            
        </ProfileDetails>
    )
}

export default Info;
