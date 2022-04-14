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
        volunteers={volunteerList}
      />
      <FilterBar filters={filters} />
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