import { handleActions } from 'redux-actions';
import { filtersActionTypes } from 'store/actions/filters';
import { Filter } from 'types/filter';
import { Action } from 'types/store';

const initialState: Filter<boolean | number | string>[] = [];

type ActionHandler = {
    [actionType: string]: (
        state: Filter<boolean | number | string>[],
        action: Action<any>
    ) => Filter<boolean | number | string>[]
};

const actionHandler: ActionHandler = {
    [filtersActionTypes.setFilterValue]: <T extends boolean | number | string>(
            state: Filter<boolean | number | string>[],
            { payload }: Action<{ field: string, value: T }>
        ): Filter<boolean | number | string>[] => {
        const { field, value } = payload;
        const filter = state.find(currentFilter => currentFilter.field === field);

        if (!filter) return state;

        filter.value = value;
        const otherFilters = state.filter(currentFitler => currentFitler.field !== field);

        return [ ...otherFilters, filter ];
    },

    [filtersActionTypes.initializeFilters]: (
        _,
        { payload }: Action<{ filters: Filter<boolean | number | string>[] }>
    ): Filter<boolean | number | string>[] => {
        const { filters } = payload;

        return filters.map(filter => ({ ...filter, isEnabled: false }));
    }
}

const filtersReducer = handleActions(actionHandler, initialState);


export default filtersReducer;
