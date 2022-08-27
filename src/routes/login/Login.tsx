import { useEffect, useState } from 'react';
import axios from "axios"
import { UnauthenticatedTemplate, useAccount, useMsal } from '@azure/msal-react';
import { useNavigate } from 'react-router-dom';
import { loginRequest } from '../../config/auth.config';
import { InteractionRequiredAuthError } from '@azure/msal-browser';
import { UserType } from 'types/user';



const Login = () => {
    const callApiWithToken = (userId: string, accessToken: string) => {
        const bearer = `Bearer ${accessToken}`
        return axios.post("http://localhost:8080/api/v1/auth/login", { userId  }, { headers: { "Authorization": bearer } })
    }
    const { instance, accounts, inProgress } = useMsal();
    const navigate = useNavigate();
    const account = useAccount(accounts[0] || {});
    useEffect(() => {
        const performLogin = async () => {
            try {
                if (account && inProgress === "none") {
                    const { idToken } = await instance.acquireTokenSilent({
                        scopes: [],
                        account
                    })
                    const { data } = await callApiWithToken(account.localAccountId, idToken);
                    const { userDetails, isFound, userToken } = data;
                    const userType: keyof typeof UserType = data.userType;
                    if (!isFound) {
                        navigate(`/register`, { state: { userInfo: accounts[0] } });
                    }
                    else {
                        localStorage.setItem("token", userToken);
                        //TODO: Add userDetails to Store
                        navigate(`/${userType}`)
                    }
                }
            }
            catch (error) {
                // in case if silent token acquisition fails, fallback to an interactive method
                if (error instanceof InteractionRequiredAuthError) {
                    //TODO: Do login again, this time with instance.acquireTokenPopup method
                    
                }
            }
        }
        performLogin()

    }, [account, inProgress, instance]);

    return (
        <>
            <UnauthenticatedTemplate>
                <button onClick={() => instance.loginPopup(loginRequest)}>Login with google</button>
                <button onClick={() => navigate(`/register`, { state: { userInfo: { email: "mynameis@gmail.com" } } })}>Register</button>
            </UnauthenticatedTemplate>
        </>
    )
}

export default Login;