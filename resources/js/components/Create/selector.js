import { createSelector } from 'reselect';

const selectedUserSelector = (state) => state.users.get('selectedUser');
const message = (state) =>  state.users.get('successMsg');

export const selectedUser = () => createSelector(
    selectedUserSelector,
    (selectedUser) => selectedUser.toJS()
)

export const successMessage = () => createSelector(
    message,
    (successMsg) => successMsg
)







