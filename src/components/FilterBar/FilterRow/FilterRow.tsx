import { Checkbox } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { FieldState, FilterInputProps } from '../FilterBar';

import * as s from './FilterRow.styled';

export interface FilterStateAccessor<T> {
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
}

export default FilterRow;
