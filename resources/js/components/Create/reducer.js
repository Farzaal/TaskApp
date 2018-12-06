import { fromJS, Map, List } from 'immutable';

const initialState = fromJS({
    loading : false,
    error : false,
    data : [],
    successMsg : '',
    selectedUser : {}
});

export default function userReducer(state = initialState ,action) {
    switch(action.type){
        case 'CREATE_USER':
            return state.set('loading', true)
                        .set('error', false);
        case 'CREATE_USER_SUCCESS':
            state = state.set('loading', false)
                         .set('error', false)
                         .set('successMsg', 'User Saved Successfully');
            return state;                         
        case 'CREATE_USER_ERROR':
            return state.set('error', true)
                        .set('loading', false);
        case 'LIST_USERS':      
            return state.set('loading', true)
                        .set('error', false);
        case 'LIST_USERS_SUCCESS':
            state = state.set('data', List(action.payload))
                         .set('loading', false)
                         .set('error', false)
                         .set('successMsg', '');
            return state;
        case 'LIST_USERS_ERROR':
            return state.set('loading', false)
                        .set('error', true); 
        case 'USER_BY_ID':
            const index = state.get('data').findIndex(i => i.id == action.payload)
            const user = Map(state.get('data').get(index));
            state = state.set('selectedUser', user)
            return state;
        case 'DELETE_USER':
            state = state.set('loading', true)
                         .set('error', false);
            return state; 
        case 'DELETE_USER_SUCCESS':
            state = state.set('data', List(action.payload))
                         .set('loading', false);
            return state;
        case 'DELETE_USER_ERRROR':
            state = state.set('error', true);
            return state;
        default : 
            return state;    
    }
}
