import { createAction } from 'redux-actions';
import { Filter } from 'types/filter';

export const filtersActionTypes = {
    enableFilter: 'filters/ENABLE_FILTER',
    disableFilter: 'filters/DISABLE_FILTER',
    setFilterValue: 'filters/SET_FILTER_VALUE',
    initializeFilters: 'filters/INITIALIZE_FILTERS',
};

export const enableFilter = createAction(
    filtersActionTypes.enableFilter,
    (field: string) => ({ payload: { field } })
);

export const disableFilter = createAction(
    filtersActionTypes.disableFilter,
    (field: string) => ({ payload: { field } })
);

export const setFilterValue = createAction(
    filtersActionTypes.setFilterValue,
    <T>(field: string, value: T) => ({ payload: { field, value } })
);

export const initializeFilters = createAction(
    filtersActionTypes.initializeFilters,
    (filters: Filter<boolean | number | string>[]) => ({ payload: { filters } })
);

const filtersActions = {
    [filtersActionTypes.enableFilter]: enableFilter
};

export default filtersActions;
