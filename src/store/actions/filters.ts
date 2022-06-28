import { createAction } from 'redux-actions';
import { Filter } from 'types/filter';

export const filtersActionTypes = {
    setFilterValue: 'filters/SET_FILTER_VALUE',
    initializeFilters: 'filters/INITIALIZE_FILTERS',
};

export const setFilterValue = createAction(
    filtersActionTypes.setFilterValue,
    <T>(field: string, value: T) => ({ payload: { field, value } })
);

export const initializeFilters = createAction(
    filtersActionTypes.initializeFilters,
    (filters: Filter<boolean | number | string>[]) => ({ payload: { filters } })
);

const filtersActions = {
    [filtersActionTypes.setFilterValue]: setFilterValue,
    [filtersActionTypes.initializeFilters]: initializeFilters,
};

export default filtersActions;
