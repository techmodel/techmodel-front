import { SchoolManagerFieldsParams, VolunteerFieldsParams } from '../types/ProfileParams.types';
import { signUpOption } from '../types/SignUp.types';

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

export const signUpOptions: signUpOption[] = [
  {
    title: 'מנהל',
    description: 'מצא מתנדבים מתאימים לבית ספר',
    image:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Felementary-school-kids&psig=AOvVaw097BTVSE95dyyoJt0CWNK7&ust=1649002878456000&source=images&cd=vfe&ved=0CAwQjhxqFwoTCLDa08_k9fYCFQAAAAAdAAAAABAD',
  },
];