import VolunteerList from '../VolunteerList';
import FilterBar from '../FilterBar';
import { Home } from './HomePage.styles';
import volunteerList from '../../mockData/volunteerList';
import { useStringFilter } from '../FilterBar/FilterRow/filterInputs/stringFilter/stringFilterHook';
import { useMultiSelectFilter } from '../FilterBar/FilterRow/filterInputs/multiSelectFilter/multiSelectFilterHook';
import { FieldMapping } from '../FilterBar/FilterBar';
import env from '../../env';
import { useQuery } from 'react-query';
import { ApiFilter, FilterProps } from '../FilterBar/FilterRow/filterInputs/hooks';
import { searchEntity } from '../../api/search';
import { useState, useEffect } from 'react';

const HomePage = () => {
  const filters = getFilters();
  const filtersList = Object.values(filters)
    .filter((filter: FilterProps<any>) => filter.isRelevant)
    .map((filter: FilterProps<any>) => filter.toJson());

  const volunteersQuery = useQuery(
    ['volunteers', ...filtersList.map((filter: ApiFilter<any>) => JSON.stringify(filter.value))],
    () => searchEntity('volunteer', filtersList),
    { enabled: true },
  );
<<<<<<< HEAD

  const [entity, setEntity] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await searchEntity('manager', filtersList);
      setEntity(data);
    };

    fetchData();
  }, []);

  return (
    <Home>
      {console.log(filtersList)}

      {entity && (
        <VolunteerList
          //TODO: get the userType from the login
          volunteers={entity}
        />
      )}
=======
  console.log(volunteersQuery);
  return (
    <Home>
      <VolunteerList volunteers={volunteerList} />
>>>>>>> dev
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
