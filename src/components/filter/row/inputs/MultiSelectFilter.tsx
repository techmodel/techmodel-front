import { Autocomplete, TextField } from '@mui/material';
import { useEffect } from 'react';
import { FilterInputProps } from 'types/filter';
import { MultiSelectFilterRow } from '../Row.styled';

interface MultiSelectProps<T> {
    options: T[];
    getOptionLabel?: (option: T) => string;
}

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
    }, [setIsEmpty, value]);

    return (
        <MultiSelectFilterRow isEnabled={isEnabled}>
        <Autocomplete
            multiple
            options={options}
            getOptionLabel={getOptionLabel}
            defaultValue={value}
            onChange={(_, value) => setValue((_) => value)}
            renderInput={(params) => <TextField {...params} variant='standard' onFocus={onInteract} />}
        />
        </MultiSelectFilterRow>
    );
}

export default MultiSelectFilter;
