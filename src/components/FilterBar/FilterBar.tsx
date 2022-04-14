import React, { useCallback, useEffect, useState } from 'react';
import FilterIcon from '@material-ui/icons/FilterList';

import * as s from './FilterBar.styled';
import FilterRow from './FilterRow';
import StringFilter from './FilterRow/filterInputs/stringFilter/StringFilter';
import { FilterStateAccessor } from './FilterRow/FilterRow';
import MultiSelectFilter from './FilterRow/filterInputs/multiSelectFilter/MultiSelectFilter';
import { FilterProps } from './FilterRow/filterInputs/hooks';

export interface FilterInputProps<T> {
    value: T;
    setValue: React.Dispatch<React.SetStateAction<T>>;
    isEnabled: boolean;
    onInteract?: () => void;
    setIsEmpty: (isEmpty: boolean) => void;
}

export interface FieldState<T> {
    value: T;
    isEnabled?: boolean;
    isEmpty?: boolean;
}

function useFieldProps<T>(initialValue: T, fieldName: string): FilterStateAccessor<T> {
    const [fieldState, setFieldState] = useState<FieldState<T>>({value: initialValue, isEmpty: !!initialValue, isEnabled: !!initialValue});
    const onInteract = useCallback(() => setFieldState(prev => ({...prev, isEnabled: true})), []);
    const setIsEmpty = useCallback((isEmpty: boolean) => {
        setFieldState(prev => ({...prev, isEmpty, isEnabled: !isEmpty}));
    }, []);
    const getFilter: () => Filter<T> = useCallback(() => ({
        fieldName,
        value: fieldState.value,
    }), [fieldState.value]);
    return {getFilter, fieldState, setFieldState, onInteract, setIsEmpty};
}

export interface Filter<T> {
    fieldName: string;
    value: T;
}

export interface FieldMapping {
    nameProps: FilterProps<string>;
    areaProps: FilterProps<String[]>;
}

interface FilterBarProps {
    filters: FieldMapping;
    setFilters?: React.Dispatch<React.SetStateAction<Filter<any>[]>>;
}

const FilterBar = ({filters}: FilterBarProps) => {
    const {nameProps, areaProps} = filters;
    // const nameProps = useFieldProps<string>('אלי', 'name');
    // const roleProps = useFieldProps<string>('מפתח תוכנה', 'role');
    // const employerProps = useFieldProps<string>('אינטל', 'employer');
    // const languages = useFieldProps<string[]>(['עברית'], 'languages');
    // const areaProps = useFieldProps<string[]>([], 'areas');
    // const filters = [nameProps, roleProps, employerProps, languages, areaProps]
    //     .filter(({fieldState}) => fieldState.isEnabled && !fieldState.isEmpty)
    //     .map(field => field.getFilter());


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
            {/* <FilterRow fieldTitle='עיסוק' {...roleProps}>
                {(props) => <StringFilter {...props} />}
            </FilterRow>
            <FilterRow fieldTitle='מעסיק' {...employerProps}>
                {(props) => <StringFilter {...props} />}
            </FilterRow>
            <FilterRow fieldTitle='שפות' {...languages}>
                {(props) => <MultiSelectFilter
                    {...props}
                    options={['עברית', 'אנגלית']}
                />}
            </FilterRow> */}
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
