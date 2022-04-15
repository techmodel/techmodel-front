import { useCallback, useEffect, useState } from 'react';

export function basicFilterHook<T>(fieldName: string, fieldTitle: string, initialValue: T, isValueEmpty: (value: T) => boolean): FilterProps<T> {
    const [value, setValue] = useState<T>(initialValue);
    const [isEnabled, setIsEnabled] = useState<boolean>(!isValueEmpty(initialValue));
    const [isEmpty, setIsEmpty] = useState<boolean>(isValueEmpty(initialValue));
    const isRelevant = !isEmpty && isEnabled;
    const toJson = useCallback(() => ({
        'filter_name': fieldName,
        'field_type': Array.isArray(value) ? 'multiple' : 'single',
        value,
    } as ApiFilter<T>), [value, fieldName]);

    useEffect(() => {
        setIsEmpty(isValueEmpty(value));
    }, [value]);

    useEffect(() => {
        setIsEnabled(!isEmpty);
    }, [isEmpty]);

    return {
        value,
        setValue,
        isEnabled,
        setIsEnabled,
        isRelevant,
        fieldName,
        fieldTitle,
        toJson,
    };
}

export interface FilterProps<T> {
    fieldName: string,
    fieldTitle: string,
    value: T,
    setValue: React.Dispatch<React.SetStateAction<T>>,
    isEnabled: boolean,
    setIsEnabled: React.Dispatch<React.SetStateAction<boolean>>,
    isRelevant: boolean,
    toJson: () => ApiFilter<T>;
}

export interface ApiFilter<T> {
    'filter_name': string,
    'field_type': 'multiple' | 'single',
    value: T,
}
