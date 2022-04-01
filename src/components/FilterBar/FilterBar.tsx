import React, { useCallback, useEffect, useState } from 'react';
import * as s from './FilterBar.styled';
import FilterRow from './FilterRow';
import StringFilter from './FilterRow/filterInputs/StringFilter';
import { FilterStateAccessor } from './FilterRow/FilterRow';
import MultiSelectFilter from './FilterRow/filterInputs/MultiSelectFilter';
import { Filter } from '@mui/icons-material';

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

export default FilterBar;
