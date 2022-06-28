import axios from 'axios';
import settings from 'settings';
import { LoginResponse, RegisterResponse, UserType } from 'types/user';
import { SchoolType, SchoolCommunityType } from 'types/institution';
import { Language } from 'types/language';
import { City, District } from 'types/location';

const client = axios.create({baseURL: settings.backendUrl});

export const login = async (userId: string): Promise<LoginResponse> => {
    try {
        const {data} = await client.post<LoginResponse>(settings.loginRoute, {userId});
        return data;
    }
    catch (error) {
        console.error(error);
        return { isFound: false };
    }
}

export const register = async (
    userType: UserType,
    email: string,
    firstName: string,
    lastName: string,
    phoneNum: string,
    schoolName: string,
    schoolType: SchoolType,
    schoolCommunityType: SchoolCommunityType,
    schoolLanguage: Language,
    schoolLocation: District,
    schoolCity: City,
    schoolAddress: string,
    schoolRelatedProg: string,
    companyName: string,
    volunteeringProgramName: string,
): Promise<RegisterResponse> => {
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
        return null;
    }
}

const userApi = {
    login,
    register,
};

export default userApi;
