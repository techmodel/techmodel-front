export type ProfileFieldsParams = {
    gender: string[],
    populationType: string[];
    language: string[];
    lectureType: string[];
    geoArea: string[];
}

export interface VolunteerFieldsParams extends ProfileFieldsParams {
    companyRole: string[];
    lectureFocus: string[];
    proficiency: string[];
}

export interface SchoolManagerFieldsParams extends ProfileFieldsParams {
    schoolType: string[];
    studentsAmount: string[];
}