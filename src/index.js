import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import todoApp from './reducers';
import App from './components/App';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import 'assets/style.less';

// let store = createStore(todoApp);

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )

// store.subscribe(() => {
//   console.log(store.getState());
// });

const container = document.getElementById('root');
render(
  <App/>,
  container
);
