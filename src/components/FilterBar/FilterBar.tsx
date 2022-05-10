import React, { useCallback, useEffect, useState } from 'react';
import FilterIcon from '@mui/icons-material/FilterList';

import * as s from './FilterBar.styled';
import FilterRow from './FilterRow';
import StringFilter from './FilterRow/filterInputs/stringFilter/StringFilter';
import MultiSelectFilter from './FilterRow/filterInputs/multiSelectFilter/MultiSelectFilter';
import { FilterProps } from './FilterRow/filterInputs/hooks';

export interface FieldMapping {
  areaProps: FilterProps<String[]>;
}

interface FilterBarProps {
  filters: FieldMapping;
}

const areaOptions = [
'מחוז צפון',
'מחוז חיפה',
'מחוז מרכז',
'מחוז ירושלים',
'מחוז יהודה ושומרון',
'מחוז דרום',
]

const FilterBar = ({ filters }: FilterBarProps) => {
  const { areaProps } = filters;

  return (
    <s.FilterBarContainer>
      <s.FilterBarTitle>
        <FilterIcon />
        &nbsp; סינון מתנדבים
      </s.FilterBarTitle>
      <s.FilterBarRowsContainer>
        <FilterRow {...areaProps}>{(props) => <MultiSelectFilter {...props} options={areaOptions} />}</FilterRow>
      </s.FilterBarRowsContainer>
    </s.FilterBarContainer>
  );
};

export default FilterBar;
