import { FC, Dispatch, SetStateAction, useCallback, useState } from 'react';
import { FilterBarContainer, FilterBarTitle, FilterBarRowsContainer } from './FilterBar.styled';
import FilterRow, {inputs} from '../row';
import { FilterStateAccessor } from 'types/filter';
import { Filter } from '@mui/icons-material';

const { StringFilter, MultiSelectFilter } = inputs;

export interface FilterInputProps<T> {
  value: T;
  setValue: Dispatch<SetStateAction<T>>;
  isEnabled: boolean;
  onInteract?: () => void;
  setIsEmpty: (isEmpty: boolean) => void;
}

export interface FieldState<T> {
  value: T;
  isEnabled?: boolean;
  isEmpty?: boolean;
}

function useFieldProps<T>(initialValue: T): FilterStateAccessor<T> {
  const [fieldState, setFieldState] = useState<FieldState<T>>({ value: initialValue, isEmpty: !!initialValue, isEnabled: !!initialValue });
  const onInteract = useCallback(() => setFieldState((prev) => ({ ...prev, isEnabled: true })), []);
  const setIsEmpty = useCallback((isEmpty: boolean) => {
    setFieldState((prev) => ({ ...prev, isEmpty, isEnabled: !isEmpty }));
  }, []);
  return { fieldState, setFieldState, onInteract, setIsEmpty };
}

const FilterBar: FC = () => {
    const nameProps = useFieldProps<string>('אלי');
    const roleProps = useFieldProps<string>('מפתח תוכנה');
    const employerProps = useFieldProps<string>('אינטל');
    const languages = useFieldProps<string[]>(['עברית']);

    return (
        <FilterBarContainer>
            <FilterBarTitle>
            <Filter />
                &nbsp; סינון מתנדבים
            </FilterBarTitle>
            <FilterBarRowsContainer>
                <FilterRow fieldTitle='שם מתנדב' {...nameProps}>
                    {(props: any) => <StringFilter {...props} />}
                </FilterRow>
                <FilterRow fieldTitle='עיסוק' {...roleProps}>
                    {(props: any) => <StringFilter {...props} />}
                </FilterRow>
                <FilterRow fieldTitle='מעסיק' {...employerProps}>
                    {(props: any) => <StringFilter {...props} />}
                </FilterRow>
                <FilterRow fieldTitle='שפות' {...languages}>
                    {(props: any) => <MultiSelectFilter {...props} options={['עברית', 'אנגלית']} />}
                </FilterRow>
            </FilterBarRowsContainer>
        </FilterBarContainer>
    );
};

export default FilterBar;
