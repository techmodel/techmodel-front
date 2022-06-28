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
    volunteer = 'volunteer',
    principle = 'principle',
    director = 'director',
}

export type LoginResponse = {
    isFound: boolean;
    userDetails?: { [key: string]: boolean | number | string; };
    userToken?: string;
}

export type RegisterResponse = {
    userDetails: { [key: string]: boolean | number | string; };
    userToken: string;
} | null
