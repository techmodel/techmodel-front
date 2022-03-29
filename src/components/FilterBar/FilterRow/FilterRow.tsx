import React, { useEffect, useState } from 'react';

import * as s from './FilterRow.styled';

interface FilterRowProps<T> {
    fieldTitle:string;
    initialValue: T;
    setFilterValue: React.Dispatch<React.SetStateAction<T | undefined>>;
    valueTransform?: (value: any) => T;
}

const FilterRow = ({fieldTitle, initialValue, setFilterValue, valueTransform}: FilterRowProps<string>) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(!!initialValue);
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        setFilterValue(isExpanded ? value : undefined);
    }, [value, isExpanded]);

    return <div onClick={() => setIsExpanded(prev => !prev)}>
        <s.FilterTitleRow>
            {fieldTitle}
        </s.FilterTitleRow>
        <s.FilterInputRow isExpanded={isExpanded}>
            <input
            value={value}
            onChange={(e) => setValue(valueTransform ? valueTransform(e.target.value) : e.target.value)}
            />
        </s.FilterInputRow>
    </div>;
}

export default FilterRow;
