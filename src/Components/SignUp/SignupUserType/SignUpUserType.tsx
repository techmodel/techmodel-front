import React from 'react';
import { signUpUserType } from '../../../types/SignUp.types';
import * as s from './SignUpUserType.styles';
import UserType from './UserType/UserType';

const SignUpUserType = ({ userTypes }: { userTypes: signUpUserType[] }) => {
  return <s.SignUpFormUserType>{userTypes.map((userType: any) => UserType((userType = { userType })))}</s.SignUpFormUserType>;
};
export default SignUpUserType;
