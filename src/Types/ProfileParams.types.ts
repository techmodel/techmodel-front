export type ProfileFieldsParams = {
  gender: string[];
  populationType: string[];
  language: string[];
  eventType: string[];
  geoArea: string[];
};

export interface VolunteerFieldsParams extends ProfileFieldsParams {
  companyRole: string[];
  eventFocus: string[];
  proficiency: string[];
}

export interface SchoolManagerFieldsParams extends ProfileFieldsParams {
    schoolType: string[];
    studentsAmount: string[];
}