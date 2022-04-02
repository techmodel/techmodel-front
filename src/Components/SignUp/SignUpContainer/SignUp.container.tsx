import { Container } from '@material-ui/core';
import React from 'react';
import { ProfileFieldsParams } from '../../../Types/ProfileParams.types';
import SignUpForm from '../SignUpForm/SignUp';
import * as s from './SignUp.container.styles';

const SignUpContainer = ({ fieldsParam, userType }: { fieldsParam: ProfileFieldsParams; userType: string }) => {
  return (
    <s.SignUpContainer>
      <Container>
        <SignUpForm fieldsParam={fieldsParam} userType={userType} />
      </Container>
    </s.SignUpContainer>
  );
};
export default SignUpContainer;
