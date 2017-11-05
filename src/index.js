import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger'

import "babel-polyfill";
import 'whatwg-fetch';

import todoApp from './todoApp';
import App from './components/App';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import './assets/style.less';

const loggerMiddleware = createLogger()
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
    <App/>
  </Provider>,
  container
);
