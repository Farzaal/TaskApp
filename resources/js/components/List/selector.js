import { createSelector } from 'reselect';

const selectUsers = (state) => state;

export const fetchUsers = () => createSelector(
    selectUsers,
    userState => userState.users.get('data')
);

export const loadingStatus = () => createSelector(
    selectUsers,
    userState => userState.users.get('loading')
);



