
export function listUsers() {
    return {
        type: 'LIST_USERS'
    }
}

export function listUsersSuccess(payload) {
    return {
        type: 'LIST_USERS_SUCCESS',
        payload
    }
}

export function listUsersError() {
    return {
        type: 'LIST_USERS_ERROR'
    }
}

export function deleteUser(payload) {
    return {
        type: 'DELETE_USER',
        payload
    }
}

export function deleteUserSuccess(payload) {
    return {
        type: 'DELETE_USER_SUCCESS',
        payload
    }
}

export function deleteUserError() {
    return {
        type: 'DELETE_USER_ERRROR',
    }
}