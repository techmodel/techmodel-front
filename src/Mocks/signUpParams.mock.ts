import { SchoolManagerFieldsParams, VolunteerFieldsParams } from '../Types/ProfileParams.types';

export const getSchoolManagerSignUpParams: SchoolManagerFieldsParams = {
  gender: ['זכר'],
  geoArea: ['צפון', 'דרום'],
  schoolType: ['חטיבה', 'תיכון', 'יסודי'],
  studentsAmount: ['הרבה', 'קצת'],
  language: ['עברית', 'ערבית', 'אנגלית'],
  eventType: ['סיור', 'זום', 'פרונטלי'],
  populationType: ['חרדים', 'ערבים', 'נשים'],
};

export const getVolunteerSignUpParams: VolunteerFieldsParams = {
  gender: ['זכר'],
  geoArea: ['צפון', 'דרום'],
  language: ['עברית', 'ערבית', 'אנגלית'],
  eventType: ['סיור', 'זום', 'פרונטלי'],
  populationType: ['חרדים', 'ערבים', 'נשים'],
  companyRole: ['א', 'c'],
  eventFocus: ['א', 'c'],
  proficiency: ['t', 'b'],
};