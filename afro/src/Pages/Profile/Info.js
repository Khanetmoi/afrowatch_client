import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const Flex = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 2px;
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
        <div>
        
            <div className="User Info">
                {
                    informations.map(
                        (user, index) => (
                            <div>
                                <h2>User Info</h2>
                                <Flex>
                                    <h3>First Name</h3>
                                    <h3>{user.userFirstname}</h3>
                                </Flex>
                                <Flex>
                                    <h3>Last Name</h3>
                                    <h3>{user.userLastname}</h3>
                                </Flex>
                                <Flex>
                                    <h3>Email</h3>
                                    <h3>{user.userMail}</h3>
                                </Flex>
                                <Flex>
                                    <h3>password</h3>
                                    <h3>{user.userPassword}</h3>
                                </Flex>
                                <Flex>
                                    <h3>Phone number</h3>
                                    <h3>{user.userCode} {user.userPhone}</h3>
                                </Flex>
                            </div>
                            )
                        )
                    }
                </div>
                <div className="Payment Info">
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
                </div>
                <div className="Payment Info">
                    <h2>Subscription</h2>
                    <Flex>
                        <h3>First Name</h3>
                        <h3>Bitsindou Van</h3>
                    </Flex>
                    <Flex>
                        <h3>Last Name</h3>
                        <h3>Inyat-khan</h3>
                    </Flex>
                    <Flex>
                        <h3>Formula</h3>
                        <h3>1 month</h3>
                    </Flex>
                    <Flex>
                        <h3>Time Left</h3>
                        <h3>23 days</h3>
                    </Flex>
                </div>
            
        </div>
    )
}

export default Info;