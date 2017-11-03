import { combineReducers } from 'redux';

import {
  SET_ACTIVE_SIDEBAR_ITEM,
} from './actions';

const CURRENT_LINK = window.location.hash.replace('#', '');

const sideBar = (state = CURRENT_LINK, action) => {
  switch (action.type) {
    case SET_ACTIVE_SIDEBAR_ITEM:
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