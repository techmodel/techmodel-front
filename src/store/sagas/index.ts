import { fork } from 'redux-saga/effects';
import rootUserSaga from './user';

export default function* rootSaga() {
    yield fork(rootUserSaga);
}
