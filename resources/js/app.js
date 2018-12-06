import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import { combineReducers } from 'redux';
// import rootReducer from './rootReducer';
import userReducer   from './components/Create/reducer';
import logger from 'redux-logger';

require('./assets/js/bootstrap');

const sagaMiddleware = createSagaMiddleware();
const middlewareList = [sagaMiddleware, logger]
const rootReducer =  combineReducers({
        users : userReducer,
});


// const store = createStore(rootReducer, applyMiddleware(...middlewareList));
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><Header /></Provider>, document.getElementById('app'));
