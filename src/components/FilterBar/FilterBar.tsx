import React, { useState } from 'react';
import FilterIcon from '@material-ui/icons/FilterList';

import * as s from './FilterBar.styled';
import FilterRow from './FilterRow';
import StringFilter from './FilterRow/filterInputs/StringFilter';

export interface FilterInputProps<T> {
    value: T;
    setValue: React.Dispatch<React.SetStateAction<T>>;
    isEnabled: boolean;
}

const FilterBar: React.FC = () => {
    return <s.FilterBarContainer>
        <s.FilterBarTitle>
            <FilterIcon/>
            &nbsp;
            סינון מתנדבים
        </s.FilterBarTitle>
        <FilterRow initialValue='בוב' fieldTitle='שם מתנדב' setFilterValue={(v) => console.log(v)}>
            {(props) => <StringFilter {...props} />}
        </FilterRow>
        <FilterRow initialValue='מפתח תוכנה' fieldTitle='עיסוק' setFilterValue={(v) => console.log(v)}>
            {(props) => <StringFilter {...props} />}
        </FilterRow>
        <FilterRow initialValue='אינטל' fieldTitle='חברה' setFilterValue={(v) => console.log(v)}>
            {(props) => <StringFilter {...props} />}
        </FilterRow>
        
    </s.FilterBarContainer>
};

export default FilterBar;
