import React, { useEffect } from 'react';

import * as s from '../../FilterRow.styled';
import { FilterProps } from '../hooks';


const StringFilter = ({value, setValue, setIsEnabled, isRelevant}: FilterProps<string>) => {
    return <s.StringFilterInputRow isRelevant={isRelevant}>
        <input onFocus={() => setIsEnabled(true)} value={value} onChange={e => setValue(e.target.value)} />
    </s.StringFilterInputRow>;
}

export default StringFilter;
