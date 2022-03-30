import React from 'react';
import { FilterInputProps } from '../../FilterBar';

import * as s from '../FilterRow.styled';


const StringFilter = ({value, setValue, isEnabled}: FilterInputProps<string>) => {
    return <s.FilterInputRow isEnabled={isEnabled}>
        <input value={value} onChange={e => setValue(e.target.value)} />
    </s.FilterInputRow>;
}

export default StringFilter;
