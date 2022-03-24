import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';
import HomePage from './components/HomePage/HomePage';
import App from './App';

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
