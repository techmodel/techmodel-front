import { Autocomplete, InputAdornment, TextField } from '@mui/material';
import React, { useEffect, useMemo } from 'react';
import { FilterInputProps } from '../../../FilterBar';

import * as s from '../../FilterRow.styled';
import { FilterProps } from '../hooks';

interface MultiSelectProps<T> {
  options: T[];
  getOptionLabel?: (option: T) => string;
}

<<<<<<< HEAD:src/components/FilterBar/FilterRow/filterInputs/multiSelectFilter/MultiSelectFilter.tsx
function MultiSelectFilter<T>({value, setValue, setIsEnabled, isRelevant, options, getOptionLabel}: FilterProps<T[]> & MultiSelectProps<T>) {
    const defaultValue = useMemo(() => value, []);
    
    return <s.MultiSelectFilterRow isRelevant={isRelevant}>
        <Autocomplete
            multiple
            options={options}
            getOptionLabel={getOptionLabel}
            defaultValue={defaultValue}
            onChange={(_, value) => setValue((_) => value)}
            renderInput={(params) => (
            <TextField
                {...params}
                variant='standard'
                onFocus={() => setIsEnabled(true)}
            />
            )}
        />
    </s.MultiSelectFilterRow>;
=======
function MultiSelectFilter<T>({
  value,
  setValue,
  isEnabled,
  options,
  getOptionLabel,
  onInteract,
  setIsEmpty,
}: FilterInputProps<T[]> & MultiSelectProps<T>) {
  useEffect(() => {
    setIsEmpty(!value || value.length === 0);
  }, [value]);

  return (
    <s.MultiSelectFilterRow isEnabled={isEnabled}>
      <Autocomplete
        multiple
        options={options}
        getOptionLabel={getOptionLabel}
        defaultValue={value}
        onChange={(_, value) => setValue((_) => value)}
        renderInput={(params) => <TextField {...params} variant='standard' onFocus={onInteract} />}
      />
    </s.MultiSelectFilterRow>
  );
>>>>>>> 08b9beacdfaa18a2a51420f1bfcbab8cea39a3d9:src/components/FilterBar/FilterRow/filterInputs/MultiSelectFilter.tsx
}

export default MultiSelectFilter;
