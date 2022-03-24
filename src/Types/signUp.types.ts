export type SignUpFields = {
    gender: string,
    populationType: string[];
    language: string[];
    lectureType: string[];
}

export interface signUpVolunteerFields extends SignUpFields {
    geoArea: string[];
    company: string;
    companyRole: string[];
    lectureFocus: string;
    proficiency: string[];
}

export interface signUpSchoolFields extends SignUpFields {
    schoolName : string;
    schoolType: string;
    geoArea: string;
    studentsAmount: string;
    
}