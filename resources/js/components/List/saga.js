import { call, put, takeLatest } from 'redux-saga/effects';
import { listUsers, listUsersSuccess, listUsersError, deleteUserSuccess, deleteUserError } from './actions';
import axios from 'axios';

export default function* listUserSaga() {
    yield takeLatest('LIST_USERS', getUsers);    
    yield takeLatest('DELETE_USER', delUser);    
}

export function* getUsers(){
    try{ 
        const users = yield call(getUsersNow);
        yield put(listUsersSuccess(users));

    } catch(error) {
        console.log("listUserSaga", error);
        yield put(listUsersError());
    }
}

function getUsersNow() {    
    return axios.get('http://localhost:8000/list/user').then(res => {
        return res.data;
    });
}

// ------------------------------------  DELETE USER AJAX REQUEST ------------------------------------

export function* delUser(action) {
    try {
        const user = yield call(postUserId, action);
        console.log(user);
        yield put(deleteUserSuccess(user));

    } catch(error) {
        yield put(deleteUserError());
    }  
} 

function postUserId(payload) {    
    return axios.post('http://localhost:8000/user/delete', payload).then(res => {
        return res.data;
    });
}