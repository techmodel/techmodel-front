import { Container, Grid, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React, { useState } from 'react';
import { ProfileFieldsParams, SchoolManagerFieldsParams, VolunteerFieldsParams } from '../../../Types/ProfileParams.types';
import { SchoolFields, UserFields, VolunteerFields } from '../../../Types/UserFields.types';
import SchoolManagerSignUp from '../SignUpOptions/SchoolManagerSignUp';
import { Wrapper } from './SignUp.container.styles';
import VolunteerSignUp from '../SignUpOptions/VolunteerSignUp';
import SignUpForm from '../SignUpForm/SignUp';

const SignUpContainer = ({ fieldsParam, userType }: { fieldsParam: ProfileFieldsParams; userType: string }) => {
  return (
    <Wrapper>
      <Container>
        <SignUpForm fieldsParam={fieldsParam} userType={userType} />
      </Container>
    </Wrapper>
  );
};
export default SignUpContainer;
