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

const VolunteerSignUp = ({
  fieldsParam,
  formValues,
  handleInputChange,
  handleComplexInputChange,
}: {
  fieldsParam: VolunteerFieldsParams;
  formValues: any;
  handleInputChange: any;
  handleComplexInputChange: any;
}) => {
  return (
    <Grid container alignItems='center' justify='center' direction='column'>
      <Autocomplete
        id={'companyRole'}
        multiple
        options={fieldsParam.companyRole}
        renderInput={(params) => <TextField {...params} label={'תפקיד בחברה'} variant='outlined' />}
        style={{ width: 270 }}
        value={formValues['companyRole']}
        onChange={handleComplexInputChange('companyRole')}
      />
      <Autocomplete
        id={'lectureFocus'}
        multiple
        options={fieldsParam.lectureFocus}
        renderInput={(params) => <TextField {...params} label={'תחום ההרצאה'} variant='outlined' />}
        style={{ width: 270 }}
        value={formValues['lectureFocus']}
        onChange={handleComplexInputChange('lectureFocus')}
      />
      <Autocomplete
        id={'proficiency'}
        multiple
        options={fieldsParam.proficiency}
        renderInput={(params) => <TextField {...params} label={'מומחיות'} variant='outlined' />}
        style={{ width: 270 }}
        value={formValues['proficiency']}
        onChange={handleComplexInputChange('proficiency')}
      />
    </Grid>
  );
};
export default VolunteerSignUp;
