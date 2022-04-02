import React, { useState, useEffect } from 'react';
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import { loginRequest } from '../authConfig';
//import Offer from './components/Offer';
import OfferList from './OfferList';

const Home = () => {
    const { instance } = useMsal();
    const { accounts } = useMsal();
    //in case you need to access the userinfo for further processing
    //console.log(accounts);
    //console.log(accounts[0]?.username);

    return (
        <>
            <UnauthenticatedTemplate>
                <div className='App'>
                    <header className='App-header'>
                        <button onClick={() => instance.loginRedirect(loginRequest)}>
                            Login
                        </button>
                    </header>
                </div>
            </UnauthenticatedTemplate>

            <AuthenticatedTemplate>
                <div className='App'>
                    <header className='App-header'>
                        

                        <p>
                            Hello {accounts[0]?.name}!
                        </p>

                        <button onClick={() => instance.logoutRedirect({ postLogoutRedirectUri: '/' })}>
                            Logout
                        </button>
                    </header>
                    <OfferList />
                </div>
            </AuthenticatedTemplate>
        </>
    )
}

export default Home;