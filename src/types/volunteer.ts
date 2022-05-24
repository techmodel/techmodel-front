export interface Volunteer {
    name: string;
    languages: string[];
    gender?: 'זכר' | 'נקבה' | 'אחר';
    shortDescription?: string;
    occupation: {
        role: string;
        employer?: string;
    };
    contactDetails: {
        emailAddress?: string;
        phoneNumber?: string;
    };
    profilePictureLocation: string;
};
