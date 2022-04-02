import { LogLevel } from '@azure/msal-browser';

/**
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
export const b2cPolicies = {
    names: {
        signUpSignIn: 'B2C_1_policyT1',//<Sign Up Name - in the form of B2C_1_xxx>',
        forgotPassword: '<Forgot Password Name - in the form of B2C_1_xxx>',
        editProfile: '<Edit Profile Name - in the form of B2C_1_xxx>',
    },
    authorities: {
        signUpSignIn: {
            authority: 'https://techmodel.b2clogin.com/techmodel.onmicrosoft.com/B2C_1_policyT1',
        },
        forgotPassword: {
            authority: 'https://techmodel.b2clogin.com/techmodel.onmicrosoft.com/<Forgot Password Name - in the form of B2C_1_xxx>',
        },
        editProfile: {
            authority: 'https://techmodel.b2clogin.com/techmodel.onmicrosoft.com/<Edit Profile Name - in the form of B2C_1_xxx>',
        },
    },
    authorityDomain: 'techmodel.b2clogin.com',
}

/**
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md 
 */
export const msalConfig = {
    auth: {
        clientId: '4abc99dd-3509-40c3-abdb-53b29dae9d42', 
        authority: b2cPolicies.authorities.signUpSignIn.authority, 
        knownAuthorities: [b2cPolicies.authorityDomain], 
        redirectUri: '/',
        postLogoutRedirectUri: '/',
        navigateToLoginRequestUrl: false, 
    },
    cache: {
        cacheLocation: 'sessionStorage',
        storeAuthStateInCookie: false,
    },
    system: {	
        loggerOptions: {	
            loggerCallback: (level, message, containsPii) => {	
                if (containsPii) {		
                    return;		
                }		
                switch (level) {		
                    case LogLevel.Error:		
                        console.error(message);		
                        return;		
                    case LogLevel.Info:		
                        console.info(message);		
                        return;		
                    case LogLevel.Verbose:		
                        console.debug(message);		
                        return;		
                    case LogLevel.Warning:		
                        console.warn(message);		
                        return;
                    default:
                        return;
                }	
            },
        },
    },
};

/**
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
export const loginRequest = {
    scopes: [],
};