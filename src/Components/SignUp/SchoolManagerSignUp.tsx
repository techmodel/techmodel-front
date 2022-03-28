import { Grid, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { SchoolManagerFieldsParams } from '../../Types/ProfileParams.types';
import { SchoolFields } from '../../Types/UserFields.types';

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
    <Grid container alignItems='center' justify='center' direction='column'>
      <Autocomplete
        id={'schoolType'}
        options={fieldsParam.schoolType}
        renderInput={(params) => <TextField {...params} label={'שכבת גיל'} variant='outlined' />}
        style={{ width: 270 }}
        value={formValues['schoolType']}
        onChange={handleComplexInputChange('schoolType')}
      />
      <Autocomplete
        id={'studentsAmount'}
        options={fieldsParam.studentsAmount}
        renderInput={(params) => <TextField {...params} label={'כמות תלמידים'} variant='outlined' />}
        style={{ width: 270 }}
        value={formValues['studentsAmount']}
        onChange={handleComplexInputChange('event')}
      />
    </Grid>
  );
};
export default SchoolManagerSignUp;
