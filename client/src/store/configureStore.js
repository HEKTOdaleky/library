import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { routerMiddleware, routerReducer } from "react-router-redux";
import thunkMiddleware from "redux-thunk";
import createHistory from "history/createBrowserHistory";
import createSagaMiddleware from 'redux-saga';

import {rootSaga} from './sagas'


const rootReducer = combineReducers({

  routing: routerReducer
});

export const history = createHistory();

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  thunkMiddleware,
  routerMiddleware(history),
  sagaMiddleware
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware(...middleware));


const store = createStore(rootReducer, enhancers);

sagaMiddleware.run(rootSaga);


export default store;