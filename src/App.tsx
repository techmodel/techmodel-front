import React from 'react';
import SignUpContainer from './Components/SignUp/SignUpContainer/SignUp.container';
import { getSchoolManagerSignUpParams } from './Mocks/signUpParams.mock';

const App = () => {
  return <SignUpContainer fieldsParam={getSchoolManagerSignUpParams} userType={'SchoolManager'} />;
};

export default App;
