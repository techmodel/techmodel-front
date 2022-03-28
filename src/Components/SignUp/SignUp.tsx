import { Grid, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React, { useState } from 'react';
import { ProfileFieldsParams, VolunteerFieldsParams } from '../../Types/ProfileParams.types';
import { UserFields } from '../../Types/UserFields.types';
import VolunteerSignUp from './VolunteerSignUp';

const SignUpForm = ({ fieldsParam, userType }: { fieldsParam: ProfileFieldsParams; userType: string }) => {
  const [formValues, setFormValues] = useState<UserFields>({ gender: '', populationType: [], language: [], eventType: [], name: '' });

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
        <TextField required id={'name'} label='שם' onChange={handleInputChange} name={'name'} value={formValues['name']} />
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
          id={'eventType'}
          multiple
          options={fieldsParam.eventType}
          renderInput={(params) => <TextField {...params} label={'סוג ההרצאה'} variant='outlined' />}
          style={{ width: 270 }}
          value={formValues['eventType']}
          onChange={handleComplexInputChange('eventType')}
        />
        {userType === 'Volunteer' ? (
          <VolunteerSignUp
            fieldsParam={fieldsParam as VolunteerFieldsParams}
            formValues={formValues}
            handleInputChange={handleInputChange}
            handleComplexInputChange={handleComplexInputChange}
          />
        ) : null}
        <Button variant='contained' color='primary' type='submit'>
          Submit
        </Button>
      </Grid>
    </form>
  );
};
export default SignUpForm;
