import { useCallback } from 'react';

import { basicFilterHook, FilterProps } from '../hooks';

export function useMultiSelectFilter<T>(fieldName: string, fieldTitle: string, initialValue?: T[]): FilterProps<T[]> {
    const isValueEmpty = useCallback((value) => !value || value.length === 0, []);
    return basicFilterHook<T[]>(fieldName, fieldTitle, initialValue ?? [], isValueEmpty);
}
