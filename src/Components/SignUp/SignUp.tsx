import { Grid, TextField } from '@material-ui/core';
import { Title } from '@material-ui/icons';
import React, { useState } from 'react';
import { Wrapper } from './SignUp.styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import { SignUpFields } from '../../Types/signUp.types';

const SignUpForm = () => {
  const [formValues, setFormValues] = useState<SignUpFields | {}>({});

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleComplexInputChange = (name: string) => (e: any, value: any) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(formValues);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Grid container alignItems='center' justify='center' direction='column'>
        <Button variant='contained' color='primary' type='submit'>
          Submit
        </Button>
      </Grid>
    </form>
  );
};
export default SignUpForm;
