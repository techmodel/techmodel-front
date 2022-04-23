import { Grid, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { SchoolManagerFieldsParams } from '../../../../types/ProfileParams.types';
import { SchoolFields } from '../../../../types/UserFields.types';

const SchoolManagerSignUp = ({
  fieldsParam,
  formValues,
  handleInputChange,
  handleComplexInputChange,
}: {
  fieldsParam: SchoolManagerFieldsParams;
  formValues: SchoolFields;
  handleInputChange: any;
  handleComplexInputChange: any;
}) => {
  return (
    <Grid>
      <Autocomplete
        id={'schoolType'}
        options={fieldsParam.schoolType}
        renderInput={(params) => <TextField {...params} label={'שכבת גיל'} variant='outlined' />}
        value={formValues['schoolType']}
        onChange={handleComplexInputChange('schoolType')}
      />
      <Autocomplete
        id={'studentsAmount'}
        options={fieldsParam.studentsAmount}
        renderInput={(params) => <TextField {...params} label={'כמות תלמידים'} variant='outlined' />}
        value={formValues['studentsAmount']}
        onChange={handleComplexInputChange('event')}
      />
    </Grid>
  );
};
export default SchoolManagerSignUp;
