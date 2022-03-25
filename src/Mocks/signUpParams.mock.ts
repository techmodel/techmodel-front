import { SchoolManagerFieldsParams, VolunteerFieldsParams } from '../Types/ProfileParams.types';

export const getSchoolManagerSignUpParams : SchoolManagerFieldsParams = {
    gender: ['זכר'],
    geoArea: ['צפון','דרום'],
    schoolType: ['חטיבה','תיכון','יסודי'],
    studentsAmount: ['הרבה','קצת'],
    language: ['עברית', 'ערבית', 'אנגלית'],
    lectureType: ['סיור', 'זום', 'פרונטלי'],
    populationType: ['חרדים', 'ערבים', 'נשים'],
}