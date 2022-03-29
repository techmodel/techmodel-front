import React, { useState } from 'react';
import FilterIcon from '@material-ui/icons/FilterList';

import * as s from './FilterBar.styled';
import FilterRow from './FilterRow';

const FilterBar: React.FC = () => {
    const [opa, setOpan] = useState(false);
    return <s.FilterBarContainer>
        <s.FilterBarTitle>
            <FilterIcon/>
            &nbsp;
            סינון מתנדבים
        </s.FilterBarTitle>
        <FilterRow initialValue='בוב' fieldTitle='שם מתנדב' setFilterValue={(v) => console.log(v)}/>
    </s.FilterBarContainer>
};

export default FilterBar;
