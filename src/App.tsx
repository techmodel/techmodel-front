import React from 'react';
import SignUpUserType from './components/SignUp/SignupUserType/SignUpUserType';
import { signUpOptions } from './mocks/signUpParams.mock';

const App = () => {
  return <SignUpUserType userTypes={signUpOptions} />;
};

export default App;
