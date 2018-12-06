import userReducer   from './components/Create/reducer';
import { combineReducers } from 'redux';

function rootReducer(){
    return combineReducers({
        users : userReducer,
    });
}

export default rootReducer;


