import { Grid, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { VolunteerFieldsParams } from '../../../Types/ProfileParams.types';
import { VolunteerFields } from '../../../Types/UserFields.types';

const VolunteerSignUp = ({
  fieldsParam,
  formValues,
  handleInputChange,
  handleComplexInputChange,
}: {
  fieldsParam: VolunteerFieldsParams;
  formValues: VolunteerFields;
  handleInputChange: any;
  handleComplexInputChange: any;
}) => {
  return (
    <Grid>
      <Autocomplete
        id={'companyRole'}
        multiple
        options={fieldsParam.companyRole}
        renderInput={(params) => <TextField {...params} label={'תפקיד בחברה'} variant='outlined' />}
        value={formValues['companyRole']}
        onChange={handleComplexInputChange('companyRole')}
      />
      <Autocomplete
        id={'event'}
        multiple
        options={fieldsParam.eventFocus}
        renderInput={(params) => <TextField {...params} label={'תחום ההרצאה'} variant='outlined' />}
        value={formValues['eventFocus']}
        onChange={handleComplexInputChange('event')}
      />
      <Autocomplete
        id={'proficiency'}
        multiple
        options={fieldsParam.proficiency}
        renderInput={(params) => <TextField {...params} label={'מומחיות'} variant='outlined' />}
        value={formValues['proficiency']}
        onChange={handleComplexInputChange('proficiency')}
      />
    </Grid>
  );
};
export default VolunteerSignUp;
