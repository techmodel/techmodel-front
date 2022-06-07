import { createAction } from 'redux-actions';

export const authActionTypes = {
    setUserId: 'auth/SET_USER_ID'
};

export const setUserId = createAction(authActionTypes.setUserId, (userId: string) => ({ payload: { userId } }));

const authActions = {
    [authActionTypes.setUserId]: setUserId
};

export default authActions;
