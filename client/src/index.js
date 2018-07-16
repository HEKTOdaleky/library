import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { ConnectedRouter } from "react-router-redux";

import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store, {history} from "./store/configureStore";

import axios from './axios-api';

axios.interceptors.request.use(config => {
  try {
    config.headers['Token'] = store.getState().users.token;
  } catch (e) {
    // do nothing
  }
  return config;
});

const app = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();

