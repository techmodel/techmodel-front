import axios from 'axios';
import settings from 'settings';
import { UserType } from 'types/user';
import { SchoolType, SchoolCommunityType } from 'types/institution';
import { Language } from 'types/language';
import { City, District } from 'types/location';

const client = axios.create({baseURL: settings.backendUrl});

export const login = async (userId: string) => {
    try {
        const response = await client.post(settings.loginRoute, {userId});

        const { userDetails, isFound, userToken } = response.data;

        return { userDetails, isFound, userToken };
    }
    catch (error) {
        console.error(error);
        return { isFound: false };
    }
}

export const register = async (
    userType: keyof typeof UserType,
    email: string,
    firstName: string,
    lastName: string,
    phoneNum: string,
    schoolName: string,
    schoolType: keyof typeof SchoolType,
    schoolCommunityType: keyof typeof SchoolCommunityType,
    schoolLanguage: keyof typeof Language,
    schoolLocation: keyof typeof District,
    schoolCity: keyof typeof City,
    schoolAddress: string,
    schoolRelatedProg: string,
    companyName: string,
    volunteeringProgramName: string,
) => {
    try {
        const response = await client.post(settings.registerRoute, {
            userType,
            email,
            firstName,
            lastName,
            phoneNum,
            schoolName,
            schoolType,
            schoolCommunityType,
            schoolLanguage,
            schoolLocation,
            schoolCity,
            schoolAddress,
            schoolRelatedProg,
            companyName,
            volunteeringProgramName,
        });

        const { userDetails, userToken } = response.data;

        localStorage.setItem('token', userToken);

        return { userDetails, userToken };
    }
    catch (error) {
        console.error(error);
    }
}
