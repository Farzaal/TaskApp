import { fork, all } from "redux-saga/effects";
import userSaga from './components/Create/saga';
import listUserSaga from './components/List/saga';

function* rootSaga() {

    yield all ([
        fork(userSaga),
        fork(listUserSaga),
    ]);
}

export default rootSaga;