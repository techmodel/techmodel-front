export interface Volunteer {
    name: string;
    languages: string[];
    gender?: 'זכר' | 'נקבה' | string;
    shortDescription?: string;
    occupation: {
        role: string;
        employer?: string;
    };
    contactDetails: {
        emailAddress?: string;
        phoneNumber?: string;
    };
}
