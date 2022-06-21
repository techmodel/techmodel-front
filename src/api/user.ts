import axios from 'axios';
import settings from 'settings';

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
) => {
    try {
        const response = await client.post(settings.registerRoute, {});

        const {} = response.data;

        return {};
    }
    catch (error) {
        console.error(error);
    }
}
