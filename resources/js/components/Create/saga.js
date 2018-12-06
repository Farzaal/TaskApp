import { call, put, takeLatest } from 'redux-saga/effects';
import { createUser, createUserSuccess, createUserError } from './actions';
import axios from 'axios';

export default function* userSaga() {
    yield takeLatest('CREATE_USER', saveUserNow);    
}

export function* saveUserNow(action){
    try{ 
        const postUser = yield call(saveUser, action.payload);
        yield put(createUserSuccess(postUser));

    } catch(error) {
        console.log("userSaga", error);
        yield put(createUserError());
    }
}

function saveUser(payload) {    
    return axios.post('http://localhost:8000/create/user', payload).then(res => {
        return res.data;
    });
}