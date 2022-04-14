import { Checkbox } from '@material-ui/core';
import React, { useCallback, useEffect, useState } from 'react';
import { FieldState, Filter, FilterInputProps } from '../FilterBar';
import { FilterProps } from './filterInputs/hooks';

import * as s from './FilterRow.styled';

export interface FilterStateAccessor<T> {
    getFilter: () => Filter<T>;
    fieldState: FieldState<T>;
    setFieldState: React.Dispatch<React.SetStateAction<FieldState<T>>>;
    onInteract: () => void;
    setIsEmpty: (isEmpty: boolean) => void;
}

interface FilterRowProps<T> extends FilterProps<T> {
    children: (props: FilterProps<T>) => React.ReactNode;
}

function FilterRow<T>({children, ...filterProps}: FilterRowProps<T>) {
    return <div>
        <s.FilterTitleRow>
        <Checkbox
            checked={filterProps.isEnabled}
            onChange={(_, checked)=> filterProps.setIsEnabled(checked)}
        />
            {filterProps.fieldTitle}
        </s.FilterTitleRow>
        {children(filterProps)}
    </div>;
}

export default FilterRow;
