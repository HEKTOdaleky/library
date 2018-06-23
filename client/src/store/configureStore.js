import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { routerMiddleware, routerReducer } from "react-router-redux";
import thunkMiddleware from "redux-thunk";
import createHistory from "history/createBrowserHistory";
import createSagaMiddleware from 'redux-saga';

import {rootSaga} from './sagas'
import { loadState, saveState } from "./localStorage";


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


const persistedState = loadState();

const store = createStore(rootReducer, persistedState, enhancers);

sagaMiddleware.run(rootSaga);

store.subscribe(() => {
  saveState({
    users: store.getState().users
  });
});


export default store;