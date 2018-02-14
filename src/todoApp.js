import { combineReducers } from 'redux';

import sideBar from './reducers/sideBar';
import content from './reducers/content';

const todoApp = combineReducers({
  sideBar,
  content,
});

export default todoApp;
