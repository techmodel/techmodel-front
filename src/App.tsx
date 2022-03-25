import React from 'react';
import SignUp from './Components/SignUp/SignUp';
import { getSchoolManagerSignUpParams } from './Mocks/signUpParams.mock';

const App = () => {
  return <SignUp fieldsParam={getSchoolManagerSignUpParams} />;
};

export default App;
