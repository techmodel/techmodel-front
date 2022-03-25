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
import Autocomplete from '@material-ui/lab/Autocomplete';
import { UserFields } from '../../Types/UserFields.types';
import { ProfileFieldsParams, VolunteerFieldsParams } from '../../Types/ProfileParams.types';
import VolunteerSignUp from './VolunteerSignUp';

const SignUpForm = ({ fieldsParam, userType }: { fieldsParam: VolunteerFieldsParams; userType: string }) => {
  const [formValues, setFormValues] = useState<UserFields>({ gender: '', populationType: [], language: [], lectureType: [] });

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
        <Autocomplete
          id={'gender'}
          options={fieldsParam.gender}
          renderInput={(params) => <TextField {...params} label={'מין'} variant='outlined' />}
          style={{ width: 270 }}
          value={formValues['gender']}
          onChange={handleComplexInputChange('gender')}
        />
        <Autocomplete
          id={'populationType'}
          multiple
          options={fieldsParam.populationType}
          renderInput={(params) => <TextField {...params} label={'סוג אוכלוסיה'} variant='outlined' />}
          style={{ width: 270 }}
          value={formValues['populationType']}
          onChange={handleComplexInputChange('populationType')}
        />
        <Autocomplete
          id={'language'}
          multiple
          options={fieldsParam.language}
          renderInput={(params) => <TextField {...params} label={'שפות'} variant='outlined' />}
          style={{ width: 270 }}
          value={formValues['language']}
          onChange={handleComplexInputChange('language')}
        />
        <Autocomplete
          id={'lectureType'}
          multiple
          options={fieldsParam.lectureType}
          renderInput={(params) => <TextField {...params} label={'סוג ההרצאה'} variant='outlined' />}
          style={{ width: 270 }}
          value={formValues['lectureType']}
          onChange={handleComplexInputChange('lectureType')}
        />
        {userType === 'Volunteer' ? VolunteerSignUp({ fieldsParam, formValues, handleInputChange, handleComplexInputChange }) : null}
        <Button variant='contained' color='primary' type='submit'>
          Submit
        </Button>
      </Grid>
    </form>
  );
};
export default SignUpForm;
