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
    [userActionTypes.startLogin]: () => ({ ...initialState, isLoading: true }),
    [userActionTypes.successLogin]: (state, { payload }) => ({ ...state, ...payload, isLoading: false }),
    [userActionTypes.failureLogin]: (_, { payload: { error } }) => ({ ...initialState, error, isLoading: false }),
}, initialState);

export default userReducer;
