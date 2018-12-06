
export function createUser(payload) {
    return {
        type : 'CREATE_USER',
        payload
    }
}

export function createUserSuccess(payload) {
    return {
        type : 'CREATE_USER_SUCCESS',
        payload
    }
}

export function createUserError() {
    return {
        type : 'CREATE_USER_ERROR',
    }
}

export function getUserAction(payload) {
    return {
        type : 'USER_BY_ID',
        payload
    }
}