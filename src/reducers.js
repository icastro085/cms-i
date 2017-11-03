import { combineReducers } from 'redux';

import {
  SIDEBAR_SET_ACTIVE,
} from './actions';

const CURRENT_LINK = window.location.hash.replace('#', '');

const sideBar = (state = CURRENT_LINK, action) => {
  switch (action.type) {
    case SIDEBAR_SET_ACTIVE:
      return action.link;
    break;
    default:
      return state;
  }
};

const todoApp = combineReducers({
  sideBar,
});

export default todoApp;