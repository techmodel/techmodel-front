import React, { useEffect } from 'react';
import { FilterInputProps } from '../../FilterBar';

import * as s from '../FilterRow.styled';


const StringFilter = ({value, setValue, isEnabled, onInteract, setIsEmpty}: FilterInputProps<string>) => {
    useEffect(() => {
        setIsEmpty(!value || value.length === 0);
    }, [value]);
    return <s.StringFilterInputRow isEnabled={isEnabled}>
        <input onFocus={onInteract} value={value} onChange={e => setValue(e.target.value)} />
    </s.StringFilterInputRow>;
}

export default StringFilter;
