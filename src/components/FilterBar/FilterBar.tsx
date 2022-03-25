import React from 'react';
import FilterIcon from '@material-ui/icons/Search';

import * as s from './FilterBar.styled';

const FilterBar: React.FC = () => {
    return <s.FilterBarContainer>
        <s.FilterBarTitle>
            <FilterIcon/>
            &nbsp;
            פילטור
        </s.FilterBarTitle>
    </s.FilterBarContainer>
};

export default FilterBar;
