import { Container } from '@material-ui/core';
import React from 'react';
import { ProfileFieldsParams } from '../../../types/ProfileParams.types';
import SignUpDetailsForm from '../SignUpDetails/SignUpDetailsForm/SignUpDetailsForm';
import * as s from './SignUp.container.styles';

const SignUpContainer = ({ fieldsParam, userType }: { fieldsParam: ProfileFieldsParams; userType: string }) => {
  return (
    <s.SignUpContainer>
      <Container>
        <h1>הרשמה</h1>
        <SignUpDetailsForm fieldsParam={fieldsParam} userType={userType} />
      </Container>
    </s.SignUpContainer>
  );
};
export default SignUpContainer;
