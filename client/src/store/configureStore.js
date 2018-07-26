import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {routerMiddleware, routerReducer} from "react-router-redux";
import thunkMiddleware from "redux-thunk";
import createHistory from "history/createBrowserHistory";

import {loadState, saveState} from "./localStorage";

import userReducer from './reducers/users';
import bookReducer from './reducers/books';
import languagesReducer from './reducers/languages';
import statusReducer from './reducers/status';
import categoriesReducer from './reducers/categories';
import groupsReducer from './reducers/groups';
import readersReducer from './reducers/readers';
import journalsReducer from './reducers/journal';
import reportsReducer from './reducers/reports';


const rootReducer = combineReducers({
    users: userReducer,
    books: bookReducer,
    routing: routerReducer,
    languages: languagesReducer,
    status: statusReducer,
    categories: categoriesReducer,
    groups: groupsReducer,
    readers: readersReducer,
    journals: journalsReducer,
    reports: reportsReducer
});

export const history = createHistory();

const middleware = [
    thunkMiddleware,
    routerMiddleware(history),
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware(...middleware));

const persistedState = loadState();

const store = createStore(rootReducer, persistedState, enhancers);

store.subscribe(() => {
    saveState({
        users: store.getState().users
    });
});

export default store;