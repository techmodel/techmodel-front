export type UserFields = {
    gender: string,
    populationType: string[];
    language: string[];
    eventType: string[];
    name: string;
}

export interface VolunteerFields extends UserFields {
    geoArea: string[];
    companyName: string;
    companyRole: string[];
    eventFocus: string;
    proficiency: string[];
}

export interface SchoolFields extends UserFields {
    schoolName : string;
    schoolType: string;
    geoArea: string;
    studentsAmount: string;
}