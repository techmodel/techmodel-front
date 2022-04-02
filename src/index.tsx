import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from './authConfig';
export const msalInstance = new PublicClientApplication(msalConfig);

const client = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={client}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App msalInstance={msalInstance} />} />
        <Route path='volunteer' element={null} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>,
  document.getElementById('root'),
);
