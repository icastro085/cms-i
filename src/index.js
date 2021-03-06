import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import todoApp from './todoApp';
import App from './components/App';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import '../node_modules/toastr/build/toastr.css';
import '../node_modules/animate.css/animate.css';
import './assets/style.less';
import './assets/global.css';

const loggerMiddleware = createLogger();
const store = createStore(
  todoApp,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);
const container = document.getElementById('root');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  container
);
