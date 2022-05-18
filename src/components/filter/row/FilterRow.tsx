import { useEffect, useState, ReactNode } from 'react';
import { Checkbox } from '@mui/material';
import { FilterStateAccessor, FilterInputProps } from 'types/filter';
import { FilterTitleRow } from './Row.styled';

interface FilterRowProps<T> extends FilterStateAccessor<T> {
    fieldTitle: string;
    children: (props: FilterInputProps<T>) => ReactNode;
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
  }, [setFieldState, fieldState.value, value]);
  return (
    <div>
      <FilterTitleRow>
        <Checkbox checked={!!fieldState.isEnabled} onChange={(_, checked) => setFieldState({ isEnabled: checked, value })} />
        {fieldTitle}
      </FilterTitleRow>
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