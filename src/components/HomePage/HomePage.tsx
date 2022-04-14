import VolunteerList from '../VolunteerList';
import FilterBar from '../FilterBar';

import { Home } from './HomePage.styles';
import volunteerList from '../../mockData/volunteerList';
import { useStringFilter } from '../FilterBar/FilterRow/filterInputs/stringFilter/stringFilterHook';
import { useMultiSelectFilter } from '../FilterBar/FilterRow/filterInputs/multiSelectFilter/multiSelectFilterHook';
import { FieldMapping } from '../FilterBar/FilterBar';

const HomePage = () => {
  const filters = getFilters();
  return (
    <Home>
      <VolunteerList
<<<<<<< HEAD
        volunteers={volunteerList}
      />
      <FilterBar filters={filters} />
=======
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
>>>>>>> 08b9beacdfaa18a2a51420f1bfcbab8cea39a3d9
    </Home>
  );
};

export default HomePage;


function getFilters(): FieldMapping {
  return {
    nameProps: useStringFilter('name', 'שם מתנדב'),
    areaProps: useMultiSelectFilter('area', 'איזור'),
  };
}