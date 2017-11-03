import {
  SIDEBAR_SET_ACTIVE,
} from 'actions/sideBar/item';

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

export default sideBar;