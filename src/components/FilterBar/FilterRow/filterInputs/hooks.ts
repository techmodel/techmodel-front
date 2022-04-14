import { useEffect, useState } from 'react';

export function basicFilterHook<T>(fieldName: string, fieldTitle: string, initialValue: T, isValueEmpty: (value: T) => boolean): FilterProps<T> {
    const [value, setValue] = useState<T>(initialValue);
    const [isEnabled, setIsEnabled] = useState<boolean>(!isValueEmpty(initialValue));
    const [isEmpty, setIsEmpty] = useState<boolean>(isValueEmpty(initialValue));
    const isRelevant = !isEmpty && isEnabled;

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
}