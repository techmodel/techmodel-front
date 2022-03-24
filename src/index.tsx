import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import HomePage from './components/HomePage/HomePage';

import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const client = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={client}>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='volunteer' element={null} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>,
  document.getElementById('root'),
);
