import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';
import HomePage from './components/HomePage/HomePage';
import App from './App';
import ThemeSwitchProvider from './theme/ThemeSwitchProvider';
import ThemeSwitchContext from './theme/ThemeSwitchContext';
import { ThemeProvider } from 'styled-components';
import themes from './theme/themes';
import { GlobalStyles } from './theme/GlobalStyles';
console.log(themes)
const client = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={client}>
    <ThemeSwitchProvider>
      <ThemeSwitchContext.Consumer>
        {({theme}) => <ThemeProvider theme={themes[theme]}>
          <GlobalStyles />
          <BrowserRouter>
            <App />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='volunteer' element={null} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>}
      </ThemeSwitchContext.Consumer>
    </ThemeSwitchProvider>
  </QueryClientProvider>,
  document.getElementById('root'),
);
