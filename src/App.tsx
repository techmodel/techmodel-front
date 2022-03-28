import React from 'react';
import SignUp from './Components/SignUp/SignUp';
import { getSchoolManagerSignUpParams, getVolunteerSignUpParams } from './Mocks/signUpParams.mock';

const App = () => {
  return <SignUp fieldsParam={getSchoolManagerSignUpParams} userType={'SchoolManager'} />;
};

export default App;
