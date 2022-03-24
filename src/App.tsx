import React, { useState } from 'react';
import Offer from './components/Offer';
import OfferList from './components/OfferList';
import { config } from './config';
import { PublicClientApplication } from '@azure/msal-browser';
import { LocalDiningOutlined } from '@material-ui/icons';
import { render } from '@testing-library/react';
import { Button } from '@material-ui/core';
import MenuDrawer from './components/MenuDrawer/MenuDrawer';
/* eslint-disable */

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [publicClientApplication, setPublicClientApplication] = useState(
    new PublicClientApplication({
      auth: {
        clientId: config.appId,
        redirectUri: config.redirectUrl,
        authority: config.authority,
      },
      cache: {
        cacheLocation: 'sessionStorage',
        storeAuthStateInCookie: true,
      },
    }),
  );

  const login = async () => {
    try {
      await publicClientApplication.loginPopup({
        scopes: config.scopes,
        prompt: 'select_account',
      });
      setIsAuthenticated(true);
    } catch (err: any) {
      setError(err);
      setUser({});
      setIsAuthenticated(false);
    }
  };

  const logout = async () => {
    publicClientApplication.logout();
  };
  return isAuthenticated ? <MenuDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} /> : <button onClick={login}>Log in</button>;
};

export default App;
