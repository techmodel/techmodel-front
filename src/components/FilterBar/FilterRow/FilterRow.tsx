import { Checkbox } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { FieldState, FilterInputProps } from '../FilterBar';

import * as s from './FilterRow.styled';


export interface FilterStateAccessor<T> {
    fieldState: FieldState<T>;
    setFieldState: React.Dispatch<React.SetStateAction<FieldState<T>>>;
}

interface FilterRowProps<T> extends FilterStateAccessor<T> {
    fieldTitle: string;
    children: (props: FilterInputProps<T>) => React.ReactNode;
}

function FilterRow<T>({fieldTitle, fieldState, setFieldState, children}: FilterRowProps<T>) {
    const [value, setValue] = useState<T>(fieldState.value);

    useEffect(() => {
        setValue(fieldState.value);
    }, [fieldState.value]);

    useEffect(() => {
        if (value !== fieldState.value) {
            setFieldState({isEnabled: !!value, value});
        }
    }, [value]);
    console.log(fieldState)
    return <div onClick={() => setFieldState({isEnabled: true, value})}>
        <s.FilterTitleRow>
        <Checkbox
            checked={!!fieldState.isEnabled}
            onChange={(_, checked)=> setFieldState({isEnabled: checked, value})}
        />
            {fieldTitle}
        </s.FilterTitleRow>
        {children({
            value,
            setValue,
            isEnabled: !!fieldState.isEnabled,
        })}
    </div>;
}

export default FilterRow;
