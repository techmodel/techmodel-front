import { handleActions } from 'redux-actions';
import { authActionTypes } from 'store/actions/auth';

const initialState = {
  userId: '',
};

const authReducer = handleActions({
  [authActionTypes.setUserId]: (state, action) => ({
    ...state,
    ...action.payload
  })
}, initialState);

export default authReducer;
