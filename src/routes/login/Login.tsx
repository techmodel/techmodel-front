import { useEffect } from 'react';
import axios from "axios"
import { UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import { useNavigate } from 'react-router-dom';
import { loginRequest } from '../../config/auth.config';
import { UserType } from '../../types/user'




const Login = () => {
    const { instance, accounts } = useMsal();
    const navigate = useNavigate();
    useEffect(() => {

        const getData = async () => {
            try {

                const response = await axios.post('http://localhost:8080/api/login', {
                    userId: accounts[0].localAccountId
                });
                const { userDetails, isFound, userToken } = response.data;
                const userType: keyof typeof UserType = response.data.userType;
                if (!isFound) {
                    navigate(`/register`, {state:{userInfo: accounts[0]}});
                }
                else {
                    localStorage.setItem("token", userToken);
                    //TODO: Add userDetails to Store
                    navigate(`/${userType}`)
                }
            } catch (err) {
                navigate(`/`)
            }
        }
        if (accounts.length > 0) {
            getData();
        }
    }, [])

    return (
        <>
            <UnauthenticatedTemplate>
                <button onClick={() => instance.loginRedirect(loginRequest)}>Login with google</button>
                <button onClick={() => navigate(`/register`, {state:{userInfo: {email: "mynameis@gmail.com"}}})}>Register</button>
            </UnauthenticatedTemplate>
        </>
    )
}

export default Login;