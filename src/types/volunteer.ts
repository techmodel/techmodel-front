export interface Volunteer {
  first_name: string;
  last_name: string;
  languages: string[];
  gender?: 'זכר' | 'נקבה' | string;
  shortDescription?: string;
  company_roles: string;
  company_name?: string;
  email?: string;
  phone?: string;
  profilePictureLocation: string;
}
