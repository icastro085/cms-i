import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './todoApp';
import App from './components/App';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import 'assets/style.less';

let store = createStore(todoApp);
const container = document.getElementById('root');

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  container
);
