import { Autocomplete, InputAdornment, TextField } from '@mui/material';
import React, {  useMemo } from 'react';

import * as s from '../../FilterRow.styled';
import { FilterProps } from '../hooks';

interface MultiSelectProps<T> {
  options: T[];
  getOptionLabel?: (option: T) => string;
}

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
}

export default MultiSelectFilter;
