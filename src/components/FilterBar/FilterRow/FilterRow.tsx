<<<<<<< HEAD
import { Checkbox } from '@material-ui/core';
import React, { useCallback, useEffect, useState } from 'react';
import { FieldState, Filter, FilterInputProps } from '../FilterBar';
import { FilterProps } from './filterInputs/hooks';
=======
import { Checkbox } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { FieldState, FilterInputProps } from '../FilterBar';
>>>>>>> 08b9beacdfaa18a2a51420f1bfcbab8cea39a3d9

import * as s from './FilterRow.styled';

export interface FilterStateAccessor<T> {
<<<<<<< HEAD
    getFilter: () => Filter<T>;
    fieldState: FieldState<T>;
    setFieldState: React.Dispatch<React.SetStateAction<FieldState<T>>>;
    onInteract: () => void;
    setIsEmpty: (isEmpty: boolean) => void;
}

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
=======
  fieldState: FieldState<T>;
  setFieldState: React.Dispatch<React.SetStateAction<FieldState<T>>>;
  onInteract: () => void;
  setIsEmpty: (isEmpty: boolean) => void;
}

interface FilterRowProps<T> extends FilterStateAccessor<T> {
  fieldTitle: string;
  children: (props: FilterInputProps<T>) => React.ReactNode;
}

function FilterRow<T>({ fieldTitle, fieldState, setFieldState, children, onInteract, setIsEmpty }: FilterRowProps<T>) {
  const [value, setValue] = useState<T>(fieldState.value);

  useEffect(() => {
    setValue(fieldState.value);
  }, [fieldState.value]);

  useEffect(() => {
    if (value !== fieldState.value) {
      setFieldState((prev) => ({ ...prev, value }));
    }
  }, [value]);
  return (
    <div>
      <s.FilterTitleRow>
        <Checkbox checked={!!fieldState.isEnabled} onChange={(_, checked) => setFieldState({ isEnabled: checked, value })} />
        {fieldTitle}
      </s.FilterTitleRow>
      {children({
        value,
        setValue,
        isEnabled: !!fieldState.isEnabled,
        onInteract,
        setIsEmpty,
      })}
    </div>
  );
>>>>>>> 08b9beacdfaa18a2a51420f1bfcbab8cea39a3d9
}

export default FilterRow;
