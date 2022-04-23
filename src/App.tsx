import React from 'react';
import SignUpContainer from './components/SignUp/SignUpContainer/SignUp.container';
import { getSchoolManagerSignUpParams } from './mocks/signUpParams.mock';

const App = () => {
  return <SignUpContainer fieldsParam={getSchoolManagerSignUpParams} userType={'SchoolManager'} />;
};

export default App;
