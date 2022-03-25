export type UserFields = {
    gender: string,
    populationType: string[];
    language: string[];
    lectureType: string[];
}

export interface VolunteerFields extends UserFields {
    geoArea: string[];
    company: string;
    companyRole: string[];
    lectureFocus: string;
    proficiency: string[];
}

export interface SchoolFields extends UserFields {
    schoolName : string;
    schoolType: string;
    geoArea: string;
    studentsAmount: string;
}