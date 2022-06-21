import { createAction } from 'redux-actions';
import { User } from 'types/user';

export const userActionTypes = {
    fetchUserDetails: 'user/FETCH_USER_DETAILS',
    successUserDetails: 'user/SUCCESS_USER_DETAILS',
    failureUserDetails: 'user/FAILURE_USER_DETAILS',
};

export const fetchUserDetails = createAction(userActionTypes.fetchUserDetails);

export const successUserDetails = createAction(
    userActionTypes.successUserDetails,
    (user: User) => ({ payload: { ...user }})
);

export const failureUserDetails = createAction(userActionTypes.failureUserDetails, (error: Error) => ({ payload: { error } }));

const userActions = {
    [userActionTypes.fetchUserDetails]: fetchUserDetails,
    [userActionTypes.successUserDetails]: successUserDetails,
    [userActionTypes.failureUserDetails]: failureUserDetails,
}

export default userActions;
