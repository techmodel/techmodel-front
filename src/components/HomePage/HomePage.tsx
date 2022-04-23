import VolunteerList from '../VolunteerList';
import FilterBar from '../FilterBar';

import { Home } from './HomePage.styles';

const HomePage = () => {
  return (
    <Home>
      <VolunteerList
        volunteers={[
          {
            name: 'ישראל ישראלי',
            occupation: {
              role: 'מנהל מוצר',
              employer: 'מייקרוסופט ישראל',
            },
            contactDetails: {
              phoneNumber: '054-202-1082',
              emailAddress: 'israel.israelli@gmail.com',
            },
            profilePictureLocation: 'https://www.mensjournal.com/wp-content/uploads/mf/1280-selfie.jpg?quality=86&strip=all',
            languages: ['עברית', 'אנגלית'],
            shortDescription: 'אני אוהב לטייל, ללכת לים, ורכיבה על אופני שטח',
          },
          {
            name: 'נעה כהן',
            occupation: {
              role: 'Software Engineer',
              employer: 'Intel',
            },
            contactDetails: {
              phoneNumber: '+054-753-9884',
              emailAddress: 'coenoa2@gmail.com',
            },
            languages: ['עברית', 'ערבית'],
            profilePictureLocation: 'https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg',
          },
          {
            name: 'צבי אהרון נחום',
            occupation: {
              role: 'Life coach',
              employer: 'Computer israel',
            },
            contactDetails: {
              phoneNumber: '054-202-1082',
              emailAddress: 'israel.israelli@gmail.com',
            },
            languages: ['עברית', 'ערבית'],
            profilePictureLocation: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
          },
          {
            name: 'דודו טל',
            occupation: {
              role: 'מובטל',
              employer: 'פריפריה',
            },
            contactDetails: {
              phoneNumber: '+054-222-7011(הוא פנוי בחורות 😉)',
              emailAddress: 'מה',
            },
            languages: ['עברית'],
          },
        ]}
      />
      <FilterBar />
    </Home>
  );
};

export default HomePage;
