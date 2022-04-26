import React, { useCallback, useEffect, useState } from 'react';
import FilterIcon from '@mui/icons-material/FilterList';

import * as s from './FilterBar.styled';
import FilterRow from './FilterRow';
import StringFilter from './FilterRow/filterInputs/stringFilter/StringFilter';
import MultiSelectFilter from './FilterRow/filterInputs/multiSelectFilter/MultiSelectFilter';
import { FilterProps } from './FilterRow/filterInputs/hooks';


export interface FieldMapping {
    nameProps: FilterProps<string>;
    areaProps: FilterProps<String[]>;
}

interface FilterBarProps {
    filters: FieldMapping;
}

const FilterBar = ({filters}: FilterBarProps) => {
    const {nameProps, areaProps} = filters;

    return <s.FilterBarContainer>
        <s.FilterBarTitle>
            <FilterIcon/>
            &nbsp;
            סינון מתנדבים
        </s.FilterBarTitle>
        <s.FilterBarRowsContainer>
            <FilterRow {...nameProps}>
                {(props) => <StringFilter {...props} />}
            </FilterRow>
            <FilterRow {...areaProps}>
                {(props) => <MultiSelectFilter
                    {...props}
                    options={['מרכז', 'דרום', 'צפון']}
                />}
            </FilterRow>
        </s.FilterBarRowsContainer>
    </s.FilterBarContainer>;
}

export default FilterBar;
