import { handleActions } from 'redux-actions';
import { userActionTypes } from 'store/actions/user';

const initialState = {
    error: null,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    pictureLocation: '',
    gender: '',
    userType: '',
    languages: [],
    populationType: '',
    companyName: '',
    companyRole: '',
    geoArea: '',
    isLoading: false,
}

const userReducer = handleActions({
    [userActionTypes.fetchUserDetails]: () => ({ ...initialState, isLoading: true }),
    [userActionTypes.successUserDetails]: (state, { payload }) => ({ ...state, ...payload, isLoading: false }),
    [userActionTypes.failureUserDetails]: (_, { payload: { error } }) => ({ ...initialState, error, isLoading: false }),
}, initialState);

export default userReducer;
