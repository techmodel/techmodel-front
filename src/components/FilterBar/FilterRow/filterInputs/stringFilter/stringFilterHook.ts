import { useCallback } from 'react';
import { basicFilterHook, FilterProps } from '../hooks';

export function useStringFilter(fieldName: string, fieldTitle: string, initialValue?: string): FilterProps<string> {
    const isValueEmpty = useCallback((value) => !value, []);
    return basicFilterHook<string>(fieldName, fieldTitle, initialValue ?? '', isValueEmpty);
}
