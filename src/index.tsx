import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const client = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={client}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='volunteer' element={null} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>,
  document.getElementById('root'),
);
