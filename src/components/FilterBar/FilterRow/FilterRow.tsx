import { Checkbox } from '@mui/material';
import React from 'react';
import { FilterProps } from './filterInputs/hooks';

import * as s from './FilterRow.styled';


interface FilterRowProps<T> extends FilterProps<T> {
    children: (props: FilterProps<T>) => React.ReactNode;
}

function FilterRow<T>({children, ...filterProps}: FilterRowProps<T>) {
    return <div>
        <s.FilterTitleRow>
        <Checkbox
            checked={filterProps.isEnabled}
            onChange={(_, checked)=> filterProps.setIsEnabled(checked)}
        />
            {filterProps.fieldTitle}
        </s.FilterTitleRow>
        {children(filterProps)}
    </div>;
}

export default FilterRow;
