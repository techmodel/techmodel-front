export interface User {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    pictureLocation: string;
    gender: 'זכר' | 'נקבה';
    userType: string;
    languages: string[];
    populationType: string;
    companyName: string;
    companyRole: string;
    geoArea: string;
}

export enum UserType {
    volunteer,
    principle,
    director,
}

export type LoginResponse = {
    isFound: boolean;
    userDetails?: any;
    userToken?: string;
}
