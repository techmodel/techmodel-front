import { Dispatch, SetStateAction } from 'react';

export interface FilterInputProps<T> {
    value: T;
    setValue: Dispatch<SetStateAction<T>>;
    isEnabled: boolean;
    onInteract?: () => void;
    setIsEmpty: (isEmpty: boolean) => void;
};

export interface FieldState<T> {
    value: T;
    isEnabled?: boolean;
    isEmpty?: boolean;
};

export interface FilterStateAccessor<T> {
    fieldState: FieldState<T>;
    setFieldState: Dispatch<SetStateAction<FieldState<T>>>;
    onInteract: () => void;
    setIsEmpty: (isEmpty: boolean) => void;
};
