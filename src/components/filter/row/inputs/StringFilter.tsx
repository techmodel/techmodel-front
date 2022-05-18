import { FC, useEffect } from 'react';
import { FilterInputProps } from 'types/filter';
import { StringFilterInputRow } from '../Row.styled';

const StringFilter: FC<FilterInputProps<string>> = ({
    value,
    setValue,
    isEnabled,
    onInteract,
    setIsEmpty
}) => {
    useEffect(() => {
        setIsEmpty(!value || value.length === 0);
    }, [setIsEmpty, value]);
    return (
        <StringFilterInputRow isEnabled={isEnabled}>
            <input onFocus={onInteract} value={value} onChange={e => setValue(e.target.value)} />
        </StringFilterInputRow>
    );
}

export default StringFilter;