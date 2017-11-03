import { combineReducers } from 'redux';

import sideBar from './reducers/sideBar';

const todoApp = combineReducers({
  sideBar,
});

export default todoApp;