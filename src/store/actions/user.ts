import { Action, createAction } from 'redux-actions';
import { User } from 'types/user';

export const userActionTypes = {
    startLogin: 'user/START_LOGIN',
    successLogin: 'user/SUCCESS_LOGIN',
    failureLogin: 'user/FAILURE_LOGIN',
};

export const startLogin = createAction(
    userActionTypes.startLogin,
    (userId: string) => ({ payload: { userId } })
);

export const successLogin = createAction(
    userActionTypes.successLogin,
    (user: User) => ({ payload: { ...user }})
);

export const failureLogin = createAction(userActionTypes.failureLogin, (error: Error) => ({ payload: { error } }));

const userActions: {
    [actionType: string]: (...args: any[]) => Action<any>
} = {
    [userActionTypes.startLogin]: startLogin,
    [userActionTypes.successLogin]: successLogin,
    [userActionTypes.failureLogin]: failureLogin,
}

export default userActions;
