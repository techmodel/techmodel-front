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
import Layout from './Layout';
import SignUpContainer from './components/SignUp/SignUpContainer/SignUp.container';
import SignUpUserType from './components/SignUp/SignupUserType/SignUpUserType';
import { getSchoolManagerSignUpParams, getVolunteerSignUpParams, signUpOptions } from './mocks/signUpParams.mock';
import SignUpDetailsForm from './components/SignUp/SignUpDetails/SignUpDetailsForm/SignUpDetailsForm';

const client = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={client}>
    <ThemeSwitchProvider>
      <ThemeSwitchContext.Consumer>
        {({ theme }) => (
          <ThemeProvider theme={themes[theme]}>
            <GlobalStyles />

            <Layout>
              <BrowserRouter>
                <Routes>
                  <Route path='/signUp' element={<SignUpUserType userTypes={signUpOptions} />} />
                  <Route path='/signUp/volunteer' element={<SignUpDetailsForm fieldsParam={getVolunteerSignUpParams} userType={'Volunteer'} />} />
                  <Route
                    path='/signUp/schoolManager'
                    element={<SignUpDetailsForm fieldsParam={getSchoolManagerSignUpParams} userType={'SchoolManager'} />}
                  />
                </Routes>
              </BrowserRouter>
            </Layout>
          </ThemeProvider>
        )}
      </ThemeSwitchContext.Consumer>
    </ThemeSwitchProvider>
  </QueryClientProvider>,
  document.getElementById('root'),
);
