import { SchoolManagerFieldsParams, VolunteerFieldsParams } from '../types/ProfileParams.types';
import { signUpUserType } from '../types/SignUp.types';

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

export const signUpOptions: signUpUserType[] = [
  {
    title: 'מנהל בית ספר',
    description: 'מצא מתנדבים מתאימים לבית ספר',
    image:
      'https://www.thoughtco.com/thmb/dHb9-FBMkqRugDiEgTiK9QhXFeA=/3719x3719/smart/filters:no_upscale()/teacher-standing-in-front-of-a-class-of-raised-hands-dv1940073-5a88dfc9875db90036f2af75.jpg',
  },
  {
    title: 'מתנדב',
    description: 'התנדב למען דור העתיד',
    image:
      'https://investinisrael.gov.il/inthenewsimg/104513857-Two_young_women_entrepreneurs.530x298.jpg',
  },
];