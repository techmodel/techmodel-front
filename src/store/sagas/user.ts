import userApi from 'api/user';
import { call, put, takeEvery } from 'redux-saga/effects';
import userActions from 'store/actions/user';
import { Action } from 'types/store';


function* login(action: Action): Generator<any, any, any> {
    const { payload } = action;
    const userId: string = payload.userId;

    try {
        const userDetails = yield call(userApi.login, userId);

        yield put(userActions.successLogin(userDetails));
    }
    catch (error) {
        yield put(userActions.failureLogin(error));
    }
}

export default function* rootUserSaga() {
    takeEvery(userActions.startLogin, login);
}
