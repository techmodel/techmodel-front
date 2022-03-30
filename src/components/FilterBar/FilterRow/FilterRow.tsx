import { Checkbox } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { FilterInputProps } from '../FilterBar';

import * as s from './FilterRow.styled';

interface FilterRowProps<T> {
    fieldTitle: string;
    initialValue: T;
    setFilterValue: React.Dispatch<React.SetStateAction<T | undefined>>;
    valueTransform?: (value: any) => T;
    children: (props: FilterInputProps<T>) => React.ReactNode;
}

const FilterRow = ({fieldTitle, initialValue, setFilterValue, children}: FilterRowProps<string>) => {
    const [isEnabled, setIsEnabled] = useState<boolean>(!!initialValue);
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        setFilterValue(isEnabled ? value : undefined);
    }, [value, isEnabled]);

    return <div onClick={() => setIsEnabled(true)}>
        <s.FilterTitleRow>
            {fieldTitle}
            <Checkbox
            checked={isEnabled}
            onChange={(_, checked)=> setIsEnabled(checked)}
        />
        </s.FilterTitleRow>
        {children({
            value,
            setValue,
            isEnabled,
        })}
    </div>;
}

export default FilterRow;
