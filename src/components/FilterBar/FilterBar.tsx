import React, { useState } from 'react';
import FilterIcon from '@material-ui/icons/FilterList';

import * as s from './FilterBar.styled';
import FilterRow from './FilterRow';
import StringFilter from './FilterRow/filterInputs/StringFilter';
import { FilterStateAccessor } from './FilterRow/FilterRow';

export interface FilterInputProps<T> {
    value: T;
    setValue: React.Dispatch<React.SetStateAction<T>>;
    isEnabled: boolean;
}

export interface FieldState<T> {
    value: T;
    isEnabled?: boolean;
}

function useFieldProps<T>(initialValue: T): FilterStateAccessor<T> {
    const [fieldState, setFieldState] = useState<FieldState<T>>({value: initialValue});
    return {fieldState, setFieldState};
}

const FilterBar: React.FC = () => {
    const nameProps = useFieldProps<string>('אלי');
    const roleProps = useFieldProps<string>('מפתח תוכנה');
    const employerProps = useFieldProps<string>('אינטל');
    return <s.FilterBarContainer>
        <s.FilterBarTitle>
            <FilterIcon/>
            &nbsp;
            סינון מתנדבים
        </s.FilterBarTitle>
        <FilterRow fieldTitle='שם מתנדב' {...nameProps}>
            {(props) => <StringFilter {...props} />}
        </FilterRow>
        <FilterRow fieldTitle='עיסוק' {...roleProps}>
            {(props) => <StringFilter {...props} />}
        </FilterRow>
        <FilterRow fieldTitle='מעסיק' {...employerProps}>
            {(props) => <StringFilter {...props} />}
        </FilterRow>
    </s.FilterBarContainer>;
}

export default FilterBar;
