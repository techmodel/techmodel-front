import React, { useCallback, useEffect, useState } from 'react';
import * as s from './FilterBar.styled';
import FilterRow from './FilterRow';
import StringFilter from './FilterRow/filterInputs/stringFilter/StringFilter';
import { FilterStateAccessor } from './FilterRow/FilterRow';
<<<<<<< HEAD
import MultiSelectFilter from './FilterRow/filterInputs/multiSelectFilter/MultiSelectFilter';
import { Language } from '@material-ui/icons';
import { FilterProps } from './FilterRow/filterInputs/hooks';
=======
import MultiSelectFilter from './FilterRow/filterInputs/MultiSelectFilter';
import { Filter } from '@mui/icons-material';
>>>>>>> 08b9beacdfaa18a2a51420f1bfcbab8cea39a3d9

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

<<<<<<< HEAD
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

    console.log(filters)
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
=======
function useFieldProps<T>(initialValue: T): FilterStateAccessor<T> {
  const [fieldState, setFieldState] = useState<FieldState<T>>({ value: initialValue, isEmpty: !!initialValue, isEnabled: !!initialValue });
  const onInteract = useCallback(() => setFieldState((prev) => ({ ...prev, isEnabled: true })), []);
  const setIsEmpty = useCallback((isEmpty: boolean) => {
    setFieldState((prev) => ({ ...prev, isEmpty, isEnabled: !isEmpty }));
  }, []);
  return { fieldState, setFieldState, onInteract, setIsEmpty };
}

const FilterBar: React.FC = () => {
  const nameProps = useFieldProps<string>('אלי');
  const roleProps = useFieldProps<string>('מפתח תוכנה');
  const employerProps = useFieldProps<string>('אינטל');
  const languages = useFieldProps<string[]>(['עברית']);

  return (
    <s.FilterBarContainer>
      <s.FilterBarTitle>
        <Filter />
        &nbsp; סינון מתנדבים
      </s.FilterBarTitle>
      <s.FilterBarRowsContainer>
        <FilterRow fieldTitle='שם מתנדב' {...nameProps}>
          {(props) => <StringFilter {...props} />}
        </FilterRow>
        <FilterRow fieldTitle='עיסוק' {...roleProps}>
          {(props) => <StringFilter {...props} />}
        </FilterRow>
        <FilterRow fieldTitle='מעסיק' {...employerProps}>
          {(props) => <StringFilter {...props} />}
        </FilterRow>
        <FilterRow fieldTitle='שפות' {...languages}>
          {(props) => <MultiSelectFilter {...props} options={['עברית', 'אנגלית']} />}
        </FilterRow>
      </s.FilterBarRowsContainer>
    </s.FilterBarContainer>
  );
};
>>>>>>> 08b9beacdfaa18a2a51420f1bfcbab8cea39a3d9

export default FilterBar;
