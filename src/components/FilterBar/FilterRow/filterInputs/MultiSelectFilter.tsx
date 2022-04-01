import { Autocomplete, InputAdornment, TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { FilterInputProps } from '../../FilterBar';

import * as s from '../FilterRow.styled';


interface MultiSelectProps<T> {
    options: T[];
    getOptionLabel?: (option: T) => string;
}

function MultiSelectFilter<T>({value, setValue, isEnabled, options, getOptionLabel, onInteract, setIsEmpty}: FilterInputProps<T[]> & MultiSelectProps<T>) {
    useEffect(() => {
        setIsEmpty(!value || value.length === 0);
    }, [value]);
    
    return <s.MultiSelectFilterRow isEnabled={isEnabled}>
        <Autocomplete
            multiple
            options={options}
            getOptionLabel={getOptionLabel}
            defaultValue={value}
            onChange={(_, value) => setValue((_) => value)}
            renderInput={(params) => (
            <TextField
                {...params}
                variant='standard'
                onFocus={onInteract}
            />
            )}
        />
    </s.MultiSelectFilterRow>;
}

export default MultiSelectFilter;
