import { Grid, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { VolunteerFieldsParams } from '../../Types/ProfileParams.types';

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
        id={'event'}
        multiple
        options={fieldsParam.eventFocus}
        renderInput={(params) => <TextField {...params} label={'תחום ההרצאה'} variant='outlined' />}
        style={{ width: 270 }}
        value={formValues['eventFocus']}
        onChange={handleComplexInputChange('event')}
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
